import React, { useState, useRef, useEffect } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { MissionStyles } from './Mission.styles'
import JoditEditor from 'jodit-react'
import { useDispatch, useSelector } from 'react-redux'

import { RESET_MISSION } from 'store/actions'
import {
	servicecreateMission,
	serviceGetMission,
	serviceUpdateMission
} from 'store/Admin/us/missionApi'
import { useNavigate } from 'react-router-dom'

const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}

export default function Mission() {
	const editor = useRef(null)
	const [content, setContent] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { mission, missionNotFound } = useSelector((state) => state.us)

	useEffect(() => {
		dispatch({
			type: RESET_MISSION
		})
	}, [])

	useEffect(() => {
		setTimeout(() => {
			dispatch(serviceGetMission())
		}, 500)
	}, [])

	useEffect(() => {
		if (mission) {
			setContent(mission?.content)
		}
	}, [mission])

	const handleSaved = () => {
		if (missionNotFound) {
			dispatch(servicecreateMission({ content }, navigate))
		} else {
			dispatch(serviceUpdateMission({ content }))
		}
	}

	return (
		<MissionStyles>
			<LandscapeMenu active={2} />

			{mission === null && !missionNotFound ? (
				<h1 className='loading'>Cargando...</h1>
			) : (
				<div className='container-editor'>
					<div className='editor-head'>
						<h2>Misión</h2>
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
		</MissionStyles>
	)
}
