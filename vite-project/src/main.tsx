import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import RouterApp from './components/routes/Routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterApp />
	</React.StrictMode>
)
