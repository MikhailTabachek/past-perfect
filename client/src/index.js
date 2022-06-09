import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore, applyMidleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

import App from "./App"

const store = configureStore(reducers, compose(applyMidleware(thunk)))

ReactDOM.render(<App />, document.getElementById('root'))