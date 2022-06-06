// action - state management
import * as actionTypes from '../actions'

export const initialState = {
	user: {},
	passwordChanged: null
}

// ===========================|| PROFILE REDUCER ||=========================== //

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_PROFILE_SUCCESS:
			return {
				...state,
				user: { ...action.data }
			}
		case actionTypes.MODIFY_PASSWORD_SUCCESS:
			return {
				...state,
				passwordChanged: true
			}
		case actionTypes.MODIFY_PASSWORD_ERROR:
			return {
				...state,
				passwordChanged: false
			}
		case actionTypes.MODIFY_PASSWORD_RESET:
			return {
				...state,
				passwordChanged: null
			}
		default:
			return state
	}
}

export default profileReducer
