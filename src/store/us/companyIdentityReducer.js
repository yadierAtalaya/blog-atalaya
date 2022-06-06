// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	mision: null,
	vision: null
}

// ===========================|| COMPANY IDENTITY REDUCER ||=========================== //

const companyIdentityReducer = (state = initialState, action) => {
	switch (action.type) {	
		case actionTypes.GET_MISION_US_SUCCESS:
			return {
				...state,
				mision: action.data
			}
		case actionTypes.GET_VISION_US_SUCCESS:
			return {
				...state,
				vision: action.data
			}
		default:
			return state
	}
}

export default companyIdentityReducer
