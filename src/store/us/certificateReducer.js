// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	certificates: [],
	certificateId:null
}

// ===========================|| CERTIFICATE REDUCER ||=========================== //

const certificateUsReducer = (state = initialState, action) => {
	switch (action.type) {	
		case actionTypes.GET_CERTIFICATES_US_SUCCESS:
			return {
				...state,
				certificates: action.data
			}
			case actionTypes.GET_CERTIFICATE_ID_US_SUCCESS:
				return {
					...state,
					certificateId: action.data
				}
		
		default:
			return state
	}
}

export default certificateUsReducer
