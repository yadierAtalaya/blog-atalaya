import styled from 'styled-components'
import visible from 'assets/icons/visible.svg'
import notVisible from 'assets/icons/notvisible.svg'
export const FormSavePostStyles = styled.div`
	height: 90vh;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	form {
		max-width: 800px;
		width: 100%;
		background-color: #fff;
		padding: 5rem 6rem;
		display: grid;
		border: 1px solid #707070;
		border-radius: 30px;
		grid-template-columns: 120px 1fr;
		grid-gap: 16px;
		.head-form {
			grid-column-start: 1;
			grid-column-end: 3;
			display: flex;
			justify-content: flex-end;
			right: -40px;
			top: -20px;
			position: relative;
			span {
				padding: 0.8rem 0.9rem 0.5rem;
				cursor: pointer;
				border: 2px solid #0b2370;
				border-radius: 5px;
			}
		}
		.col-25 {
			h4 {
				padding-top: 1rem;
			}

			text-align: end;
		}
		.col-75 {
			input {
				width: 100%;
				background: #ffffff;
				border: 2px solid #acacac;
				border-radius: 10px;
				padding: 0.8rem 1rem;
				min-width: 30rem;
			}
			textarea {
				border: 2px solid #acacac;
				border-radius: 10px;
				width: 100%;
				padding: 0.8rem 1rem;
			}
			.checkbox {
				min-width: 90px;
				background: #ddd;
				background-image: url(${notVisible});
				background-repeat: no-repeat, repeat;
				background-position-x: 53px;
				background-position-y: center;
				width: 40px;
				height: 40px;
				outline: none;
				border-radius: 10px;
				transition: 0.5s;
			}
		}

		.error-message {
			padding: 0.5rem;
		}
	}

	input[type='checkbox'] {
		position: relative;
		-webkit-appearance: none;
		outline: none;
		transition: 0.5s;
	}

	input[type='checkbox']:checked {
		background-color: #0b2370;
		min-width: 90px;
		background-image: url(${visible});
		background-repeat: no-repeat, repeat;
		background-position-y: center;
		background-position-x: 5px;
	}

	input[type='checkbox']:before {
		content: '';
		position: absolute;
		width: 40px;
		height: 30px;
		left: 1px;
		background: #fff;
		top: 1px;

		transform: scale(1.1);
		transition: 0.5s;
		border: 2px solid #dddddd;
		border-radius: 5px;
	}

	input[type='checkbox']:checked:before {
		left: 40px;
	}

	.box-actions {
		padding-top: 3rem;
		grid-gap: 1rem;
		grid-column-start: 1;
		grid-column-end: 3;
		display: flex;
		justify-content: center;
		.btn-cacel {
			cursor: pointer;
			background-color: #0b2370;
			color: #fff;
			padding: 0.5rem 1rem;
			border: 2px solid #0b2370;
			border-radius: 5px;
			font-weight: bold;
			font-size: 1.6rem;
		}
		.btn-send {
			cursor: pointer;
			background-color: #fff;
			color: #0b2370;
			padding: 0.5rem 1rem;
			border: 2px solid #0b2370;
			border-radius: 5px;
			font-weight: bold;
			font-size: 1.6rem;
			width: 100px;
		}
	}
	@media screen and (max-width: 767px) {
	}
`
