import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import PrivateRoutes from './components/routes/privateRoutes/PrivateRoutes'
import SignRoutes from './components/routes/signRoutes/SignRoutes'
import { auth } from './config/firebase'
import { useAppDispatch, useAppSelector } from './hooks/storeHook'
import './index.css'
import LoginPage from './scenes/loginPage/LoginPage'
import MainPage from './scenes/mainPage/MainPage'
import SignUpPage from './scenes/singUpPage/SignUpPage'
import UserPage from './scenes/userPage/UserPage'
import { setUser } from './store/slices/userSlice'

function App() {
	const dispatch = useAppDispatch()

	const { user } = useAppSelector((state) => state.user)
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			if (user && user.email)
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						photoUrl: user?.photoURL || null
					})
				)
		})
		return () => unsubscribe()
	}, [dispatch])

	return (
		<div className='app bg-primary-300 text-white'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
				</Route>
				<Route element={<SignRoutes />}>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/registration' element={<SignUpPage />} />
				</Route>
				<Route element={<PrivateRoutes />}>
					<Route path='/profile' element={<UserPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
