import styled from 'styled-components'

export const VisionStyles = styled.div`
	color: #fff;
	max-width: 75rem;
	width: calc(100% - 100px);
	margin: auto;
	margin-top: 6rem;
	> h4 {
		position: relative;
       cursor: pointer;
       margin-bottom: 1rem;
       left: -4rem;
	}
	.box {
		color: #000;
		background: #fff;
		width: 100%;
		padding: 4rem 5rem 5rem;
		border: 1px solid #707070;
		border-radius: 30px;
		> p {
			color: #707070;
			font-size: 1.5rem;
		}
	}
	@media screen and (max-width: 700px) {
		margin-top: 2rem;
		padding: 1rem;
		width: 100%;
		> h4 {
			left: 0;
			margin-bottom: 0;
			font-size: 1.2rem;
	}
	.box {
		padding: 3rem 3rem 2rem;
	}
	}
`
