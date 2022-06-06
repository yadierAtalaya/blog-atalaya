import styled from 'styled-components'

export const LoaderStyles = styled.div`
	margin-top: 0px;
	width: 100%;
	height: 4px;
	position: relative;
	overflow: hidden;
	background: linear-gradient(
		to right,
		#007db6,
		#0091b2,
		#009c9e,
		#00a77e,
		#22b24c,
		#60b031,
		#a5b62e
	);

	.bar {
		position: absolute;
		width: calc(100% * 2 / 7);
		height: 100%;
		display: flex;
		animation: move 1.5s linear infinite;
		background-color: white;
	}

	@keyframes move {
		0% {
			transform: translate(-100%, 0);
		}
		100% {
			transform: translate(calc(7 / 2 * 100%), 0);
		}
	}
`
