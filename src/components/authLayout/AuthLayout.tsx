import { signOut } from 'firebase/auth'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { logout } from '@/store/slices/userSlice'

import { useAppDispatch } from '@/hooks/storeHook'

import Logo from '../shared/logo/Logo'

import { auth } from '@/config/firebase'

interface ILayoutProps {
	children: React.ReactNode
	title: string
}

const AuthLayout: FC<ILayoutProps> = ({ children, title }) => {
	const dispatch = useAppDispatch()
	const handleLogout = async () => {
		await signOut(auth)
		dispatch(logout())
	}

	const bgLink =
		'https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

	return (
		<div className='w-full h-screen relative flex items-center justify-center'>
			<div className='bg-black/50 fixed top-0 left-0 w-full h-screen z-10'></div>
			<img
				src={bgLink}
				alt='background'
				className='w-full h-full object-cover absolute top-0 left-0'
			/>
			<div className='z-20 absolute top-8 left-8'>
				<Logo />
			</div>
			<div className='z-50 bg-primary-500/80 w-full  h-3/5 px-8 py-10 xs:w-[400px] xs:h-4/6'>
				<h1 className='text-3xl  font-bold pb-8 xs:text-4xl'>
					{title === 'login' ? 'Sign In' : 'Sign Up'}
				</h1>
				{children}
				<div>
					{title === 'login'
						? "Don't have an account?"
						: 'Already have an account?'}
					<Link
						to={title === 'login' ? '/registration' : '/login'}
						className='hover:text-secondary-500 ml-4'
					>
						{title === 'login' ? 'Register now' : 'Sign In'}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AuthLayout
