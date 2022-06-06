import styled from 'styled-components'

export const CertificateStyles = styled.div`
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
	.box {
		color: #000;
		background: #fff;
		width: 100%;
		padding: 3rem 6rem 1rem;
		border: 1px solid #707070;
		border-radius: 30px;
		> p {
			font-size: 1.5rem;
		}
	}
	.card-certificate {
		max-width: 834px;
		background: #ffffff 0% 0%;
		box-shadow: 0px 3px 6px #00000029;
		border: 1px solid #707070;
		border-radius: 19px;
		padding:2rem;
		margin: 2rem 0;
		cursor: pointer;
		> h2 {
			text-align: left;
			font-size: 1.5rem;
			letter-spacing: 0px;
			color: #0f216f;
		}
		.description {
			padding-top: 0.5rem;
			font-size: 1.2rem;
			  overflow: hidden;
			text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
		   -webkit-box-orient: vertical;
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
		padding: 1rem 2rem 2rem;
	}
	}
`
