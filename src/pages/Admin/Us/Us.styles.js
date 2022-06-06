import styled from 'styled-components'

export const UsStyles = styled.div`
	background: #fff;
	padding: 4rem 12rem;
	border-radius: 1.5rem 1.5rem 0 0;
	min-height: 70rem;

	.container-us {
		justify-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 3rem;
		margin: 8rem auto auto;
		max-width: 130rem;
	}

	@media screen and (max-width: 767px) {
	}
`
export const CardUsStyles = styled.div`
	width: 220px;
	height: 220px;
	border: 2px solid #acacac;
	border-radius: 1.5rem;
	cursor: pointer;
	padding: 2rem;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	.card-title {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.card-footer {
		font-size: 1rem;
		text-align: end;
	}
	@media screen and (max-width: 767px) {
	}
`
