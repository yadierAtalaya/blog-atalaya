import { useRoutes } from 'react-router-dom'

// project imports
import PublicRoutes from './PublicRoutes'
import MainRoutes from './MainRoutes'
import LoginRoutes from './LoginRoutes'

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
	return useRoutes([PublicRoutes, LoginRoutes, MainRoutes])
}
