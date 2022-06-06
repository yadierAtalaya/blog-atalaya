import styled, { createGlobalStyle } from 'styled-components'
import { colors, typography, spacing } from './theme'

export const GlobalStyle = createGlobalStyle`
  /* colors variables */
  ${colors}

  /* Fonts variables */
  ${typography}

  /* Spacing container*/
 ${spacing}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
`
export const Application = styled.main`
	height: 100vh;
	width: 100%;
	background-color: var(--primary-opacity);
	background-blend-mode: multiply;
	background-repeat: no-repeat;
	background-position: 0 50%;
	display: flex;
	flex-direction: column;

	img {
		width: 30rem;
	}

	.footer {
		width: 100%;
		height: 5rem;
		background-color: red;
	}
`
export const LogoStyles = styled.div`
	text-align: center;
	color: #fff;
	position: relative;
	padding-bottom: 3rem;
	> img {
		width: 200px;
	}

	@media screen and (max-width: 700px) {
		text-align: center;
		color: #fff;
		position: relative;
		padding-bottom: 2rem;
		> img {
			width: 12rem;
		}
	}
`
