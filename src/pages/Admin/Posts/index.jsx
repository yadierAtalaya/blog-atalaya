import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardPostStyles, PostStyles } from './Posts.styles'
import { Link, useNavigate } from 'react-router-dom'
import { serviceGetPosts } from 'store/Admin/posts/postApi'
import { useDispatch, useSelector } from 'react-redux'
import iconMas from 'assets/icons/mas.svg'

export default function LastNews() {
	const { ref, inView } = useInView({
		threshold: 0
	})
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { posts, page, endPost } = useSelector((state) => state.posts)

	useEffect(() => {
		if (inView && !endPost) {
			dispatch(serviceGetPosts(page + 20))
		}
	}, [inView])

	return (
		<PostStyles>
			<LandscapeMenu active={1} />
			<Link className='add-post' to={'manage-news'}>
				<img src={iconMas} alt='' />
			</Link>
			<div className='contenedor'>
				{posts.map((item) => (
					<CardPostStyles
						key={item.id + 'admpost'}
						onClick={() => navigate(`edit/${item.slug}`)}
					>
						<h4>{item.title}</h4>
						<div className='card-footer'>
							<p>Publicado por: {item?.author?.firstName}</p>
							<p>Fecha : {item.createdAt}</p>
						</div>
					</CardPostStyles>
				))}

				<div ref={ref} className='inview-block'>
					...
				</div>
			</div>
		</PostStyles>
	)
}
