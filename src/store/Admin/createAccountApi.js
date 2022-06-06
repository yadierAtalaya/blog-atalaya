import axios from 'axios'
import { baseURL } from 'utils/constant'
import { CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR } from 'store/actions'
// third-party

const servicecreateAccount = (data) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { firstName, lastName, email, password } = data
	try {
		const response = await axios.post(`${baseURL}/api/v1/users/adm`, {
			roleId: 1,
			firstName,
			lastName,
			email,
			password
		})

		//dispatch({ type: CREATE_ACCOUNT_SUCCESS, data: response.data })
	} catch (error) {
		console.log('Error', error)
	}
}

export { servicecreateAccount }
