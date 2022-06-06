import CardSearch from 'components/cardSearch/cardSearch'
import Search from 'components/Search'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom'
import { ModalStyles } from './Modal.styles'
import Logo from 'assets/icons/logo-atalaya.svg'
import { LogoStyles } from 'styles/global'
import { LOADING_SEARCH_NEWS } from 'store/actions'
import { serviceSearchNews } from 'store/newsApi'
import Cerrar from 'assets/icons/cerrar.svg'
import ContactUs from 'components/ContactUs/'

export default function Modal({ open, children, onClose }) {
	const dispatch = useDispatch()
	const alert = useAlert()
	const { searchResults, loading } = useSelector((state) => state.lastNews)
	const [valSearch, setValSearch] = useState('')
	useEffect(() => {
		dispatch({ type: LOADING_SEARCH_NEWS, loading: false })
	}, [])

	const handleSubmit = (term) => {
		if (term.length < 3) {
			alert.error('Minimo 3 caracteres')
		} else {
			dispatch({ type: LOADING_SEARCH_NEWS, loading: true })
			setTimeout(() => {
				dispatch(serviceSearchNews(term))
			}, 100)
			setValSearch(term)
		}
	}

	if (!open) return null

	return ReactDOM.createPortal(
		<>
			<ModalStyles
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
			>
				<div className='modal-dialog'>
					<LogoStyles>
						<img src={Logo} alt='' />
					</LogoStyles>

					<div className='container-search'>
						<Search active handleSubmit={handleSubmit} />
						<span onClick={onClose}>
							<img src={Cerrar} alt='' />
						</span>
					</div>

					<div className='container-results'>
						{searchResults?.map((item) => (
							<CardSearch key={item.id + 'result'} item={item} />
						))}
						{searchResults?.length < 1 && (
							<div style={{ color: '#fff' }}>
								<h1>
									No se encontraron resultados para:{' '}
									{valSearch}
								</h1>
							</div>
						)}
						{loading && (
							<div style={{ color: '#fff' }}>
								<h1>Loading...</h1>
							</div>
						)}
					</div>

					<ContactUs />
				</div>
			</ModalStyles>
		</>,
		document.getElementById('root-modal')
	)
}
