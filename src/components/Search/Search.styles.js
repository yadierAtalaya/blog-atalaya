import styled from 'styled-components'

export const SearchStyles = styled.div`
	border: 2px solid var(--primary-grey);
	border-radius: 24px;
	width: 100%;
	color: #fff;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	font-size: 1.5rem;
	cursor: pointer;
	overflow: hidden;
	max-width: 50rem;
	z-index: 400;
	.title {
		opacity: 0;
		visibility: hidden;
		transition: all 0.4s;
	}

	&:hover .title {
		opacity: 1;
		visibility: visible;
	}
	.linea {
		width: 100%;
		font-size: 3rem;
		margin-bottom: 0.7rem;
		opacity: 0;
		left: 30%;
		position: absolute;
		transition: all 0.4s;
	}
	&:hover .linea {
		opacity: 1;
		transform: translate(58%, 0);
		visibility: visible;
	}
	&:hover .linea {
		opacity: 1;
	}
	.term {
		width: 90%;
		background: transparent;
		border: none;
		height: 100%;
		outline: none;
		color: #fff;
		font-size: 1.5rem;
	}
	@media screen and (max-width: 767px) {
		&:hover .linea {
			transform: translate(51%, 0);
		}
	}
`
