import axios from 'axios'
import { baseURL } from 'utils/constant'
import {
	GET_PROFILE_SUCCESS,
	MODIFY_PASSWORD_SUCCESS,
	MODIFY_PASSWORD_ERROR
} from 'store/actions'
// third-party
import jwtDecode from 'jwt-decode'

const serviceProfile = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	const { sub } = jwtDecode(token)
	try {
		const response = await axios.get(`${baseURL}/api/v1/users/${sub}`)
		dispatch({ type: GET_PROFILE_SUCCESS, data: response.data })
	} catch (error) {
		console.log(error)
	}
}

const servicePasswordChange = (data) => async (dispatch) => {
	const { password, passwordNew } = data
	try {
		const token = window.localStorage.getItem('token')
		axios.defaults.headers.common.Authorization = `Bearer ${token}`
		await axios.post(`${baseURL}/api/v1/auth/modify-password`, {
			password,
			newPassword: passwordNew
		})
		dispatch({ type: MODIFY_PASSWORD_SUCCESS })
	} catch (error) {
		dispatch({ type: MODIFY_PASSWORD_ERROR })
	}
}

export { serviceProfile, servicePasswordChange }
