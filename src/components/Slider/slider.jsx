import React, { useEffect, useState } from 'react'
import { CardSlider, SliderContainer } from './slider.styles'
import { slides } from 'utils/sliderImages'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSwipeable } from 'react-swipeable'

const variantsImg = {
	center: {
		x: '-26%'
	},
	left: {
		x: '-42%'
	},
	right: {
		x: '-10%'
	}
}

const Slider = () => {
	const [position, setPosition] = useState(0)
	const [widthScreen, setWidthScreen] = useState(0)

	useEffect(() => {
		setWidthScreen(window.innerWidth)
		window.onresize = () => setWidthScreen(window.innerWidth)
	}, [])

	const onMove = (direction) => {
		if (direction === 'left') {
			if (position < slides.length - 1) {
				setPosition(position + 1)
			}
		} else if (direction === 'right') {
			if (position > 0) {
				setPosition(position - 1)
			}
		}
	}

	const handlers = useSwipeable({
		onSwipedLeft: () => onMove('left'),
		onSwipedRight: () => onMove('right'),
		preventDefaultTouchmoveEvent: true,
		trackMouse: true
	})

	return (
		<SliderContainer {...handlers}>
			<div className='row'>
				<div className='btns-slider'>
					<button
						className='btn'
						onClick={() => onMove('right')}
					></button>
					<button
						className='btn'
						onClick={() => onMove('left')}
					></button>
				</div>
				{slides.map((item, index) => (
					<CardSlider
						key={item.alt}
						animate={{
							left:
								widthScreen > 1024
									? `${(index - position) * 35 + 35}%`
									: widthScreen < 767
									? `${(index - position) * 70 + 15}%`
									: `${(index - position) * 35 + 35}%`,
							scale: index === position ? 1 : 0.8
						}}
						/*	transition={{
							type: 'keyframes',
							duration: 1
						}} */
					>
						<Link to={item.url} className='navigation'>
							<motion.img
								className='image-card'
								src={item.image}
								alt={item.alt}
								animate='center'
								/*	animate={
									index === position
										? 'center'
										: index > position
										? 'right'
										: 'left'
								} */
								variants={variantsImg}
								/*transition={{
									duration: 0.5
								}}*/
							/>
							<div className='title'>
								<h2>{item.alt}</h2>
							</div>
						</Link>
					</CardSlider>
				))}
			</div>
		</SliderContainer>
	)
}

export default Slider
