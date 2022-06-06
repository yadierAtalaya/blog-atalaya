import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormSavePostStyles } from './FormSavePost.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import close from 'assets/icons/close2.svg'
import { convertToSlug } from 'utils/slug'
import { servicecreatePost, serviceUpdatePost } from 'store/Admin/posts/postApi'
import { useAlert } from 'react-alert'
import { CREATE_POST_RESET, MODAL_OPEN } from 'store/actions'
import { useNavigate } from 'react-router-dom'
import useAuth from 'hooks/useAuth'

const valuesInitial = { title: '', image: '', description: '', status: true }

const schema = yup.object({
	title: yup
		.string()
		.trim('Titulo no puede incluir espacios iniciales y finales')
		.min(3, 'Titulo debe tener al menos 3 caracteres')
		.max(255, 'Titulo no puede exceder los 255 caracteres')
		.required('Titulo es requerido'),
	image: yup
		.string()
		.trim('Portada no puede incluir espacios iniciales y finales')
		.min(3, 'Portada debe tener al menos 3 caracteres'),

	description: yup
		.string()
		.trim('Descripción no puede incluir espacios iniciales y finales')
		.min(3, 'Descripción debe tener al menos 3 caracteres')
		.required('Descripción es requerida'),
	status: yup.boolean()
})

const FrmSavePost = ({ content, dataEdit }) => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const [values, setValues] = useState(dataEdit ? dataEdit : valuesInitial)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
		defaultValues: {
			title: values.title,
			image: values.image,
			description: values.description,
			status: values.status
		}
	})

	const onSubmit = (data) => {
		const slug = convertToSlug(data.title)
		if (!dataEdit) {
			dispatch(servicecreatePost({ ...data, slug, content }, navigate, user))
		} else {
			dispatch(
				serviceUpdatePost(
					{
						...data,
						slug,
						content,
						slugEdit: values.slug
					},
					navigate,user
				)
			)
		}
	}

	return (
		<FormSavePostStyles>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='head-form'>
					<span
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: false
							})
						}
					>
						<img src={close} alt='' />
					</span>
				</div>
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
					<h4>Portada: </h4>
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
				<div className='col-25'>
					<h4>Estado</h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('status')
						})}
						type='checkbox'
						name='status'
						//defaultChecked={true}
						className='checkbox'
					/>

					{errors && (
						<p className='error-message'>
							{errors?.status?.message}
						</p>
					)}
				</div>
				<div className='box-actions'>
					<button className='btn-send' type='submit'>
						Ok
					</button>
					<button
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: false
							})
						}
						className='btn-cacel'
					>
						Cancelar
					</button>
				</div>
			</form>
		</FormSavePostStyles>
	)
}

export default FrmSavePost
