import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AuthForm from '@/components/authForm/AuthForm'
import AuthLayout from '@/components/authLayout/AuthLayout'

import { setUser } from '@/store/slices/userSlice'

import { useAppDispatch } from '@/hooks/storeHook'

import { auth, db } from '@/config/firebase'

type Props = {}

const SignUpPage = (props: Props) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleRegister = (email: string, password: string) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(
					setUser({
						email,
						id: user.uid,
						photoUrl: user.photoURL || null
					})
				)
			})
			.then(() => navigate('/'))
	}

	return (
		<AuthLayout title='registration'>
			<AuthForm buttonTitle='Sign Up' handleClick={handleRegister} />
		</AuthLayout>
	)
}

export default SignUpPage
