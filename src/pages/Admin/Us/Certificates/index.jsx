import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import {
	CertificatesStyles,
	CardCertificatesStyles
} from './Certificates.styles'
import iconMas from 'assets/icons/mas.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetCertificates } from 'store/Admin/us/certificateApi'

export default function Allies() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { certificates } = useSelector((state) => state.certificate)

	useEffect(() => {
		if (certificates.length === 0) {
			dispatch(serviceGetCertificates())
		}
	}, [certificates])

	return (
		<CertificatesStyles>
			<LandscapeMenu active={2} />
			<div className='add-certificate'>
				<Link to={'add'}>
					{' '}
					<img src={iconMas} alt='' />
				</Link>{' '}
			</div>
			<div className='ct-us'>
				<h4>Certificados</h4>
				<div className='contenedor'>
					{certificates.map((item) => (
						<CardCertificatesStyles
							key={item.id + 'adm-c'}
							onClick={() => navigate(`edit/${item.id}`)}
						>
							<h4>{item.title}</h4>
							<div className='card-footer'>
								<p>Publicado por: {item.author?.firstName}</p>
								<p>Fecha : {item.updatedAt}</p>
							</div>
						</CardCertificatesStyles>
					))}
				</div>
			</div>
		</CertificatesStyles>
	)
}
