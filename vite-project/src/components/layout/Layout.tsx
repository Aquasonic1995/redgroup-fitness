import Header from './header/Header.tsx'

// @ts-ignore
const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
