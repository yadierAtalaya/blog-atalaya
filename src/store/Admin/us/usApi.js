import axios from 'axios'
import { baseURL, limit } from 'utils/constant'

import { GET_US_CERTIFICATE_SUCCESS, GET_US_SUCCESS } from 'store/actions'
// third-party

const serviceGetUs = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/companyIdentity?limit=2&offset=0&us=1`
		)

		dispatch({ type: GET_US_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}

const serviceGetUsCertificate = () => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/certificates?limit=1&offset=0`
		)

		dispatch({ type: GET_US_CERTIFICATE_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}

export { serviceGetUs, serviceGetUsCertificate }
