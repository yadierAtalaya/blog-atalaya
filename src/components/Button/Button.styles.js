import styled from 'styled-components'
import { borderRadius, colors, fontSize } from 'styles/global.js'

export const ButtonStyles = styled.button`
	background-color: ${({ primary, secondary }) =>
		primary ? colors.green : secondary ? 'transparent' : 'white'};
	color: ${colors.white};
	padding: 0.5rem 1rem;
	border: 2px solid
		${({ primary, secondary }) =>
			primary ? colors.green : secondary ? colors.white : colors.white};
	border-radius: ${borderRadius.br_20};
	font-size: ${fontSize.f_sm};
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: all 0.3s ease;

	&:hover {
		opacity: 0.5;
	}
`
