import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '@/hooks/useAuth'

const SignRoutes: FC = () => {
	const auth = useAuth()
	return <>{!auth ? <Outlet /> : <Navigate to='/' />}</>
}

export default SignRoutes
