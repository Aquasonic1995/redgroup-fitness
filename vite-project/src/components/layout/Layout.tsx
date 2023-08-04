import Header from './header/Header.tsx'
import cn from 'clsx'
import styles from './Layout.module.scss'

const Layout = ({ children, bgImage, heading = '', backlink }) => {
	// @ts-ignore
	return (
		<section className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}>
			<Header backlink={{ backlink }} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
