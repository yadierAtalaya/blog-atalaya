import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { serviceProfile, servicePasswordChange } from 'store/Admin/profileApi'
import { CreateAccountStyles } from './createAccount.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MODIFY_PASSWORD_RESET } from 'store/actions'
import { useAlert } from 'react-alert'
import { servicecreateAccount } from 'store/Admin/createAccountApi'

const schema = yup.object({
	firstName: yup
		.string()
		.trim('Nombre no puede incluir espacios iniciales y finales')
		.min(3, 'Nombre debe tener al menos 3 caracteres')
		.max(255, 'Nombre no puede exceder los 255 caracteres')
		.required('Nombre es requerido'),
	lastName: yup
		.string()
		.trim('Apellido no puede incluir espacios iniciales y finales')
		.min(3, 'Apellido debe tener al menos 3 caracteres')
		.max(255, 'Apellido no puede exceder los 255 caracteres')
		.required('Apellido es requerido'),
	email: yup
		.string()
		.email('Debe ser un correo electrónico válido')
		.required('E-mail es requerido'),
	password: yup
		.string()
		.trim('Contraseña no puede incluir espacios iniciales y finales')
		.strict(true)
		.min(8, 'Contraseña debe tener al menos 8 caracteres')
		.max(255, 'Contraseña no puede exceder los 255 caracteres')
		.required('Contraseña es requerida'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Contraseñas deben coincidir')
})

export default function Profile() {
	const alert = useAlert()
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const onSubmit = (data) => {
		dispatch(servicecreateAccount(data))
	}

	return (
		<CreateAccountStyles>
			<div className='title-create-account'>
				<h2>Crear cuenta</h2>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='col-25'>
					<h4>Nombre: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('firstName')
						})}
						name='firstName'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.firstName?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<h4>Apellido: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('lastName')
						})}
						name='lastName'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.lastName?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<h4>E-mail: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('email')
						})}
						name='email'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.email?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<h4>Contraseña: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('password')
						})}
						type='password'
						name='password'
						autoComplete='off'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.password?.message}
						</p>
					)}
				</div>
				<div className='col-25'>
					<h4>Confirmar contraseña: </h4>
				</div>
				<div className='col-75'>
					<input
						{...(register && {
							...register('passwordConfirmation')
						})}
						type='password'
						name='passwordConfirmation'
						autoComplete='new-password'
					/>
					{errors && (
						<p className='error-message'>
							{errors?.passwordConfirmation?.message}
						</p>
					)}
				</div>
				<div className='box-actions'>
					<button>Cancelar</button>
					<button type='submit'>Enviar</button>
				</div>
			</form>
		</CreateAccountStyles>
	)
}
