import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetVisionUs } from 'store/us/companyIdentityApi'
import { VisionStyles } from './Vision.styles'
// ===========================|| Vision ||=========================== //

const Vision = ({ handleClose }) => {
	const dispatch = useDispatch()
	const { vision } = useSelector((state) => state.companyIdentity)

	useEffect(() => {
		dispatch(
			serviceGetVisionUs()
		)
	}, [])

	return (
		<VisionStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div className='box'>
			<div
				dangerouslySetInnerHTML={{ __html: vision?.content }}
			>
			</div>
			</div>
		</VisionStyles>
	)
}

export default Vision
