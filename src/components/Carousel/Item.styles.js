import styled from 'styled-components'

export default styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100%;
	color: #fff;
	margin: 0 2rem;

	transition: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'transform 700ms ease' : 'transform 300ms ease'};
	transform: ${({ midItemIndex, idx }) =>
		midItemIndex === idx ? 'scale(1)' : 'scale(.8)'};

	> img {
		cursor: pointer;
		border-top-left-radius: 4rem;
		border-top-right-radius: 4vmin;
		object-fit: cover;
		width: 100%;
		height: 35rem;
		max-height: 100%;
	}
	.title {
		cursor: pointer;
		width: 100%;
		padding: 1.5rem;
		background: var(--primary);
		color: var(--white);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	@media screen and (max-width: 767px) {
		padding: 0;
		margin-top: 1rem;
		margin-left: 1rem;
		transform: scale(1);
		> img {
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;
			height: 30rem;
		}
		.title {
			padding: 1rem;
			h3 {
				font-size: 1.4rem;
			}
		}
	}
`
