import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

import { nodeEnv } from 'utils/constant'
// ===========================|| REDUX - MAIN STORE ||=========================== //
const composeEnhancers =
	(nodeEnv !== 'production' &&
		typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export { store }
