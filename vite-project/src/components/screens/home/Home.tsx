import Layout from '../../layout/Layout.tsx'
import Button from '../../ui/button/Button.tsx'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.scss'
import useAuth from '../../../hooks/useAuth.ts'
import { useState } from 'react'

const Home = () => {
	const navigate = useNavigate()
	const { isAuth } = useAuth()

	console.log(isAuth)
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<Button
				clickHandler={() => {
					navigate(isAuth ? '/new-workout' : '')
				}}
			>
				{isAuth ? 'New' : 'Sign in'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}
export default Home
