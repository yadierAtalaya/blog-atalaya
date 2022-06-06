import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { serviceProfile, servicePasswordChange } from 'store/Admin/profileApi'
import { ProfileStyles } from './profile.styles'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { MODIFY_PASSWORD_RESET } from 'store/actions'
import { useAlert } from 'react-alert'

const schema = yup.object({
	password: yup
		.string()
		.trim('La contraseña no puede incluir espacios iniciales y finales')
		.strict(true)
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.max(255, 'La contraseña no puede exceder los 255 caracteres')
		.required('La contraseña es requerida'),
	passwordNew: yup
		.string()
		.trim('La contraseña no puede incluir espacios iniciales y finales')
		.strict(true)
		.min(8, 'La contraseña debe tener al menos 8 caracteres')
		.max(255, 'La contraseña no puede exceder los 255 caracteres')
		.required('La contraseña es requerida'),
	passwordConfirmation: yup
		.string()
		.oneOf(
			[yup.ref('passwordNew'), null],
			'Las contraseñas deben coincidir'
		)
})

export default function Profile() {
	const alert = useAlert()
	const dispatch = useDispatch()
	const { user, passwordChanged } = useSelector((state) => state.profile)
	const [state, setState] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	useEffect(() => {
		dispatch({ type: MODIFY_PASSWORD_RESET })
		dispatch(serviceProfile())
	}, [])

	useEffect(() => {
		if (passwordChanged === false) {
			alert.error('Contraseña antigua incorrecta.')
			dispatch({ type: MODIFY_PASSWORD_RESET })
		}
	}, [passwordChanged])

	const onSubmit = (data) => {
		dispatch(servicePasswordChange(data))
	}

	return (
		<ProfileStyles>
			<div className='title-profile'>
				<h2>Perfil</h2>
			</div>
			<div className='container-profile'>
				<div className='box-profile-data'>
					<div>
						<h4>Nombre: </h4>
						<p className='typography'>{user.firstName}</p>
					</div>
					<div>
						<h4>Apellidos: </h4>
						<p className='typography'>{user.lastName}</p>
					</div>

					<div>
						<h4>E-mail: </h4>
						<p className='typography'>{user.email}</p>
					</div>
					<div>
						<button
							className='btn-password'
							onClick={() => {
								setState(!state)
								dispatch({ type: MODIFY_PASSWORD_RESET })
							}}
						>
							Cambiar contraseña
						</button>
					</div>
				</div>
				{state ? (
					<div className='box-change-pasword'>
						{!passwordChanged ? (
							<form onSubmit={handleSubmit(onSubmit)}>
								<div>
									<input
										{...(register && {
											...register('password')
										})}
										type='password'
										placeholder='Contraseña actual'
										name='password'
										autoComplete='off'
									/>
									{errors && (
										<p className='error-message'>
											{errors?.password?.message}
										</p>
									)}
								</div>
								<div>
									<input
										{...(register && {
											...register('passwordNew')
										})}
										type='password'
										placeholder='Nueva contraseña'
										name='passwordNew'
										autoComplete='off'
									/>
									{errors && (
										<p className='error-message'>
											{errors?.passwordNew?.message}
										</p>
									)}
								</div>
								<div>
									<input
										{...(register && {
											...register('passwordConfirmation')
										})}
										type='password'
										placeholder='Confirmar contraseña'
										name='passwordConfirmation'
										autoComplete='off'
									/>
									{errors && (
										<p className='error-message'>
											{
												errors?.passwordConfirmation
													?.message
											}
										</p>
									)}
								</div>
								<div className='save-password'>
									<button>✔</button>
								</div>
							</form>
						) : (
							<div className='box-message'>
								<h3>
									Tu contraseña ha sido cambiada
									correctamente.
								</h3>
							</div>
						)}
					</div>
				) : null}
			</div>
		</ProfileStyles>
	)
}
