import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetMissionUs } from 'store/us/companyIdentityApi'
import { MissionStyles } from './Mission.styles'
// ===========================|| Mission ||=========================== //

const Mission = ({ handleClose }) => {
	const dispatch = useDispatch()
	const { mision } = useSelector((state) => state.companyIdentity)

	useEffect(() => {
		dispatch(
			serviceGetMissionUs()
		)
	}, [])
	
	return (
		<MissionStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div className='box'>
			<div
				dangerouslySetInnerHTML={{ __html: mision?.content }}
			>
			</div>
				
			</div>
		</MissionStyles>
	)
}

export default Mission
