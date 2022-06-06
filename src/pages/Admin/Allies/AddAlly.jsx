import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormAllyStyles } from './FormAlly.styles'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LandscapeMenu from 'components/LandscapeMenu'
import useAuth from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { serviceCreateAlly } from 'store/Admin/allyApi'
import { allySchema } from 'utils/schemas/allySchema'

const AddAlly = () => {
	const dispatch = useDispatch()
	const { user } = useAuth()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(allySchema)
	})

	const onSubmit = (data) => {
		dispatch(serviceCreateAlly(data, navigate, user))
	}

	return (
		<FormAllyStyles>
			<LandscapeMenu active={3} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='frm-head'>
					<h2>Nuevo aliado</h2>
					<button className='btn-save' type='submit'>
						Guardar
					</button>
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
		</FormAllyStyles>
	)
}

export default AddAlly
