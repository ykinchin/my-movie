import { Outlet } from 'react-router-dom'

import Header from '../header/Header'

type Props = {}

const Layout = (props: Props) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default Layout
