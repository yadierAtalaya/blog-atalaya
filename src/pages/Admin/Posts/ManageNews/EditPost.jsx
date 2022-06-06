import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { ManageNewsStyles } from './ManageNews.styles'
import JoditEditor from 'jodit-react'
import FormSavePost from 'components/FormSavePost/'
import Modal from 'components/Modal/'
import { useDispatch, useSelector } from 'react-redux'
import {
	serviceDeletePost,
	serviceGetPostBySlug
} from 'store/Admin/posts/postApi'
import { useNavigate, useParams } from 'react-router-dom'
import { CREATE_POST_RESET, MODAL_OPEN } from 'store/actions'
import basura from 'assets/icons/basura.svg'
import FrmDeleteItem from 'components/FormDeleteItem'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}
const Title = () => {
	return (
		<h2 className='title'>
			¿Estás seguro de que quieres{' '}
			<span className='ms-delete'>eliminar</span> esta noticia?
		</h2>
	)
}

export default function ManageNews() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const [removing, setRemoving] = useState(false)
	const dispatch = useDispatch()
	const { postSlug, error } = useSelector((state) => state.posts)
	const { modalOpen } = useSelector((state) => state.customization)
	let { slug } = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceGetPostBySlug(slug))
		}, 500)
	}, [])

	useEffect(() => {
		if (postSlug) {
			setContent(postSlug.content)
		}
	}, [postSlug])

	useEffect(() => {
		dispatch({
			type: CREATE_POST_RESET
		})
	}, [])

	const haldleDeleteItem = () => {
		dispatch(serviceDeletePost(postSlug?.slug, navigate))
	}
	return (
		<ManageNewsStyles>
			<LandscapeMenu active={1} />
			{postSlug === null ? (
				error ? (
					<h1 className='not-found'>Publicación no encontrada.</h1>
				) : (
					<h1 className='loading'>Cargando...</h1>
				)
			) : (
				<div className='container-editor'>
					<div className='editor-head'>
						<h2>Editar noticia</h2>
						<div className='box-btn'>
							<button
								className='btn-save'
								onClick={() => {
									setRemoving(false)
									dispatch({
										type: MODAL_OPEN,
										modalOpen: true
									})
								}}
							>
								Guardar
							</button>
							<button
								className='btn-delete'
								onClick={() => {
									setRemoving(true)
									dispatch({
										type: MODAL_OPEN,
										modalOpen: true
									})
								}}
							>
								<img width='20px' src={basura} alt='' />
							</button>
						</div>
					</div>

					<JoditEditor
						ref={editor}
						value={content}
						config={config}
						tabIndex={5} // tabIndex of textarea
						onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
					/>
				</div>
			)}
			{modalOpen && (
				<Modal open head>
					<div className='box-p'>
						{!removing ? (
							<FormSavePost
								content={content}
								dataEdit={postSlug}
							/>
						) : (
							<FrmDeleteItem
								Title={Title}
								haldleDeleteItem={haldleDeleteItem}
							/>
						)}
					</div>
				</Modal>
			)}
		</ManageNewsStyles>
	)
}
