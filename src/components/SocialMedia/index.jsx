import React from 'react'
import { SocialMediaStyles } from './SocialMedia.styles'
import Facebook from 'assets/icons/fb.svg'
import Instagram from 'assets/icons/ig.svg'
import Websit from 'assets/icons/websit.svg'
// ===========================|| Loader ||=========================== //

const SocialMedia = ({ width }) => {
	return (
		<SocialMediaStyles width={width}>
			<span>
				<img src={Facebook} alt='' />
			</span>
			<span>
				<img src={Instagram} alt='' />
			</span>
			<span>
				<img src={Websit} alt='' />
			</span>
		</SocialMediaStyles>
	)
}

export default SocialMedia
