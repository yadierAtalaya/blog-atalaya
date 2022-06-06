import styled from 'styled-components'

export const FormAllyStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	min-height: 80rem;

	.not-found {
		margin-top: 15rem;
		text-align: center;
	}
	.loading {
		margin-top: 15rem;
		text-align: center;
	}
	.frm-head {
		margin: 2rem 0;
		display: flex;
		color: #0b2370;
		justify-content: space-between;

		align-items: center;
		.box-btn {
			display: flex;
			align-items: center;
		}
		.btn-save {
			color: #0b2370;
			background: #fff;
			font-size: 1.6rem;
			padding: 0.5rem 1rem;
			font-weight: bold;
			border-color: #0b2370;
			border-radius: 0.5rem;

			transition: all 0.1s;
			&:hover {
				color: #fff;
				background: #0b2370;
				cursor: pointer;
			}
		}
		.btn-delete {
			margin-left: 1rem;
			background: #fff;
			border: 2px solid #0b2370;
			border-radius: 0.5rem;
			padding: 0.2rem 0.5rem;
			&:hover {
				cursor: pointer;
			}
		}
	}
	.frm-cont {
		width: 90%;
		display: grid;
		grid-template-columns: 200px 1fr;
		grid-gap: 10px;
		margin-top: 5rem;
		.col-25 {
			h4 {
				color: #0b2370;
				padding-top: 1rem;
				font-weight: 600;
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
				min-width: 25rem;
			}
			textarea {
				border: 2px solid #acacac;
				border-radius: 10px;
				width: 100%;
				padding: 0.8rem 1rem;
			}

			.error-message {
				padding: 0.5rem;
			}
		}
	}
	@media screen and (max-width: 767px) {
	}
`
