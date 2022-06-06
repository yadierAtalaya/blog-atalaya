import axios from 'axios'
import { baseURL } from 'utils/constant'

import {
	GET_MISSION_SUCCESS,
	GET_MISSION_ERROR,
	SNACKBAR_OPEN
} from 'store/actions'
// third-party
import jwtDecode from 'jwt-decode'

const servicecreateMission = (data, navigate) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { content } = data
	try {
		const { data } = await axios.post(
			`${baseURL}/api/v1/adm/companyIdentity/`,
			{
				authorId: sub,
				content,
				name: 'MISION'
			}
		)

		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Mission created',
			navType: 'success'
		})
		navigate('/admin/us')
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data

			if (error.response.status == 409) {
				dispatch({
					type: SNACKBAR_OPEN,
					message: message,
					navType: 'error'
				})
			}
			if (error.response.status == 401) {
				dispatch({
					type: SNACKBAR_OPEN,
					message: 'Unauthorized',
					navType: 'error'
				})

				//logout
			}
		} else if (error.request) {
			dispatch({
				type: SNACKBAR_OPEN,
				message: ' The request was made but no response was received',
				navType: 'error'
			})
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error ', error.message)
		}
	}
}

const serviceGetMission = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/companyIdentity/MISION`
		)

		dispatch({ type: GET_MISSION_SUCCESS, data })
	} catch (error) {
		if (error.response.status == 404) {
			dispatch({ type: GET_MISSION_ERROR })
		}
		console.log(error)
	}
}

const serviceUpdateMission = (data) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	const { sub } = jwtDecode(token)
	const { content } = data
	try {
		const { data } = await axios.patch(
			`${baseURL}/api/v1/adm/companyIdentity/MISION`,
			{
				content
			}
		)

		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: 'Mission update'
		})
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data
			dispatch({
				type: SNACKBAR_OPEN,
				message: message,
				navType: 'error'
			})
		} else {
			dispatch({
				type: SNACKBAR_OPEN,
				message: ' The request was made but no response was received',
				navType: 'error'
			})
		}
	}
}

export { serviceGetMission, servicecreateMission, serviceUpdateMission }
