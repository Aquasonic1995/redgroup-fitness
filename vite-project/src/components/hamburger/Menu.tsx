import cn from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data.ts'
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

const Menu = ({ open, setOpen }: any) => {
	const ref = useRef(null)
	const handleClickOutside = () => {
		setOpen(false)
	}
	useOnClickOutside(ref, handleClickOutside)
	const logoutHandler = () => {}
	return (
		<nav className={cn(styles.menu, { [styles.show]: open })} ref={ref}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>{item.title}</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
