// action - state management
import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT, UNAUTORIZED } from './actions'

// ===========================|| ACCOUNT REDUCER ||=========================== //

const accountReducer = (state, action) => {
	switch (action.type) {
		case ACCOUNT_INITIALIZE: {
			const { isLoggedIn, user } = action.payload
			return {
				...state,
				isLoggedIn,
				isInitialized: true,
				user
			}
		}
		case LOGIN: {
			const { user } = action.payload
			return {
				...state,
				isLoggedIn: true,
				user
			}
		}
		case LOGOUT: {
			return {
				...state,
				isLoggedIn: false,
				user: null
			}
		}
		case UNAUTORIZED: {
			const { unautorized, message } = action.payload
			return {
				...state,
				unautorized,
				message
			}
		}
		default: {
			return { ...state }
		}
	}
}

export default accountReducer
