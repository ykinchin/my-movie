import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useAppSelector } from '@/hooks/storeHook'

type Props = {}

const UserButton = (props: Props) => {
	const { user } = useAppSelector((state) => state.user)

	return (
		<Link to='/profile'>
			<div className='w-12 h-12 flex justify-center items-center  rounded-2xl bg-gray-500 cursor-pointer'>
				{user?.photoUrl ? (
					<img src={user.photoUrl} />
				) : (
					<span>{user?.email[0]}</span>
				)}
			</div>
		</Link>
	)
}

export default UserButton
