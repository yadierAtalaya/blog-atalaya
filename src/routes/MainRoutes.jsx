import Loadable from 'components/Loadable'
import React, { lazy } from 'react'

// project imports
import Profile from 'pages/Admin/Profile/'
import CreateAccount from 'pages/Admin/CreateAccount/'
import AuthGuard from 'utils/route-guard/AuthGuard'
import Posts from 'pages/Admin/Posts/'
import ManageNews from 'pages/Admin/Posts/ManageNews/index'
import ManageNewsEdit from 'pages/Admin/Posts/ManageNews/EditPost'
import Allies from 'pages/Admin/Allies/index'
import Us from 'pages/Admin/Us/index'
import MissionAdm from 'pages/Admin/Us/Mission/index'
import VisionAdm from 'pages/Admin/Us/Vision/index'
import Certificates from 'pages/Admin/Us/Certificates/index'
import AddCertificate from 'pages/Admin/Us/Certificates/AddCertificate'
import EditCertificate from 'pages/Admin/Us/Certificates/EditCertificate'
import AddAlly from 'pages/Admin/Allies/AddAlly'
import EditAlly from 'pages/Admin/Allies/EditAlly'

const MainLayout = Loadable(lazy(() => import('layout/MainLayout')))
// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
	path: '/',
	element: (
		<AuthGuard>
			<MainLayout />
		</AuthGuard>
	),
	children: [
		{
			path: '/admin',
			children: [
				{
					path: 'posts',
					element: <Posts />,
					key: 'page1'
				},
				{
					path: 'posts/manage-news/',
					element: <ManageNews />
				},
				{
					path: 'posts/edit/:slug',
					element: <ManageNewsEdit />
				},
				{
					path: 'us',
					element: <Us />,
					key: 'page2',
					hash: '345'
				},
				{
					path: 'us/certificates',
					element: <Certificates />
				},
				{
					path: 'us/certificates/add',
					element: <AddCertificate />
				},
				{
					path: 'us/certificates/edit/:id',
					element: <EditCertificate />
				},

				{
					path: 'us/mission',
					element: <MissionAdm />
				},
				{
					path: 'us/vision',
					element: <VisionAdm />
				},
				{
					path: 'allies',
					element: <Allies close />
				},
				{
					path: 'allies/add',
					element: <AddAlly />
				},
				{
					path: 'allies/edit/:id',
					element: <EditAlly />
				},
				{
					path: 'profile',
					element: <Profile />
				},
				{
					path: 'create-account',
					element: <CreateAccount />
				}
			]
		}
	]
}

export default MainRoutes
