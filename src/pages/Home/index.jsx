import React, { useEffect, useState } from 'react'
import { HomeStyles } from './Home.styles'
import Search from 'components/Search'
import { MODAL_OPEN } from 'store/actions'
import { useDispatch } from 'react-redux'
import Carousel from 'components/Carousel/'
import SocialMedia from 'components/SocialMedia'

const Home = () => {
	const dispatch = useDispatch()
	const handleModal = (val) => {
		dispatch({ type: MODAL_OPEN, modalOpen: val })
	}

	return (
		<HomeStyles>
			<div className='searchbox'>
				<Search handleSearch={() => handleModal(true)} />
			</div>
			<div className='cont-carousel'>
				<Carousel />
			</div>
			<div className='social-media'>
				<SocialMedia />
			</div>
			{/*	<Slider />*/}
		</HomeStyles>
	)
}

export default Home
