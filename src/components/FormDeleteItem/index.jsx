import React from 'react'
import { FormDeletePostStyles } from './FormDeletePost.styles'
import { useDispatch, useSelector } from 'react-redux'
import close from 'assets/icons/close2.svg'
import { MODAL_OPEN } from 'store/actions'
import { serviceDeletePost } from 'store/Admin/posts/postApi'
import { useNavigate } from 'react-router-dom'

const FrmDeletePost = ({ Title, haldleDeleteItem }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<FormDeletePostStyles>
			<div className='box-content'>
				<div className='head-form'>
					<span
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: false
							})
						}
					>
						<img src={close} alt='' />
					</span>
				</div>
				<div className='content-form'>
					<Title />
				</div>
				<div className='box-actions'>
					<button className='btn-send' onClick={haldleDeleteItem}>
						Ok
					</button>
					<button
						onClick={() =>
							dispatch({
								type: MODAL_OPEN,
								modalOpen: false
							})
						}
						className='btn-cacel'
					>
						Cancelar
					</button>
				</div>
			</div>
		</FormDeletePostStyles>
	)
}

export default FrmDeletePost
