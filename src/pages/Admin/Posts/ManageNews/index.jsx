import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { ManageNewsStyles } from './ManageNews.styles'
import JoditEditor from 'jodit-react'
import FormSavePost from 'components/FormSavePost/'
import Modal from 'components/Modal/'
import { useDispatch, useSelector } from 'react-redux'
import { MODAL_OPEN } from 'store/actions'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}

export default function ManageNews() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const { modalOpen } = useSelector((state) => state.customization)
	const dispatch = useDispatch()
	return (
		<ManageNewsStyles>
			<LandscapeMenu active={1} />
			<div className='container-editor'>
				<div className='editor-head'>
					<h2>Nueva noticia</h2>
					<button
						className='btn-save'
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: true
							})
						}
					>
						Guardar
					</button>
				</div>
				<JoditEditor
					ref={editor}
					value={content}
					config={config}
					tabIndex={5} // tabIndex of textarea
					onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				/>
			</div>
			{modalOpen && (
				<Modal open head>
					<div className='box-p'>
						<FormSavePost content={content} />
					</div>
				</Modal>
			)}
		</ManageNewsStyles>
	)
}
