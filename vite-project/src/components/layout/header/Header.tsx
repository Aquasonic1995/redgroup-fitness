import styles from './Header.module.scss'
import useAuth from '../../../hooks/useAuth.ts'
import { FiArrowLeft } from 'react-icons/fi'
import Hamburger from '../../hamburger/Hamburger.tsx'

const Header = () => {
	// @ts-ignore
	const { isAuth } = useAuth
	return (
		<div className={styles.header}>
			<button>
				<FiArrowLeft />
			</button>
			<Hamburger />
		</div>
	)
}

export default Header
