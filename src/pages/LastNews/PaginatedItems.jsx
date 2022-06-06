import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import CardNews from 'components/cardNews/cardNews'
import { useDispatch, useSelector } from 'react-redux'
import { serviceNews } from 'store/newsApi'

export function PaginatedItems({ itemsPerPage }) {
	const dispatch = useDispatch()
	const { news } = useSelector((state) => state.lastNews)
	const [currentItems, setCurrentItems] = useState([])
	const [pageCount, setPageCount] = useState(0)
	const [itemOffset, setItemOffset] = useState(0)
	const [page, setPage] = useState(1)

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage
		setCurrentItems(news.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(news.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, news])

	const handlePageClick = (event) => {
		setPage(event.selected + 1)
		const newOffset = (event.selected * itemsPerPage) % news.length
		setItemOffset(newOffset)

		if (pageCount - event.selected <= 1) {
			const offset = news.length
			dispatch(serviceNews(offset))
		}
	}

	return (
		<div className='container-news'>
			<div className='num-page'>
				<p>PÁGINA {page < 10 ? `0${page}` : page} </p>
			</div>
			{currentItems.map((item) => (
				<CardNews key={item.id + 'cardnews'} item={item} />
			))}
			<div className='container-pagination'>
				<ReactPaginate
					nextLabel=' > '
					onPageChange={handlePageClick}
					pageRangeDisplayed={5}
					pageCount={pageCount}
					previousLabel=' < '
					pageClassName='page-item'
					pageLinkClassName='page-link'
					previousClassName='page-item'
					previousLinkClassName='page-link'
					nextClassName='page-item'
					nextLinkClassName='page-link'
					breakLabel='...'
					breakClassName='page-item'
					breakLinkClassName='page-link'
					containerClassName='pagination'
					activeClassName='active'
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	)
}
