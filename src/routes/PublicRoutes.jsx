import React, { lazy } from 'react'

// project imports
import GuestGuard from 'utils/route-guard/GuestGuard'
import NavMotion from 'layout/NavMotion'
import Loadable from 'components/Loadable/'

// public routing
import Home from 'pages/Home/index'
import LastNews from 'pages/LastNews/index'
import SearchNews from 'pages/SearchNews/index'
import AboutUs from 'pages/AboutUs/index'
import Allies from 'pages/Allies/index'
import WorkWithUs from 'pages/WorkWithUs/index'
import NewsSlug from 'pages/LastNews/NewsSlug/index'

const MinimalLayout = Loadable(lazy(() => import('layout/MinimalLayout/index')))
// ===========================|| PUBLIC ROUTING ||=========================== //

const PublicRoutes = {
	path: '',
	element: <MinimalLayout />,
	children: [
		{
			path: '/',
			element: (
				<NavMotion>
					<GuestGuard>
						<Home />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/ultimas-noticias',
			element: (
				<NavMotion>
					<GuestGuard>
						<LastNews />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/ultimas-noticias/:newsSlug',
			element: (
				<NavMotion>
					<GuestGuard>
						<NewsSlug />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/search',
			element: (
				<NavMotion>
					<GuestGuard>
						<SearchNews />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/nosotros',
			element: (
				<NavMotion>
					<GuestGuard>
						<AboutUs />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/aliados',
			element: (
				<NavMotion>
					<GuestGuard>
						<Allies />
					</GuestGuard>
				</NavMotion>
			)
		},
		{
			path: '/trabaja-con-nosotros',
			element: (
				<NavMotion>
					<GuestGuard>
						<WorkWithUs />
					</GuestGuard>
				</NavMotion>
			)
		}
	]
}

export default PublicRoutes
