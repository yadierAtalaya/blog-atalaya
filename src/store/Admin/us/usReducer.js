// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	mission: null,
	missionNotFound: false,
	vision: null,
	visionNotFound: false,
	us: {}
}

// ===========================|| US REDUCER ||=========================== //

const usReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_MISSION_SUCCESS:
			return {
				...state,
				mission: action.data
			}
		case actionTypes.GET_MISSION_ERROR:
			return {
				...state,
				missionNotFound: true
			}
		case actionTypes.RESET_MISSION:
			return {
				...state,
				mission: null,
				missionNotFound: false
			}
		case actionTypes.GET_VISION_SUCCESS:
			return {
				...state,
				vision: action.data
			}
		case actionTypes.GET_VISION_ERROR:
			return {
				...state,
				visionNotFound: true
			}

		case actionTypes.RESET_VISION:
			return {
				...state,
				vision: null,
				visionNotFound: false
			}
		case actionTypes.GET_US_SUCCESS:
			let data = action.data.map((item) => {
				return {
					name: item.name,
					firstName: item.author.firstName,
					updatedAt: item.updatedAt
				}
			})

			let mision = data.find((item) => item.name == 'MISION')
			let vision = data.find((item) => item.name == 'VISION')

			return {
				...state,
				us: { ...state.us, mision, vision }
			}

		case actionTypes.GET_US_CERTIFICATE_SUCCESS:
			let item = action?.data[0]

			let certificate = {
				name: 'certificados',
				firstName: item.author.firstName,
				updatedAt: item.updatedAt
			}
			return {
				...state,
				us: { ...state.us, certificados: certificate }
			}
		default:
			return state
	}
}

export default usReducer
