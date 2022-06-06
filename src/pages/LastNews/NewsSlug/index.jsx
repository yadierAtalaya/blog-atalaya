import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { NewsSlugStyles } from './NewsSlug.styles'
import { useDispatch, useSelector } from 'react-redux'
import { serviceNewsSlug } from 'store/newsApi'
import MenuHeader from 'components/MenuHeader'
import { StyledPostContent } from './PostContent'

const TitleMenus = () =>(<h2>NOVEDADES</h2>)


export default function NewsSlug() {
	const dispatch = useDispatch()
	let { newsSlug } = useParams()
	const { postSlug } = useSelector((state) => state.lastNews)

	useEffect(() => {
		dispatch(serviceNewsSlug(newsSlug))
	}, [])

	return (
		<NewsSlugStyles>
			<MenuHeader back TitleMenu={TitleMenus} toShare/>
			<div className='container-news-slug'>
				<div className='news-slug'>
				<StyledPostContent post={postSlug?.content } />
				

Número de visitas a esta página 249
Fecha de publicación 24/02/2022
Última modificación 24/02/2022
				</div>
			</div>
		</NewsSlugStyles>
	)
}


