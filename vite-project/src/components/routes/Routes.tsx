import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes.data.ts'
import NotFound from '../screens/not-found/Not-found.tsx'
import useAuth from '../../hooks/useAuth.ts'

const RouterApp = () => {
	const { isAuth } = useAuth()
	// @ts-ignore
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default RouterApp
