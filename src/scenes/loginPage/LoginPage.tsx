import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import AuthForm from '@/components/authForm/AuthForm'
import AuthLayout from '@/components/authLayout/AuthLayout'

import { setUser } from '@/store/slices/userSlice'

import { useAppDispatch } from '@/hooks/storeHook'

import { auth } from '@/config/firebase'

type Props = {}

const LoginPage = (props: Props) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogin = (email: string, password: string) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email,
						id: user.uid,
						photoUrl: user.photoURL || null
					})
				)
			})
			.then(() => navigate('/', { replace: true }))
	}

	return (
		<AuthLayout title='login'>
			<AuthForm buttonTitle='Sign In' handleClick={handleLogin} />
		</AuthLayout>
	)
}

export default LoginPage
