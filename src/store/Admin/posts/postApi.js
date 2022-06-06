import axios from 'axios'
import { baseURL, limit } from 'utils/constant'

import {
	CREATE_POST_SUCCESS,
	GET_POSTS_SUCCESS,
	GET_POST_SLUG_SUCCESS,
	UPDATE_POST_SLUG_SUCCESS,
	SNACKBAR_OPEN,
	MODAL_OPEN,
	GET_POST_ERROR,
	DELETE_POST_SLUG_SUCCESS
} from 'store/actions'
// third-party
import jwtDecode from 'jwt-decode'

const servicecreatePost = (data, history, user) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`

	const { sub } = jwtDecode(token)
	const { content, description, slug, status, title, image } = data
	try {
		const { data } = await axios.post(`${baseURL}/api/v1/adm/posts/`, {
			authorId: sub,
			content,
			description,
			slug,
			status,
			title,
			image
		})
		let item = { ...data.data, author: { firstName: user.firstName } }

		dispatch({
			type: SNACKBAR_OPEN,
			message: 'Post created',
			navType: 'success'
		})
		dispatch({
			type: CREATE_POST_SUCCESS,
			data: item
		})
		dispatch({
			type: MODAL_OPEN,
			modalOpen: false
		})
		history('/admin/posts')
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data

			if (error.response.status == 409) {
				dispatch({
					type: SNACKBAR_OPEN,
					message: `${message} - Ingrese otro titulo`,
					navType: 'error'
				})
			}
			if (error.response.status == 401) {
				dispatch({
					type: SNACKBAR_OPEN,
					message: 'Unauthorized',
					navType: 'error'
				})

				//logout
			}
		} else if (error.request) {
			dispatch({
				type: SNACKBAR_OPEN,
				message: ' The request was made but no response was received',
				navType: 'error'
			})
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('Error ', error.message)
		}
	}
}

const serviceGetPosts = (offset) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(
			`${baseURL}/api/v1/adm/posts?limit=${20}&offset=${offset}`
		)
		if (Array.isArray(data)) {
			let endPost = data.length == 0 ? true : false
			dispatch({ type: GET_POSTS_SUCCESS, data, page: offset, endPost })
		}
	} catch (error) {
		console.log(error)
	}
}

const serviceGetPostBySlug = (slug) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.get(`${baseURL}/api/v1/adm/posts/${slug}`)

		dispatch({ type: GET_POST_SLUG_SUCCESS, data })
	} catch (error) {
		console.log(error)
		dispatch({ type: GET_POST_ERROR })
	}
}

const serviceUpdatePost = (data, history, user) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	const { sub } = jwtDecode(token)
	const { content, description, slug, status, title, slugEdit, image } = data
	try {
		const { data } = await axios.patch(
			`${baseURL}/api/v1/adm/posts/${slugEdit}`,
			{
				content,
				description,
				slug,
				status,
				title,
				image
			}
		)
		let item = { ...data.data, author: { firstName: user.firstName } }
		dispatch({ type: UPDATE_POST_SLUG_SUCCESS, data: item })
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: 'POST UPDATE'
		})
		dispatch({
			type: MODAL_OPEN,
			modalOpen: false
		})
		history('/admin/posts')
	} catch (error) {
		if (error.response) {
			const { message } = error.response.data
			dispatch({
				type: SNACKBAR_OPEN,
				message: message,
				navType: 'error'
			})
		} else {
			dispatch({
				type: SNACKBAR_OPEN,
				message: ' The request was made but no response was received',
				navType: 'error'
			})
		}
	}
}

const serviceDeletePost = (slug, history) => async (dispatch) => {
	const token = window.localStorage.getItem('token')
	axios.defaults.headers.common.Authorization = `Bearer ${token}`
	try {
		const { data } = await axios.delete(
			`${baseURL}/api/v1/adm/posts/${slug}`
		)
		dispatch({
			type: SNACKBAR_OPEN,
			navType: 'success',
			message: data.message
		})

		dispatch({
			type: DELETE_POST_SLUG_SUCCESS,
			slug: data?.slug
		})
		dispatch({
			type: MODAL_OPEN,
			modalOpen: false
		})
		history('/admin/posts')
	} catch (error) {}
}
export {
	servicecreatePost,
	serviceGetPosts,
	serviceGetPostBySlug,
	serviceUpdatePost,
	serviceDeletePost
}
