import { useEffect, useState } from 'react'
import MenuHeader from 'components/MenuHeader'
import { AboutUsStyles } from './AboutUs.styles'
import Modal from 'components/Modal/'
import Mission from 'components/AboutUs/Mission/'
import Vision from 'components/AboutUs/Vision/'
import { Menu } from 'utils/Nosotros'
import Certificates from 'components/AboutUs/Certificates/'
import CertificateById from 'components/AboutUs/CertificateById/'
import ContactUs from 'components/ContactUs/'

const initialState = {
	state: false,
	view: false,
	title: ''
}

const AboutUs = () => {
	const [open, setOpen] = useState(initialState)
	const [certificateId, setCertificateId] = useState(null)
	const handleClose = () => {
		if (open.view === 'certificatebyId') {
			setOpen({ ...open, view: 'certificados' })
		} else {
			setOpen(initialState)
		}
	}
	const handleCertificate = (id) => {
		setCertificateId(id)
		setOpen({
			...open,
			view: 'certificatebyId'
		})
	}

	const HandleView = () => {
		switch (open.view) {
			case 'mission':
				return <Mission handleClose={handleClose} />
			case 'vision':
				return <Vision handleClose={handleClose} />
			case 'certificados':
				return (
					<Certificates
						handleClose={handleClose}
						handleCertificate={handleCertificate}
					/>
				)
			case 'certificatebyId':
				return (
					<CertificateById
						handleClose={handleClose}
						id={certificateId}
					/>
				)
			default:
				return null
		}
	}
	return (
		<AboutUsStyles seeTitle={open.state}>
			<MenuHeader
				back
				TitleMenu={() => <h2 className='title-h'>¿QUIÉNES SOMOS?</h2>}
			/>
			<div className='wrapper'>
				{Menu.map((item) => (
					<div
						key={item.id + 'menu'}
						className='card'
						onClick={() =>
							setOpen({
								state: true,
								view: item.view,
								title: item.title
							})
						}
					>
						<img src={item.img} />
						<div className='card-poster'></div>
						<div className='title'>
							<h2>{item.title}</h2>
						</div>
					</div>
				))}
			</div>
			{open.state && (
				<Modal open>
					<div className='box-p'>
						<MenuHeader
							handleClose={handleClose}
							close
							TitleMenu={() => <h2>{open.title}</h2>}
						/>
						<HandleView />
						<div className='contact'>
							<ContactUs />
						</div>
					</div>
				</Modal>
			)}
		</AboutUsStyles>
	)
}

export default AboutUs
