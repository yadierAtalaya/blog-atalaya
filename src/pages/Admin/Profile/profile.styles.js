import styled from 'styled-components'
export const ProfileStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	position: relative;
	min-height: 70rem;
	.title-profile {
		margin: 2rem 5rem;
		> h2 {
			width: fit-content;
			background: #dddddd;
			border-radius: 19px;
			padding: 1rem 1.5rem;
			color: #0b2370;
			margin-bottom: 4rem;
		}
	}
	.container-profile {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 2rem;
	}
	.box-profile-data {
		max-width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		> div {
			display: flex;
			flex-direction: row;
			margin: 1.5rem 0;
			align-items: center;
			gap: 2rem;
			> h4 {
				color: #0b2370;
			}
		}
	}
	.typography {
		background: #ffffff;
		border: 2px solid #acacac;
		border-radius: 10px;
		padding: 0.8rem 1rem;
		min-width: 30rem;
	}
	.btn-password {
		background: #0b2370;
		border-radius: 15px;
		margin: 1rem 0;
		padding: 1.5rem 5rem;
		color: #fff;
		min-width: 30rem;
		cursor: pointer;
		&:hover {
			background: #e55c1e;
		}
	}
	.box-change-pasword {
		display: flex;
		flex-direction: column;
		background: #fff;
		box-shadow: 0px 0px 3px #0b2370;
		border-radius: 19px;
		padding: 4rem 2rem;
		max-width: 38rem;
		margin-left: 3rem;
		div {
			input {
				margin-top: 2rem;
				width: 100%;
				border: 1px solid #dddddd;
				border-radius: 9px;
				padding: 1rem;
			}
		}
		.save-password {
			margin-top: 3rem;
			text-align: center;
			> button {
				background: #0b2370;
				border-radius: 1.5rem;
				//opacity: 0.5;
				color: #fff;
				padding: 0.5rem 4rem;
				font-size: 3rem;
				max-width: fit-content;
				&:hover {
					cursor: pointer;
					background: #e55c1e;
				}
			}
		}
		.error-message {
			padding: 0.5rem;
		}
	}
	.box-message {
		height: 100%;
		display: flex;
		align-items: center;
		text-align: center;
	}
`
