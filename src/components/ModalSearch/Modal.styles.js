import styled from 'styled-components'
import { motion } from 'framer-motion'
export const ModalStyles = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background-color: rgba(2, 6, 26, 0.9);

	.modal-dialog {
		width: 100vw;
		height: 100vh;
		overflow-y: scroll;
		padding-top: 3rem;
	}

	.container-search {
		margin: auto;
		margin-top: -0.2rem;
		padding-left: 6rem;
		display: flex;
		justify-content: center;
		position: relative;
		max-width: 83rem;
		align-items: center;
		span {
			margin-left: 4rem;
			cursor: pointer;
			img {
				width: 20px;
			}
		}
	}

	.container-results {
		margin: auto;
		max-width: 75rem;
		margin-top: 6rem;
	}
`
