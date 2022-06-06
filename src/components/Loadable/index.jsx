import React, { Suspense } from 'react'

// project imports
import Loader from 'components/Loader/index'

// ===========================|| LOADABLE - LAZY LOADING ||=========================== //

const Loadable = (Component) => (props) =>
	(
		<Suspense fallback={<Loader />}>
			<Component {...props} />
		</Suspense>
	)

export default Loadable
