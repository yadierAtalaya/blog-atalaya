import styled from 'styled-components'

export const LayoutStyles = styled.div`
	background: url(${require('assets/images/background.png')}) no-repeat 0,
		0 var(--sky);
	background-blend-mode: multiply;
	background-attachment: fixed, scroll;
	background-repeat: no-repeat;
	height: 100vh;
	overflow-y: scroll;
	position: relative;
	padding-top: 3rem;

	.logo {
		text-align: center;
		color: #fff;
		position: relative;
	}
	.outlet {
		padding: 0 8rem;
	}
	@media screen and (max-width: 767px) {
		.outlet {
			padding: 0;
		}
	}
`
