import styled from 'styled-components'

export const WorkWithUStyles = styled.div`
		color: #fff;
	max-width: 75rem;
	padding: 1rem;
	margin: auto;
	margin-top: 6rem;
	width: calc(100% - 100px);
	> h4 {
	   position: relative;
       cursor: pointer;
       margin-bottom: 1rem;
       left: -4rem;
	}
	h3 {
		color: #0f216f;
		padding: 1rem 0;
	}
	p {
		color: #707070;
		font-size: 1.5rem;
	}
	.box-btn {
		padding-top: 3rem;
		text-align: center;
		> button {
			border-radius: 15px;
			background-color: #0f216f;
			color: #fff;
			padding: 1rem 3rem;
			font-size: 1.5rem;
			transition: background-color 0.5s linear;
			&:hover {
				background-color: #e55c1e;
				cursor: pointer;
			}
		}
	}
	.content-work-with-us {
		color: #000;
		background: #fff;
		width: 100%;
		padding: 4rem;
		border: 1px solid #707070;
		border-radius: 30px;
		> p {
			font-size: 1.5rem;
		}
	}
	@media screen and (max-width: 700px) {
		margin-top: 2rem;
		padding: 1rem;
		width: 100%;
		> h4 {
			left: 0;
			margin-bottom: 1rem;
			font-size: 1.2rem;
	}
	.content-work-with-us {
		padding: 3rem;
	}
}
`
