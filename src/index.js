import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// Router v6
import { BrowserRouter } from 'react-router-dom'
// Redux Toolkit
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
