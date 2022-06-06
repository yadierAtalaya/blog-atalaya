import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormCertificateStyles } from './FormCertificate.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LandscapeMenu from 'components/LandscapeMenu'
import {
	servicecreateCertificate,
	serviceDeleteCertificate,
	serviceGetCertificateId,
	serviceUpdateCertificate
} from 'store/Admin/us/certificateApi'
import useAuth from 'hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import basura from 'assets/icons/basura.svg'
import { MODAL_OPEN, RESET_CERTIFICATE } from 'store/actions'
import FrmDeleteItem from 'components/FormDeleteItem'
import Modal from 'components/Modal'

const Title = () => {
	return (
		<h2 className='title'>
			¿Estás seguro de que quieres{' '}
			<span className='ms-delete'>eliminar</span> este certificado?
		</h2>
	)
}
const schema = yup.object({
	title: yup
		.string()
		.trim('Titulo no puede incluir espacios iniciales y finales')
		.min(3, 'Titulo debe tener al menos 3 caracteres')
		.max(255, 'Titulo no puede exceder los 255 caracteres')
		.required('Titulo es requerido'),
	pdf: yup
		.string()
		.trim('Pdf no puede incluir espacios iniciales y finales')
		.min(3, 'Pdf debe tener al menos 3 caracteres'),

	description: yup
		.string()
		.trim('Descripción no puede incluir espacios iniciales y finales')
		.min(3, 'Descripción debe tener al menos 3 caracteres')
		.required('Descripción es requerida'),
	status: yup.boolean()
})

const EditCertificate = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const navigate = useNavigate()
	let { id } = useParams()
	const { modalOpen } = useSelector((state) => state.customization)
	const { certificateId, certificateNotFound } = useSelector(
		(state) => state.certificate
	)

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	useEffect(() => {
		dispatch({ type: RESET_CERTIFICATE })
	}, [])

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceGetCertificateId(id))
		}, 500)
	}, [])
	useEffect(() => {
		if (certificateId) {
			const { title, url, description } = certificateId
			setValue('title', title)
			setValue('pdf', url)
			setValue('description', description)
		}
	}, [certificateId])

	const onSubmit = (data) => {
		dispatch(
			serviceUpdateCertificate(
				{ id: certificateId.id, ...data },
				navigate,
				user
			)
		)
	}

	const haldleDeleteItem = () => {
		dispatch(serviceDeleteCertificate(id, navigate))
	}

	return (
		<FormCertificateStyles>
			<LandscapeMenu active={2} />
			{certificateId === null ? (
				certificateNotFound ? (
					<h1 className='not-found'>Publicación no encontrada.</h1>
				) : (
					<h1 className='loading'>Cargando...</h1>
				)
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='frm-head'>
						<h2>Editar certificado</h2>
						<div className='box-btn'>
							<button className='btn-save' type='submit'>
								Guardar
							</button>
							<span
								type='text'
								className='btn-delete'
								onClick={() => {
									dispatch({
										type: MODAL_OPEN,
										modalOpen: true
									})
								}}
							>
								<img width='20px' src={basura} alt='' />
							</span>
						</div>
					</div>
					<div className='frm-cont'>
						<div className='col-25'>
							<h4>Titulo: </h4>
						</div>
						<div className='col-75'>
							<input
								{...(register && {
									...register('title')
								})}
								name='title'
								autoComplete='off'
							/>
							{errors && (
								<p className='error-message'>
									{errors?.title?.message}
								</p>
							)}
						</div>
						<div className='col-25'>
							<h4>Pdf: </h4>
						</div>
						<div className='col-75'>
							<input
								{...(register && {
									...register('pdf')
								})}
								name='pdf'
								autoComplete='off'
							/>
							{errors && (
								<p className='error-message'>
									{errors?.pdf?.message}
								</p>
							)}
						</div>

						<div className='col-25'>
							<h4>Descripción: </h4>
						</div>
						<div className='col-75'>
							<textarea
								{...(register && {
									...register('description')
								})}
								rows='4'
								name='description'
								autoComplete='off'
							/>
							{errors && (
								<p className='error-message'>
									{errors?.description?.message}
								</p>
							)}
						</div>
					</div>
				</form>
			)}
			{modalOpen && (
				<Modal open head>
					<div className='box-p'>
						<FrmDeleteItem
							Title={Title}
							haldleDeleteItem={haldleDeleteItem}
						/>
					</div>
				</Modal>
			)}
		</FormCertificateStyles>
	)
}

export default EditCertificate
