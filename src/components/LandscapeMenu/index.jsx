import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LandscapeMenuStyles } from './LandscapeMenu.styles'

const LandscapeMenu = ({ active }) => {
	return (
		<LandscapeMenuStyles>
			<li>
				<Link
					className={active === 1 ? 'active' : ''}
					to={'/admin/posts'}
				>
					Noticias
				</Link>
			</li>
			<li>
				<Link className={active === 2 ? 'active' : ''} to={'/admin/us'}>
					Nosotros
				</Link>
			</li>
			<li>
				<Link
					className={active === 3 ? 'active' : ''}
					to={'/admin/allies'}
				>
					Aliados
				</Link>
			</li>
		</LandscapeMenuStyles>
	)
}

export default LandscapeMenu
