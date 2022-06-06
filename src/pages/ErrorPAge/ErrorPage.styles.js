import styled from 'styled-components'
import { colors } from 'styles/global.js'

export const ErrorPageStyles = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	min-height: 100vh;
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 0rem 2.5rem 2.5rem 2.5rem;
	background-position: 25% 100%;
	color: ${colors.white};
	h3 {
		font-size: 15rem;
	}
	h2 {
		font-size: 3rem;
	}
	p {
		font-size: 2rem;
		padding-top: 1rem;
	}
	@media (min-width: 768px) {
		padding: 8rem 2.5rem 2.5rem 2.5rem;
	}
`
