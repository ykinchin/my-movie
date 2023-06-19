import { FC } from 'react'
import { Link } from 'react-router-dom'

const Logo: FC = () => {
	return (
		<Link
			to='/'
			className=' flex flex-col text-2xl font-opensans font-bold items-center'
		>
			<span className='leading-4 text-2xl'>WOW</span>
			<span className=' border-b-2 text-xl'>movie</span>
		</Link>
	)
}

export default Logo
