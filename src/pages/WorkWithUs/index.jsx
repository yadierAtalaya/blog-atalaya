import Modal from 'components/Modal'
import React, { useState, useEffect } from 'react'
import MenuHeader from 'components/MenuHeader'
import { WorkWithUStyles } from './WorkWithUs.styles'
import ContactUs from 'components/ContactUs'
import WorkWithUs from 'components/AboutUs/WorkWithUs/'
export default function LastNews() {
	return (
		<WorkWithUStyles>
			<Modal open>
				<div className='box-p'>
					<MenuHeader
						back
						TitleMenu={() => <h2>TRABAJA CON NOSOTROS</h2>}
					/>
					<WorkWithUs />
					<div className='contact'>
						<ContactUs />
					</div>
				</div>
			</Modal>
		</WorkWithUStyles>
	)
}
