import styled from 'styled-components'

export const AlieStyles = styled.div`
	.box-allies {
		margin-top: 6rem;
		padding: 2rem;
		min-height: 60vh;
		background: #fff;
		border-radius: 3rem;
		display: grid;

		grid-template-columns: repeat(auto-fill, 36rem);
		justify-content: space-around;

		.card-ally {
			margin: 1rem;
			padding: 2rem;
			display: grid;
			grid-template-columns: 3fr 1fr;
			box-shadow: 0px 3px 6px #00000029;
			border: 1px solid #707070;
			border-radius: 18px;
			justify-content: space-between;
			height: fit-content;
			.card-head {
				margin-right: 2rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.title-ally {
					font-size: 1.8rem;
					color: #0f216f;
					padding-bottom: 0.5rem;
				}
				.description-ally {
					font-size: 1.2rem;
					color: #707070;
				}
			}
		}
		.logo-ally {
			box-shadow: 0px 3px 6px #00000029;
			border: 1px solid #707070;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			padding: 0.5rem;
			overflow: hidden;
			> img {
				border-radius: 50%;
				transition: transform 0.2s;
				object-fit: cover;
				width: 100%;
				height: 100%;

				&:hover {
					transform: scale(1.5);
				}
			}
		}
	}
	@media screen and (max-width: 700px) {
		margin: 1rem;
		.box-allies {
			margin-top: 2rem;
			grid-template-columns: repeat(auto-fill, 32rem);
		}
	}
`
