import axios from 'axios'
import {
	GET_CERTIFICATES_SUCCESS,
	SNACKBAR_OPEN,
	CREATE_CERTIFICATE_SUCCESS,
	GET_CERTIFICATE_ID_SUCCESS,
	GET_CERTIFICATE_ID_ERROR,
	UPDATE_CERTIFICATE_ID_SUCCESS,
	DELETE_POST_ID_SUCCESS,
	MODAL_OPEN,
	DELETE_CERTIFICATE_ID_SUCCESS
} from 'store/actions'
import { baseURL } from 'utils/constant'
import jwtDecode from 'jwt-decode'

const serviceGetCertificates = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(`${baseURL}/api/v1/adm/certificates`)

		dispatch({ type: GET_CERTIFICATES_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}

const serviceGetCertificateId = (id) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/certificates/${id}`
		)

		dispatch({ type: GET_CERTIFICATE_ID_SUCCESS, data })
	} catch (error) {
		if (error.response.status == 404) {
			dispatch({ type: GET_CERTIFICATE_ID_ERROR })
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

const servicecreateCertificate = (data, history, user) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { title, pdf, description } = data
	try {
		const { data } = await axios.post(
			`${baseURL}/api/v1/adm/certificates`,
			{
				authorId: sub,
				title,
				description,
				url: pdf
			}
		)
		let item = { ...data.data, author: { firstName: user.firstName } }

		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Certificate created',
			navType: 'success'
		})
		dispatch({
			type: CREATE_CERTIFICATE_SUCCESS,
			data: item
		})

		history('/admin/us/certificates')
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

const serviceUpdateCertificate = (data, history, user) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { title, pdf, description, id } = data
	try {
		const { data } = await axios.patch(
			`${baseURL}/api/v1/adm/certificates/${id}`,
			{
				title,
				url: pdf,
				description
			}
		)
		let item = { ...data.data, author: { firstName: user.firstName } }
		dispatch({ type: UPDATE_CERTIFICATE_ID_SUCCESS, data: item })
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: 'Certificate update'
		})

		history('/admin/us/certificates')
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

const serviceDeleteCertificate = (id, history) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.delete(
			`${baseURL}/api/v1/adm/certificates/${id}`
		)
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: data.message
		})

		dispatch({
			type: DELETE_CERTIFICATE_ID_SUCCESS,
			id: data?.id?.id
		})
		dispatch({
			type: MODAL_OPEN,
			modalOpen: false
		})
		history('/admin/us/certificates')
	} catch (error) {
		console.log(error)
	}
}
export {
	serviceGetCertificates,
	servicecreateCertificate,
	serviceGetCertificateId,
	serviceUpdateCertificate,
	serviceDeleteCertificate
}
