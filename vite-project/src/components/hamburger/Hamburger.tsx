import { useState } from 'react'
import styles from './Hamburger.module.scss'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import Menu from './Menu.tsx'

const Hamburger = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button
				onClick={() => {
					setOpen(!open)
				}}
			>
				{open ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu open={open} setOpen={setOpen} />
		</div>
	)
}

export default Hamburger
