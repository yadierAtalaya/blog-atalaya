import axios from 'axios'
import { baseURL } from 'utils/constant'
import {
	GET_NEWS_SUCCESS,
	GET_SEARCH_NEWS_SUCCESS,
	LOADING_SEARCH_NEWS,
	GET_NEWS_SLUG_SUCCESS
} from 'store/actions'
import { limit } from 'utils/constant'

const serviceNews = (offset) => async (dispatch) => {
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/posts?limit=20&offset=${offset}`
		)
		if (Array.isArray(data)) {
			dispatch({ type: GET_NEWS_SUCCESS, data })
		}
	} catch (error) {
		console.log(error)
	}
}

const serviceNewsSlug = (slug) => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/api/v1/posts/${slug}`)
		dispatch({ type: GET_NEWS_SLUG_SUCCESS, data: response.data })
	} catch (error) {
		console.log(error)
	}
}

const serviceSearchNews = (term, offset) => async (dispatch) => {
	try {
		const response = await axios.get(
			`${baseURL}/api/v1/posts/search?term=${term}&limit=50&offset=0`
		)
		dispatch({ type: GET_SEARCH_NEWS_SUCCESS, data: response.data })
	} catch (error) {
		dispatch({ type: LOADING_SEARCH_NEWS, loading: false })
		console.log(error)
	}
}

export { serviceNews, serviceSearchNews, serviceNewsSlug }
