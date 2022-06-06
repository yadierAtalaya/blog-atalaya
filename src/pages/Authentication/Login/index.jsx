import React, { useEffect, useState } from 'react'
import useAuth from 'hooks/useAuth'
import { LoginStyles } from './Login.styles'
import LogoAtalaya from 'assets/images/atalaya.svg'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAlert } from 'react-alert'

const schema = yup.object({
	email: yup
		.string()
		.email('Formato de usuario inválido')
		.required('El usuario es requerido'),

	password: yup
		.string()
		.trim('La contraseña no puede incluir espacios iniciales y finales')
		.strict(true)
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.max(255, 'La contraseña no puede exceder los 255 caracteres')
		.required('La contraseña es requerida')
})

const Login = () => {
	const { login } = useAuth()
	const { unautorized, message } = useAuth()
	const [state, setState] = useState(false)
	const alert = useAlert()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const onSubmit = (data) => {
		setState(true)
		login(data.email, data.password)
	}
	useEffect(() => {
		if (unautorized) {
			setState(false)
			alert.error(message)
		}
	}, [login])

	return (
		<LoginStyles state={state}>
			<div className='box-login'>
			<div className='box-logo'>
				<img src={LogoAtalaya} alt='' />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h3>Inicio de sesión</h3>
				<div>
					<input
						{...(register && { ...register('email') })}
						placeholder='Usuario'
						name='email'
						type='email'
					/>
					<div className='container-message'>
						{errors && (
							<p className='error-message'>
								{errors?.email?.message}
							</p>
						)}
					</div>
					<input
						{...(register && { ...register('password') })}
						placeholder='Contraseñas'
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
				<div className='box-forgot-password'>
					<p>¿Has olvidado la contraseña?</p>
				</div>
				<div className='box-log-in'>
					<button type='submit' className='button-loading'>
						{state ? (
							<span className='box-loading'></span>
						) : (
							<span>Iniciar sesión</span>
						)}
					</button>
				</div>
			</form>
			</div>
		</LoginStyles>
	)
}

export default Login
