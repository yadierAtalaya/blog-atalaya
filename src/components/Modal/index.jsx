import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalStyles } from './Modal.styles'
import Logo from 'assets/icons/logo-atalaya.svg'
import { LogoStyles } from 'styles/global'

export default function Modal({ open, children, onClose, head }) {
	if (!open) return null

	return ReactDOM.createPortal(
		<>
			<ModalStyles
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
			>
				<div className='modal-dialog'>
					{!head && (
						<LogoStyles>
							<img src={Logo} alt='' />
						</LogoStyles>
					)}
					{children}
				</div>
			</ModalStyles>
		</>,
		document.getElementById('root-modal')
	)
}
