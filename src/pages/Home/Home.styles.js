import styled from 'styled-components'

export const HomeStyles = styled.main`
	width: 100%;
	.searchbox {
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
	}
	.cont-carousel {
		min-height: 68vh;
		align-items: center;
		display: grid;
		max-width: 90%;
		margin: auto;
	}
	.social-media {
	}
	@media screen and (max-width: 700px) {
		.searchbox {
			margin: 2rem;
		}
		.cont-carousel {
			min-height: 50vh;
			align-items: center;
			display: grid;
			max-width: 100%;
			margin: 1rem;
		}
		.social-media {
			padding: 3rem 1rem 2rem 2rem;
		}
	}
`
