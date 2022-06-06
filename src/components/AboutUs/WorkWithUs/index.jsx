import React from 'react'
import { WorkWithUStyles } from './WorkWithUs.styles'
import { useNavigate } from 'react-router-dom'
// ===========================|| Mission ||=========================== //

const WorkWithUs = () => {
	const navigate = useNavigate()

	return (
		<WorkWithUStyles>
			<h4 onClick={() => navigate('/')}>CERRAR</h4>
			
			<div className='content-work-with-us'>
				<h3>ATALAYA</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Donec quam felis, ultricies nec, pellentesque
					eu, pretium quis, sem. Nulla consequat massa quis enim.
					Donec pede justo, fringilla vel, aliquet nec, vulputate
					eget, arcu. In enim justo, rhoncus ut, imperdiet a,
					venenatis vitae, justo. Nullam dictum felis eu pede mollis
					pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
					semper nisi. Aenean vulputate eleifend tellus. Aenean leo
					ligula, porttitor eu, consequat vitae, eleifend ac, enim.
					Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
					tellus. Phasellus viverra nulla ut metus varius laoreet.
				</p>
				<div className='box-btn'>
					<button>Únete a nuestra familia</button>
				</div>
			</div>
		</WorkWithUStyles>
	)
}

export default WorkWithUs
