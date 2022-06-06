import React from 'react'
import { ErrorPageStyles } from './ErrorPage.styles'

export const ErrorPAge = () => {
	return (
		<ErrorPageStyles>
			<h3>404</h3>
			<h2>Not Found</h2>
			<p>The resource requested could not be found on this servert</p>
		</ErrorPageStyles>
	)
}
