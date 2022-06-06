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
	.box-p {
		padding: 0 8rem;
	}
	@media screen and (max-width: 767px) {
		.box-p {
			padding: 0;
		}
	}
`
