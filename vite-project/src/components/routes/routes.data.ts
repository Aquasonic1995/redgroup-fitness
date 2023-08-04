import Home from '../screens/home/Home.tsx'
import Auth from '../screens/auth/Auth.tsx'
import NewWorkout from '../screens/new-workout/New-workout.tsx'
import Profile from '../screens/profile/Profile.tsx'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	}
]
