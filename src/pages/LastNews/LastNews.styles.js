import styled from 'styled-components'

export const LastNewStyles = styled.div`
	position: relative;

	.num-page {
		top: -5rem;
		position: relative;
		right: -2rem;
		display: flex;
		justify-content: flex-end;
		font-size: 1.2rem;
		color: #fff;
	}

	.container-news {
		background-color: var(--white);
		border-radius: 3rem;
		padding: 3rem 5rem;
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 4rem 0;
		
		.loading1 {
			margin-top: 15rem;
			text-align: center;
	  }
	}
	.container-pagination {
		display: flex;
		align-items: center;
	}

	.pagination {
		margin: 15px auto;
		display: flex;
		list-style: none;
		outline: none;
	}
	.pagination > .active > a {
		///background-color: #47ccde;
		color: var(--sky);
	}
	.pagination > li {
		padding: 0px 5px;
	}
	.pagination > li > a {
		//border: 1px solid #dee2e6;
		//border-radius: 10%;
		padding: 5px 10px;
		outline: none;
		cursor: pointer;
		font-weight: bold;
		font-size: 3rem;
		cursor: pointer;
	}
	.pagination > .active > a,
	.pagination > .active > span,
	.pagination > .active > a:hover,
	.pagination > .active > span:hover,
	.pagination > .active > a:focus,
	.pagination > .active > span:focus {
		//	background-color: #47ccde;
		//border-color: #47ccde;
		outline: none;
	}
	.pagination > li > a,
	.pagination > li > span {
		color: #dddddd;
	}
	.pagination > li:first-child > a,
	.pagination > li:first-child > span,
	.pagination > li:last-child > a,
	.pagination > li:last-child > span {
		border-radius: unset;
	}
	.pagination > .disabled > a {
		opacity: 0.1;
		outline: none;
	}
	@media screen and (max-width: 767px) {
		width: 100%;
		
		.num-page {
			font-size: 1rem;
		}
		.pagination {
			overflow-x: scroll;
			overflow-y: hidden;
		}

		.header-search {
			display: none;
		}
		.container-news {
			margin: 4rem 1rem;
		}
	}
`
