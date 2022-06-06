import styled from 'styled-components'

export const PostStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	position: relative;
	min-height: 70rem;
	.contenedor {
		width: 100%;
		margin: 4rem auto auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 130rem;
		max-height: 50vh;
		overflow-y: scroll;
		position: relative;
	}

	.add-post {
		position: absolute;
		background: #0b2370;
		right: 60px;
		top: 380px;
		padding: 0.5rem;
		border: 3px solid #ffffff;
		border-radius: 10px;
		&:hover {
			background: #e55c1e;
		}
	}
	.inview-block {
		height: 100px;
		width: 200px;
		color: #fff;
	}
	@media screen and (max-width: 767px) {
	}
`

export const CardPostStyles = styled.div`
	background: #fff;
	margin: 1rem;
	border: 2px solid #acacac;
	border-radius: 1.5rem;
	padding: 1rem;
	cursor: pointer;
	&:hover {
		background: #bcb8f5;
		box-shadow: 0px 0px 6px #bcb8f58f;
		border: 2px solid #bcb8f5;
		border-radius: 19px;
	}
	.card-footer {
		padding-top: 1rem;
		display: flex;
		gap: 3rem;
	}

	@media screen and (max-width: 767px) {
	}
`
