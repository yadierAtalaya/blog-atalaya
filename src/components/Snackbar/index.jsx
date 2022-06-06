import React, { useState, useEffect } from 'react'
import { SnackbarStyles } from './Snackbar.styles'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { SNACKBAR_RESET } from 'store/actions'
// ===========================|| Search ||=========================== //

const Snackbar = () => {
	const alert = useAlert()
	const dispatch = useDispatch()
	const { isOpen, message, navType } = useSelector((state) => state.snackbar)

	useEffect(() => {
		if (isOpen) {
			switch (navType) {
				case 'error':
					alert.error(message)
					break
				case 'success':
					alert.success(message)
					break
				default:
					break
			}
			dispatch({ type: SNACKBAR_RESET })
		}
	}, [isOpen])

	return null
}
export default Snackbar
