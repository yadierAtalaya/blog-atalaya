import Carousel, { consts } from 'react-elastic-carousel'
import React, { useEffect, useState } from 'react'
import { CarouselStyles } from './carousel.styles'

import Item from './Item.styles'
import { slides, breakPoints } from 'utils/sliderImages'
import { useNavigate } from 'react-router-dom'

const getMid = () => Math.ceil(itemsToShow / 2) - 1 // 0 based

const itemsToShow = 3

const CarouselC = () => {
	const navigate = useNavigate()

	const [midItemIndex, setMidItemIndex] = useState(getMid)

	const onChange = (_, next) => {
		const mid = getMid()
		setMidItemIndex(mid + next.index)
	}

	return (
		<CarouselStyles>
			<Carousel
				//	easing='cubic-bezier(1,.15,.55,1.54)'
				//	tiltEasing='cubic-bezier(0.110, 1, 1.000, 0.210)'
				//	transitionMs={8}

				breakPoints={breakPoints}
				itemsToShow={itemsToShow}
				onNextStart={onChange}
				onPrevStart={onChange}
			>
				{slides.map((item, idx) => (
					<Item
						midItemIndex={midItemIndex}
						idx={idx}
						key={item.id}
						onClick={() => navigate(item.url)}
					>
						<img src={item.image} alt='' />
						<div className='title'>
							<h3>{item.alt}</h3>
						</div>
					</Item>
				))}
			</Carousel>
		</CarouselStyles>
	)
}

export default CarouselC
