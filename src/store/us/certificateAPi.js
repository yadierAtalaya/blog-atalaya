import axios from 'axios'
import { baseURL } from 'utils/constant'
import { GET_CERTIFICATES_US_SUCCESS,GET_CERTIFICATE_ID_US_SUCCESS } from 'store/actions';

const serviceGetCertificatesUs = () => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/certificates`
		)
		dispatch({ type: GET_CERTIFICATES_US_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}

const serviceGetCertificateIdUs = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/certificates/${id}`
		)
		dispatch({ type: GET_CERTIFICATE_ID_US_SUCCESS, data })
	} catch (error) {
		console.log(error)
	}
}


export { serviceGetCertificatesUs, serviceGetCertificateIdUs }