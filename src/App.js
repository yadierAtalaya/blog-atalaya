import React from 'react'

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// routing
import Routes from './routes'
import { JWTProvider } from 'contexts/JWTContext'
import Snackbar from 'components/Snackbar/index'

// ===========================|| APP ||=========================== //
const options = {
	timeout: 5000,
	position: positions.BOTTOM_CENTER,
	transition: transitions.SCALE,
	containerStyle: {
		zIndex: 100000
	}
}

function App() {
	return (
		<JWTProvider>
			<AlertProvider template={AlertTemplate} {...options}>
				<Routes />
				<Snackbar />
			</AlertProvider>
		</JWTProvider>
	)
}

export default App
