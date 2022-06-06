import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { VisionStyles } from './Vision.styles'
import JoditEditor from 'jodit-react'
import { useDispatch, useSelector } from 'react-redux'

import { RESET_VISION } from 'store/actions'
import {
	servicecreateVision,
	serviceGetVision,
	serviceUpdateVision
} from 'store/Admin/us/visionApi'
import { useNavigate } from 'react-router-dom'

const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}

export default function Vision() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { vision, visionNotFound } = useSelector((state) => state.us)

	useEffect(() => {
		dispatch({
			type: RESET_VISION
		})
	}, [])

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceGetVision())
		}, 500)
	}, [])

	useEffect(() => {
		if (vision) {
			setContent(vision?.content)
		}
	}, [vision])

	const handleSaved = () => {
		if (visionNotFound) {
			dispatch(servicecreateVision({ content }, navigate))
		} else {
			dispatch(serviceUpdateVision({ content }))
		}
	}

	return (
		<VisionStyles>
			<LandscapeMenu active={2} />

			{vision === null && !visionNotFound ? (
				<h1 className='loading'>Cargando...</h1>
			) : (
				<div className='container-editor'>
					<div className='editor-head'>
						<h2>Visión</h2>
						<div className='box-btn'>
							<button className='btn-save' onClick={handleSaved}>
								Guardar
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
		</VisionStyles>
	)
}
