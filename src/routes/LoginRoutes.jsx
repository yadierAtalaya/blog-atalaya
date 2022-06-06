import React, { lazy } from 'react'

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard'
import MainLayout from 'layout/MainLayout/'
import NavMotion from 'layout/NavMotion'
import Loadable from 'components/Loadable/'

// login routing
const AuthLogin = Loadable(
	lazy(() => import('pages/Authentication/Login/index'))
)

// ===========================|| AUTH ROUTING ||=========================== //

const LoginRoutes = {
	path: '',
	element: <MainLayout disabled/>,
	children: [
		{
			path: '/login',
			element: (
				<NavMotion>
					<GuestGuard>
						<AuthLogin />
					</GuestGuard>
				</NavMotion>
			)
		}
	]
}

export default LoginRoutes
