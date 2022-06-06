// action - state management
import * as actionTypes from 'store/actions'

export const initialState = {
	posts: [],
	postSlug: null,
	page: -20,
	endPost: false,
	error: false
}

// ===========================|| POSTS REDUCER ||=========================== //

const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_POST_SUCCESS:
			let newPost = action.data
			return {
				...state,
				posts: [newPost, ...state.posts]
			}
		case actionTypes.GET_POST_ERROR:
			return {
				...state,
				error: true
			}

		case actionTypes.CREATE_POST_RESET:
			return {
				...state,
				postSlug: null,
				error: false
			}
		case actionTypes.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: [...state.posts, ...action.data],
				page: action.page,
				endPost: action.endPost
			}
		case actionTypes.GET_POST_SLUG_SUCCESS:
			return {
				...state,
				postSlug: action.data
			}
		case actionTypes.UPDATE_POST_SLUG_SUCCESS:
			let post = action.data
			return {
				...state,
				posts: state.posts.map((item) =>
					item.id === post.id ? post : item
				)
			}
		case actionTypes.DELETE_POST_SLUG_SUCCESS:
			let slug = action.slug

			return {
				...state,
				posts: state.posts.filter((item) => item.slug !== slug)
			}

		default:
			return state
	}
}

export default postsReducer
