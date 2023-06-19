import { signOut } from 'firebase/auth'
import { FC } from 'react'

import { logout } from '@/store/slices/userSlice'

import { useAppDispatch } from '@/hooks/storeHook'

import Navbar from '../navbar/Navbar'
import SearchForm from '../searchForm/SearchForm'
import Logo from '../shared/logo/Logo'
import UserButton from '../userButton/UserButton'

import { auth } from '@/config/firebase'

const Header: FC = () => {
	const dispatch = useAppDispatch()
	const handleLogout = async () => {
		await signOut(auth)
		dispatch(logout())
	}
	return (
		<header className='w-4/5 mx-auto min-w-max '>
			<div className='flex py-2 justify-between'>
				<div className='flex gap-8'>
					<Logo />
					<Navbar />
				</div>
				<div className='flex  items-center justify-center gap-8'>
					<SearchForm />
					<UserButton />
					<div onClick={handleLogout}>sign out</div>
				</div>
			</div>
		</header>
	)
}

export default Header
