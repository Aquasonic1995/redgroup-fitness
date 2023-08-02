import styles from './Header.module.scss'
import useAuth from '../../../hooks/useAuth.ts'

const Header = () => {
	const {} = useAuth()
	return <div className={styles.header}></div>
}

export default Header
