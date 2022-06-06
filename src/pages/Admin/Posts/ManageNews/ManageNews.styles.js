import styled from 'styled-components'

export const ManageNewsStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	min-height: 80rem;

	.container-editor {
		margin: auto;
		max-width: 80rem;
		min-height: 50rem;
	}
	.not-found {
		margin-top: 15rem;
		text-align: center;
	}
	.loading {
		margin-top: 15rem;
		text-align: center;
	}
	.editor-head {
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
			border-color: #0b2370;
			border-radius: 0.5rem;
			padding: 0.2rem 0.5rem;
			&:hover {
				cursor: pointer;
			}
		}
	}
	@media screen and (max-width: 767px) {
	}
`
