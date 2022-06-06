import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SliderContainer = styled.div`
	width: 100%;
	height: 65%;
	overflow: hidden;
	padding: 0;
	margin: 0;
	margin-top: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	.row {
		position: relative;
		width: 83%;
		//width: 100%;
		height: 100%;
		overflow: hidden;

		.btns-slider {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.btn {
				z-index: 1;
				width: 30%;
				height: 90%;
				background-color: transparent;
				border: none;
				cursor: pointer;
			}
		}
	}
	@media screen and (max-width: 1467px) {
		.row {
			min-width: 100%;
		}
	}

	@media screen and (max-width: 767px) {
		.row {
			min-width: 100%;

			.btns-slider {
				.btn {
					cursor: none;
					display: none;
				}
			}
		}
	}
`

export const CardSlider = styled(motion.div)`
	position: absolute;
	width: 30%;
	height: 100%;
	border-radius: 4rem 4rem 0 0;
	top: 0;
	border-style: hidden;
	overflow: hidden;

	.navigation {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		text-decoration: none;

		.image-card {
			width: calc(100% * 2);
			height: 87%;
			object-fit: cover;
		}
		.image-card-loading {
			width: calc(100% * 2);
			height: 87%;
			object-fit: cover;
		}

		.title {
			width: 100%;
			height: 13%;
			background: var(--primary);
			color: var(--white);
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
		}
	}

	@media screen and (max-width: 767px) {
		min-width: 70%;
	}
`
