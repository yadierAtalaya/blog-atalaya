import React from 'react'
import { useDispatch } from 'react-redux'
import Lupa from 'assets/icons/lupa.svg'
import Cerrar from 'assets/icons/cerrar.svg'
import Volver from 'assets/icons/volver.svg'
import Home from 'assets/icons/home.svg'
import { MenuHeaderStyles } from './MenuHeader.styles'
import { MODAL_OPEN } from 'store/actions'
import { useNavigate } from 'react-router-dom'

const MenuHeader = ({ TitleMenu, close, handleClose, back ,toShare}) => {
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const handleModal = (val) => {
		dispatch({ type: MODAL_OPEN, modalOpen: val })
	}

	const handleGoback = () => {
		navigate(-1)
	}
	const handleGoHome = () => {
		navigate('/')
	}

	return (
		<MenuHeaderStyles>
			<div className='menu-header'>
				<div className='header-title '>
					{TitleMenu && <TitleMenu />}
				</div>
				<div></div>
				<div className='header-action'>
					<span onClick={() => handleModal(true)}>
						<img src={Lupa} alt=''  />
					</span>
					{close && (
						<span onClick={handleClose}>
							<img src={Cerrar} alt=''/>
						</span>
					)}
					{back && (
						<span onClick={handleGoback}>
							<img src={Volver} alt='' />
						</span>
					)}
					<span onClick={handleGoHome}>
						<img src={Home} alt='' />
					</span>

					{toShare && (
						<div onClick={handleGoback} className='to-share'>
						<h4>COMPARTIR</h4>
						</div>
					)}
				</div>
			</div>
		</MenuHeaderStyles>
	)
}

export default MenuHeader
