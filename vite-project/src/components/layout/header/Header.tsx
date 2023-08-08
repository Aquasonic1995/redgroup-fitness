import styles from './Header.module.scss'
import useAuth from '../../../hooks/useAuth.ts'
import { FiArrowLeft } from 'react-icons/fi'
import Hamburger from '../../hamburger/Hamburger.tsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineUser } from 'react-icons/hi'

const Header = ({ backLink }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	// @ts-ignore
	const { isAuth } = useAuth()
	return (
		<div className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink || '/')
					}}
				>
					<FiArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<HiOutlineUser color='white' />
				</button>
			)}
			<Hamburger />
		</div>
	)
}

export default Header
