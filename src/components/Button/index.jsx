import React from 'react'
import { ButtonStyles } from './Button.styles'

export const Button = ({
	children,
	handleButton,
	type,
	primary,
	secondary
}) => {
	return (
		<ButtonStyles
			type={type ? type : 'text'}
			onClick={handleButton}
			primary={primary}
			secondary={secondary}
		>
			{children}
		</ButtonStyles>
	)
}
