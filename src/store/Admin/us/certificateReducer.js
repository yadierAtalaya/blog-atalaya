// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	certificates: [],
	certificateId: null,
	certificateNotFound: false
}

// ===========================|| CERTIFICATES REDUCER ||=========================== //

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_CERTIFICATE_SUCCESS:
			let newCertificate = action.data
			return {
				...state,
				certificates: [newCertificate, ...state.certificates]
			}
		case actionTypes.GET_CERTIFICATES_SUCCESS:
			return {
				...state,
				certificates: action.data
			}
		case actionTypes.GET_CERTIFICATE_ID_SUCCESS:
			return {
				...state,
				certificateId: action.data
			}
		case actionTypes.GET_CERTIFICATE_ID_ERROR:
			return {
				...state,
				certificateNotFound: true
			}
		case actionTypes.UPDATE_CERTIFICATE_ID_SUCCESS:
			let certificate = action.data
			return {
				...state,
				certificates: state.certificates.map((item) =>
					item.id === certificate.id ? certificate : item
				)
			}
		case actionTypes.RESET_CERTIFICATE:
			return {
				...state,
				certificateId: null,
				certificateNotFound: false
			}

		case actionTypes.DELETE_CERTIFICATE_ID_SUCCESS:
			let id = action.id

			return {
				...state,
				certificates: state.certificates.filter(
					(item) => item.id !== id
				)
			}

		default:
			return state
	}
}

export default postsReducer
