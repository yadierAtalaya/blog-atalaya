import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuHeader from 'components/MenuHeader'
import { AlieStyles } from './Alies.styles'
import { serviceGetAllies } from 'store/alliesAPi'
const Alies = () => {
	const dispatch = useDispatch()
	const { allies } = useSelector((state) => state.ally)

	useEffect(() => {
		dispatch(serviceGetAllies())
	}, [])
	return (
		<AlieStyles>
			<MenuHeader
				back
				TitleMenu={() => <h2 className='title-h'>NUESTROS ALIADOS</h2>}
			/>
			<div className='box-allies'>
				{allies.map((item) => (
					<div key={item.id + 'ally'} className='card-ally'>
						<div className='card-head'>
							<h3 className='title-ally'>{item.name}</h3>
							<p className='description-ally'>
								{item.description}
							</p>
						</div>
						<div className='logo-ally'>
							<img src={item.image} alt='' />
						</div>
					</div>
				))}
			</div>
		</AlieStyles>
	)
}

export default Alies
