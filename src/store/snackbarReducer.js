
// action - state management
import * as actionTypes from './actions'

export const initialState = {
	isOpen: false,
	navType: '',
	message: '',
	position:''
}

// ===========================|| SNACKBAR_OPEN REDUCER ||=========================== //

const snackbarReducer = (state = initialState, action) => {

	switch (action.type) {
		case actionTypes.SNACKBAR_OPEN:
			
			return {
				...state,
				isOpen: true,
				message: action.message,
				navType: action.navType
			}
			case actionTypes.SNACKBAR_RESET:
			
				return {
					...state,
					isOpen: false,
					message: '',
					navType:''
				}
		default:
			return state
	}
}

export default snackbarReducer
