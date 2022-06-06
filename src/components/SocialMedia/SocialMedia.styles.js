import styled from 'styled-components'

export const SocialMediaStyles = styled.div`
	position: relative;
	display: flex;
	span {
		margin-right: 1rem;
		cursor: pointer;
		> img {
			width: ${({ width }) => (width ? width : '4rem')};
		}
	}
`
