import styled from 'styled-components'

export const MenuHeaderStyles = styled.div`

	.menu-header {
		display: grid;
		grid-template-columns: 2fr 2fr 1fr;
	}

	.header-title {
		color: #fff;
		padding-left: 2rem;
		h2 {
			font-size: 2rem;
			font-weight: bold;
		}
		p {
			font-size: 1.2rem;
			font-style: italic;
		}
	}

	.header-action {
		align-items: center;
		display: flex;
		color: #fff;
		font-size: 2rem;
	
		span {
			margin-right: 2rem;
		}
		img {
			cursor: pointer;
			width: 2.2rem;
		}
		.to-share{
			
		}
	}

	@media screen and (max-width: 700px) {
		.menu-header {
		grid-template-columns: 2fr 4rem 1fr;
	}
		.header-title {
			
		h2 {
			font-size: 1.5rem;
			font-weight: bold;
		}
		p {
			font-size: 1rem;
			font-style: italic;
		}
	}
		.header-action {
		
			.to-share{
				top: 4rem;
				right: 0;
				width: 50%;
				left: 0;
				margin: auto;
				position: absolute;
				text-align: center;
				font-size: 1rem;
		}	
	}
}
`
