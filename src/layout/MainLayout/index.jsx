import Search from 'components/Search'
import React, { useEffect, useState } from 'react'
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
	Router
} from 'react-router-dom'
import { LogoStyles } from 'styles/global'
import { MainLayoutStyles } from './MainLayout.styles'
import useAuth from 'hooks/useAuth'

import Cerrar from 'assets/icons/cerrar.svg'
const routesToBack = ['/admin/posts', '/admin/us', '/admin/allies']
const routesToHome = ['/admin/create-account', '/admin/profile']

// ===========================|| MAIN LAYOUT ||=========================== //
const MainLayout = ({ disabled }) => {
	const navigate = useNavigate()
	const { user, logout } = useAuth()
	const location = useLocation()
	const [state, setState] = useState({
		goBack: false,
		goHome: false,
		firstPAge: 0
	})

	useEffect(() => {
		let url = location.pathname
		let val1 = routesToBack.includes(url)
		let val2 = routesToHome.includes(url)
		setState({ goBack: val1, goHome: val2, firstPAge: state.firstPAge + 1 })
	}, [location])

	const handleGoback = () => {
		if (state.goHome || state.firstPAge < 2) {
			navigate('/admin/posts')
			return
		}
		navigate(-1)
	}

	return (
		<MainLayoutStyles>
			{/* main content */}
			<main>
				{!disabled ? (
					<>
						<div className='box-log'>
							<Link to={'/admin/posts'}>
								<LogoStyles>
									<img
										src={
											require(`assets/images/logo-atalaya.svg`)
												.default
										}
									/>
								</LogoStyles>
							</Link>
						</div>
						<div className='box-admin'>
							<div>
								<h4>{user?.firstName}</h4>
								<div className='admin-action'>
									<Link to={'/admin/profile'}>Perfil</Link>
									<Link to={'/admin/create-account'}>
										Crear cuenta
									</Link>
									<Link onClick={logout} to={'login'}>
										Cerrar sesión
									</Link>
								</div>
							</div>
							<div className='searchbox'>
								<Search /*handleSearch={() => handleModal(true)}  */
								/>
							</div>
							{!state.goBack ? (
								<div className='go-back'>
									<span onClick={handleGoback}>
										<img src={Cerrar} alt='' />
									</span>
								</div>
							) : null}
						</div>
					</>
				) : null}
				<Outlet />
			</main>
		</MainLayoutStyles>
	)
}
export default MainLayout
