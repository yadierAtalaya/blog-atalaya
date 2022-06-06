import styled from 'styled-components'
import { motion } from 'framer-motion'
export const SearchNewStyles = styled(motion.div)`
	min-height: 100vh;
	padding-top: var(--m-3);

	.container-dark {
		background: rgba(2, 6, 26, 0.9);
		width: 100%;
		position: absolute;
		top: -16rem;
		bottom: 0;
		z-index: -1;
	}
	.container-img {
		opacity: 0.7;
		position: absolute;
		z-index: -4;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		img {
			width: 100%;
			transform: scale(1.09);
		}
	}
	.searchResults {
		width: 100%;
		max-width: 834px;
		display: flex;
		flex-direction: column;
		margin: auto;
	}
`
