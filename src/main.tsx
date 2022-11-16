import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './route'
// import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppRouter></AppRouter>
	</React.StrictMode>
)
