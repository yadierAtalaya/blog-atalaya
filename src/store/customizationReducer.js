// project imports
import config from 'config.js'

// action - state management
import * as actionTypes from './actions'

export const initialState = {
	isOpen: [], // for active default menu
	fontFamily: config.fontFamily,
	borderRadius: config.borderRadius,
	outlinedFilled: config.outlinedFilled,
	navType: config.theme,
	presetColor: config.presetColor,
	locale: config.i18n,
	rtlLayout: config.rtlLayout,
	opened: true,
	modalOpen: false
}

// ===========================|| CUSTOMIZATION REDUCER ||=========================== //

const customizationReducer = (state = initialState, action) => {
	let id
	switch (action.type) {
		case actionTypes.MENU_OPEN:
			id = action.id
			return {
				...state,
				isOpen: [id]
			}
		case actionTypes.MODAL_OPEN:
			return {
				...state,
				modalOpen: action.modalOpen
			}

		default:
			return state
	}
}

export default customizationReducer
