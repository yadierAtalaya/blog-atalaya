import React from 'react'
import { Link } from 'react-router-dom'
import { CardSearchStyles } from './CardSearch.styles'

function CardSearch({ item }) {
	return (
		<CardSearchStyles>
			<h4 className='title'>{item.title}</h4>
			<p>{item.description}</p>
		</CardSearchStyles>
	)
}

export default CardSearch
