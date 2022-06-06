// action - state management
import * as actionTypes from './actions'

export const initialState = {
	news: [],
	searchResults: null,
	loading: false,
	postSlug: null
}

// ===========================|| NEWS REDUCER ||=========================== //

const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_NEWS_SUCCESS:
			return {
				...state,
				news: [...state.news, ...action.data]
			}
		case actionTypes.GET_SEARCH_NEWS_SUCCESS:
			return {
				...state,
				searchResults: [...action.data],
				loading: false
			}
		case actionTypes.LOADING_SEARCH_NEWS:
			return {
				...state,
				loading: action.loading,
				searchResults: null
			}
		case actionTypes.GET_NEWS_SLUG_SUCCESS:
			return {
				...state,
				postSlug: action.data
			}
		default:
			return state
	}
}

export default newsReducer
