import CardSearch from 'components/cardSearch/cardSearch'
import Search from 'components/Search'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LOADING_SEARCH_NEWS } from 'store/actions'
import { serviceSearchNews } from 'store/newsApi'
import { SearchNewStyles } from './SearchNews.styles'

export default function LastNews() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const alert = useAlert()
	const { searchResults, loading } = useSelector((state) => state.lastNews)
	const [valSearch, setValSearch] = useState('')
	useEffect(() => {
		dispatch({ type: LOADING_SEARCH_NEWS, loading: false })
	}, [])

	//reset redux data  close
	const handleSearch = () => {
		navigate('search')
		//navigate(-1)//anterior
	}
	const handleClose = () => {
		navigate('/')
	}
	const handleSubmit = (term) => {
		if (term.length < 3) {
			alert.error('Minimo 3 caracteres')
		} else {
			dispatch({ type: LOADING_SEARCH_NEWS, loading: true })
			setTimeout(() => {
				dispatch(serviceSearchNews(term))
			}, 1000)
			setValSearch(term)
		}
	}
	return (
		<SearchNewStyles
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 2 }}
		>
			<Search
				active
				handleSearch={handleSearch}
				handleSubmit={handleSubmit}
			/>
			<button onClick={handleClose}> Close</button>

			<div className='container-img'>
				<img src='https://i.ibb.co/GPg3pCJ/search.png' alt='' />
			</div>
			<div className='container-dark'></div>
			<div className='searchResults'>
				{searchResults?.map((item) => (
					<CardSearch key={item.id + 'cardsearch'} item={item} />
				))}
				{searchResults?.length < 1 && (
					<div style={{ color: '#fff' }}>
						<h1>No se encontraron resultados para: {valSearch}</h1>
					</div>
				)}
				{loading && (
					<div style={{ color: '#fff' }}>
						<h1>Loading</h1>
					</div>
				)}
			</div>
		</SearchNewStyles>
	)
}
