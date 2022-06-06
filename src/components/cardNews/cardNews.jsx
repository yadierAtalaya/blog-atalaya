import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardNewStyles } from './CardNews.styles'

function CardNews({ item }) {
	const navigate = useNavigate()
	return (
		<CardNewStyles onClick={() => navigate(item.slug)}>
			<div>
				<h2 className='title'>{item.id} - {item.title}</h2>

				<p>{item.description}</p>
			</div>
		</CardNewStyles>
	)
}

export default CardNews
