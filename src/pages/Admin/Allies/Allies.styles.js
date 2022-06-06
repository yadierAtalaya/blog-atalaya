import styled from 'styled-components'

export const AlliesStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	min-height: 70rem;
	position: relative;
	.contenedor {
		width: 100%;
		margin: 4rem auto auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-height: 50vh;
		overflow-y: scroll;
		position: relative;
		max-width: 130rem;
	}
	.add-ally {
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
	@media screen and (max-width: 767px) {
	}
`

export const CardAllyStyles = styled.div`
	background: #fff;
	margin: 1rem;
	border: 2px solid #acacac;
	border-radius: 1.5rem;
	padding: 1rem;
	cursor: pointer;

	.card-footer {
		padding-top: 1rem;
		display: flex;
		gap: 3rem;
	}
	@media screen and (max-width: 767px) {
	}
`
