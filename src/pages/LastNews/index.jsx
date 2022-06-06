import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LastNewStyles } from './LastNews.styles'
import { serviceNews } from 'store/newsApi'
import MenuHeader from 'components/MenuHeader'
import { PaginatedItems } from './PaginatedItems'
import { getCurrentDate } from 'utils/date'


const TitleMenus = () => (
	    <>
			<h2>ÚLTIMAS NOTICIAS</h2>
			<p>{getCurrentDate()}</p>
		</>)

export default function LastNews() {
	const dispatch = useDispatch()
	const { news } = useSelector((state) => state.lastNews)

	useEffect(() => {
		if(news.length === 0){
			setTimeout(() => {
				dispatch(serviceNews(0))
			}, 200)
		}
	}, [])

	return (
		<LastNewStyles>
			<MenuHeader back TitleMenu={TitleMenus} />
			{news.length > 0 ? (
				<PaginatedItems itemsPerPage={6} />
			) : (
				<div className='container-news'>
					<h1 className='loading1'>Cargando...</h1>
				</div>
			)}
		</LastNewStyles>
	)
}
