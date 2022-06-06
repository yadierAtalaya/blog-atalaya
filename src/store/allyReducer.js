// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	allies: [],
	allyId: null,
	allyNotFound: false
}

// ===========================|| ALLIES REDUCER ||=========================== //

const alliesReducer = (state = initialState, action) => {
	switch (action.type) {
	
		case actionTypes.GET_ALLIES_SUCCESS:
			return {
				...state,
				allies: action.data
			}
	
		default:
			return state
	}
}

export default alliesReducer
