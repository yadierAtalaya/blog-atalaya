import SocialMedia from 'components/SocialMedia'
import React from 'react'
import { ContactUsStyles } from './ContactUs.styles'
const ContactUs = ({}) => {
	return (
		<ContactUsStyles>
			<h2>Contáctanos</h2>
			<p>gerenciacomercial@logitransatalaya.com</p>
			<p>www.logitransatalaya.com</p>
			<p>Tel. 314 555 4983</p>
			<div className='social'>
				<SocialMedia width={'3rem'} />
			</div>
		</ContactUsStyles>
	)
}

export default ContactUs
