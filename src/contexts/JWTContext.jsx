import PropTypes from 'prop-types'
import React, { createContext, useEffect, useReducer } from 'react'
import { baseURL } from 'utils/constant'

// third-party
import jwtDecode from 'jwt-decode'

// reducer - state management
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT, UNAUTORIZED } from 'store/actions'
import accountReducer from 'store/accountReducer'

// project imports
import axios from 'utils/axios'
import Loader from 'components/Loader/'

// constant
const initialState = {
	isLoggedIn: false,
	isInitialized: false,
	user: null,
	unautorized: false,
	message: ''
}
//serviceToken - token - remplazar
const verifyToken = (token) => {
	if (!token) {
		return false
	}
	const decoded = jwtDecode(token)
	return decoded.exp > Date.now() / 1000
}

const setSession = (token) => {
	if (token) {
		localStorage.setItem('token', token)
		axios.defaults.headers.common.Authorization = `Bearer ${token}`
	} else {
		localStorage.removeItem('token')
		delete axios.defaults.headers.common.Authorization
	}
}

// ===========================|| JWT CONTEXT & PROVIDER ||=========================== //

const JWTContext = createContext({
	...initialState,
	login: () => Promise.resolve(),
	logout: () => {}
})

export const JWTProvider = ({ children }) => {
	const [state, dispatch] = useReducer(accountReducer, initialState)

	const login = async (email, password) => {
		try {
			const response = await axios.post(`${baseURL}/api/v1/auth/login/`, {
				email,
				password
			})
			const { token, user } = response.data

			setSession(token)
			dispatch({
				type: LOGIN,
				payload: {
					user
				}
			})
			dispatch({ type: UNAUTORIZED, payload: { unautorized: false } })
		} catch (error) {
			if (error.message) {
				dispatch({
					type: UNAUTORIZED,
					payload: {
						unautorized: true,
						message:
							'Dirección de correo electrónico o contraseña incorrectas.'
					}
				})
			} else {
				dispatch({
					type: UNAUTORIZED,
					payload: {
						unautorized: true,
						message:
							'Se realizó la solicitud pero no se recibió respuesta.'
					}
				})
			}
		}
	}

	const logout = () => {
		setSession(null)
		dispatch({ type: LOGOUT })
	}

	useEffect(() => {
		const init = async () => {
			try {
				const token = window.localStorage.getItem('token')
				const { sub } = jwtDecode(token)
				if (token && verifyToken(token)) {
					setSession(token)
					const response = await axios.get(
						`${baseURL}/api/v1/users/${sub}`
					)
					const user = response.data
					dispatch({
						type: ACCOUNT_INITIALIZE,
						payload: {
							isLoggedIn: true,
							user
						}
					})
				} else {
					dispatch({
						type: ACCOUNT_INITIALIZE,
						payload: {
							isLoggedIn: false,
							user: null
						}
					})
				}
			} catch (err) {
				dispatch({
					type: ACCOUNT_INITIALIZE,
					payload: {
						isLoggedIn: false,
						user: null
					}
				})
			}
		}

		init()
	}, [])

	if (!state.isInitialized) {
		return <Loader />
	}

	return (
		<JWTContext.Provider value={{ ...state, login, logout }}>
			{children}
		</JWTContext.Provider>
	)
}

JWTProvider.propTypes = {
	children: PropTypes.node.isRequired
}

export default JWTContext
