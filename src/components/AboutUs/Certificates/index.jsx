import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetCertificatesUs } from 'store/us/certificateAPi'
import { CertificateStyles } from './Certificates.styles'

// ===========================|| Certificates ||=========================== //

const Certificates = ({ handleClose, handleCertificate }) => {
	const dispatch = useDispatch()
	const { certificates } = useSelector((state) => state.certificateUs)

	useEffect(() => {
		dispatch(serviceGetCertificatesUs())
	}, [])

	return (
		<CertificateStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div className='box'>
				{certificates.map((item) => (
					<div
						key={`ct${item.id}`}
						className='card-certificate'
						onClick={() => handleCertificate(item.id)}
					>
						<h2>{item.title}</h2>
						<p className='description'>{item.description}</p>
					</div>
				))}
			</div>
		</CertificateStyles>
	)
}

export default Certificates
