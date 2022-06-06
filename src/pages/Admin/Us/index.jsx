import React, { useEffect, useState } from 'react'
import LandscapeMenu from 'components/LandscapeMenu/index'
import { CardUsStyles, UsStyles } from './Us.styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetUs, serviceGetUsCertificate } from 'store/Admin/us/usApi'

const data = [
	{
		id: 0,
		title: 'Misión',
		url: 'mission',
		name: 'mision'
	},
	{
		id: 1,
		title: 'Visión',
		url: 'vision',
		name: 'vision'
	},
	{
		id: 2,
		title: 'Certificados',
		url: 'certificates',
		name: 'certificados'
	}
]

export default function Us() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { us } = useSelector((state) => state.us)

	useEffect(() => {
		dispatch(serviceGetUsCertificate())
		dispatch(serviceGetUs())
	}, [])
	return (
		<UsStyles>
			<LandscapeMenu active={2} />
			<div className='container-us'>
				{data.map((item) => (
					<CardUsStyles
						key={item.id + 'admus'}
						onClick={() => navigate(item.url)}
					>
						<div className='card-title'>
							<h2>{item.title}</h2>
						</div>
						<div className='card-footer'>
							<p>Fecha: {us[item.name]?.updatedAt}</p>
							<p>Ultima edición: {us[item.name]?.firstName}</p>
						</div>
					</CardUsStyles>
				))}
			</div>
		</UsStyles>
	)
}
