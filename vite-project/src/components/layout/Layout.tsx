import Header from './header/Header.tsx'
import cn from 'clsx'
import styles from './Layout.module.scss'
import Loader from '../ui/Loader.tsx'
type LayoutType = {
	children: any
	bgImage: string
	heading: string
	backLink: string
}
const Layout = ({
	children,
	bgImage,
	heading = '',
	backLink = ''
}: LayoutType) => {
	// @ts-ignore
	return (
		<section
			className={cn(styles.wrapper, { [styles.otherPage]: !!heading })}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={styles.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export default Layout
