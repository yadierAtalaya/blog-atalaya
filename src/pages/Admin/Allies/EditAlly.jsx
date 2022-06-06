import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormAllyStyles } from './FormAlly.styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LandscapeMenu from 'components/LandscapeMenu'
import {
	serviceGetallyIdAdm,
	serviceUpdateAlly,
	serviceDeleteAlly
} from 'store/Admin/allyApi'
import useAuth from 'hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom'
import basura from 'assets/icons/basura.svg'
import { MODAL_OPEN, RESET_ALLY } from 'store/actions'
import FrmDeleteItem from 'components/FormDeleteItem'
import Modal from 'components/Modal'
import { allySchema } from 'utils/schemas/allySchema'

const Title = () => {
	return (
		<h2 className='title'>
			¿Estás seguro de que quieres{' '}
			<span className='ms-delete'>eliminar</span> este aliado?
		</h2>
	)
}

const EditAlly = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const navigate = useNavigate()
	let { id } = useParams()
	const { modalOpen } = useSelector((state) => state.customization)
	const { allyId, allyNotFound } = useSelector((state) => state.allyAdm)

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(allySchema)
	})

	useEffect(() => {
		dispatch({ type: RESET_ALLY })
	}, [])

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceGetallyIdAdm(id))
		}, 500)
	}, [])

	useEffect(() => {
		if (allyId) {
			const { name, url, image, description } = allyId
			setValue('name', name)
			setValue('url', url)
			setValue('image', image)
			setValue('description', description)
		}
	}, [allyId])

	const onSubmit = (data) => {
		dispatch(serviceUpdateAlly({ id: allyId.id, ...data }, navigate, user))
	}

	const haldleDeleteItem = () => {
		dispatch(serviceDeleteAlly(id, navigate))
	}

	return (
		<FormAllyStyles>
			<LandscapeMenu active={3} />
			{allyId === null ? (
				allyNotFound ? (
					<h1 className='not-found'>Publicación no encontrada.</h1>
				) : (
					<h1 className='loading'>Cargando...</h1>
				)
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='frm-head'>
						<h2>Editar aliado</h2>
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
							<h4>Aliado: </h4>
						</div>
						<div className='col-75'>
							<input
								{...(register && {
									...register('name')
								})}
								name='name'
								autoComplete='off'
							/>
							{errors && (
								<p className='error-message'>
									{errors?.name?.message}
								</p>
							)}
						</div>
						<div className='col-25'>
							<h4>Url: </h4>
						</div>
						<div className='col-75'>
							<input
								{...(register && {
									...register('url')
								})}
								name='url'
								autoComplete='off'
							/>
							{errors && (
								<p className='error-message'>
									{errors?.url?.message}
								</p>
							)}
						</div>
						<div className='col-25'>
							<h4>Imagen: </h4>
						</div>
						<div className='col-75'>
							<input
								{...(register && {
									...register('image')
								})}
								name='image'
								autoComplete='off'
							/>
							{errors && (
								<p className='error-message'>
									{errors?.image?.message}
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
		</FormAllyStyles>
	)
}

export default EditAlly
