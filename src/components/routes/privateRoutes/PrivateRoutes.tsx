import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

const PrivateRoutes: FC = () => {
	const auth = useAuth()
	return <>{auth ? <Outlet /> : <Navigate to='/' />}</>
}

export default PrivateRoutes
