import axios from 'axios'
import { baseURL } from 'utils/constant'
import { GET_MISION_US_SUCCESS, GET_VISION_US_SUCCESS } from 'store/actions';

const serviceGetMissionUs = () => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/companyIdentity/MISION`
		)
		dispatch({ type: GET_MISION_US_SUCCESS, data })
		
	} catch (error) {
		console.log(error)
	}
}

const serviceGetVisionUs = () => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/companyIdentity/VISION`
		)
		
		dispatch({ type: GET_VISION_US_SUCCESS, data })
		
	} catch (error) {
		console.log(error)
	}
}
export { serviceGetMissionUs ,serviceGetVisionUs}