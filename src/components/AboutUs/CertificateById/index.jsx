import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { serviceGetCertificateIdUs } from 'store/us/certificateAPi'
import { CertificateStyles } from './Certificates.styles'
import { DocumentViewer } from 'react-documents';
// ===========================|| Mission ||=========================== //

const Certificates = ({ handleClose, id }) => {
	const dispatch = useDispatch()

	const { certificateId } = useSelector((state) => state.certificateUs)
	
	useEffect(() => {
		dispatch(
			serviceGetCertificateIdUs(id)
		)
	}, [])
	
	return (
		<CertificateStyles>
			<h4 onClick={handleClose}>CERRAR</h4>
			<br />
			<div>
			</div>
			{ certificateId ? 
			<div className='box'>
				<h3 className='title'>{certificateId.title}</h3>
				<div>
					<DocumentViewer
						url={certificateId.url}
						viewer="url"
						style={{width:'100%',height:'50vh'}}
					>
					</DocumentViewer>
    			</div>
			</div>
			:
			null
				}
		</CertificateStyles>
	)
}

export default Certificates
