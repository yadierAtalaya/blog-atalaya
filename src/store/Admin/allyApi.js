import axios from 'axios'
import {
	GET_ALLIES_ADM_SUCCESS,
	SNACKBAR_OPEN,
	CREATE_ALLY_SUCCESS,
	GET_ALLY_ID_ADM_SUCCESS,
	GET_ALLY_ID_ADM_ERROR,
	UPDATE_ALLY_ID_SUCCESS,
	MODAL_OPEN,
	DELETE_ALLY_ID_SUCCESS
} from 'store/actions'
import { baseURL } from 'utils/constant'
import jwtDecode from 'jwt-decode'

const serviceGetAlliesAdm = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(`${baseURL}/api/v1/adm/allies`)

		dispatch({ type: GET_ALLIES_ADM_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}

const serviceGetallyIdAdm = (id) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(`${baseURL}/api/v1/adm/allies/${id}`)

		dispatch({ type: GET_ALLY_ID_ADM_SUCCESS, data })
	} catch (error) {
		if (error.response.status == 404) {
			dispatch({ type: GET_ALLY_ID_ADM_ERROR })
		} else {
			dispatch({
				type: SNACKBAR_OPEN,
				message: ' The request was made but no response was received',
				navType: 'error'
			})
		}
		console.log(error)
	}
}

const serviceCreateAlly = (data, history, user) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { name, image, description, url } = data
	try {
		const { data } = await axios.post(`${baseURL}/api/v1/adm/allies`, {
			name,
			url,
			image,
			description,
			authorId: sub
		})
		let item = { ...data.data, author: { firstName: user.firstName } }

		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Ally created',
			navType: 'success'
		})
		dispatch({
			type: CREATE_ALLY_SUCCESS,
			data: item
		})

		history('/admin/allies')
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data

			if (error.response.status == 409) {
				dispatch({
					type: SNACKBAR_OPEN,
					message: `${message} - Ingrese otro titulo`,
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

const serviceUpdateAlly = (data, history, user) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	const { name, image, description, url, id } = data

	try {
		const { data } = await axios.patch(
			`${baseURL}/api/v1/adm/allies/${id}`,
			{
				name,
				image,
				description,
				url
			}
		)
		let item = { ...data.data, author: { firstName: user.firstName } }
		dispatch({ type: UPDATE_ALLY_ID_SUCCESS, data: item })
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: 'Ally update'
		})

		history('/admin/allies')
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

const serviceDeleteAlly = (id, history) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.delete(
			`${baseURL}/api/v1/adm/allies/${id}`
		)
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: data.message
		})

		dispatch({
			type: DELETE_ALLY_ID_SUCCESS,
			id: data?.id?.id
		})
		dispatch({
			type: MODAL_OPEN,
			modalOpen: false
		})
		history('/admin/allies')
	} catch (error) {
		console.log(error)
	}
}
export {
	serviceGetAlliesAdm,
	serviceCreateAlly,
	serviceGetallyIdAdm,
	serviceUpdateAlly,
	serviceDeleteAlly
}
