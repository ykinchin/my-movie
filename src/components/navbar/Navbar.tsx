import { FC } from 'react'

const Navbar: FC = () => {
	const linkHoverStyle =
		'pb-2 border-b-4 border-b-primary-300 cursor-pointer  hover:text-secondary-500 hover:border-b-secondary-500 hover:border-b-4 '

	return (
		<nav>
			<ul className=' flex h-full items-center gap-8  font-opensans'>
				<li className={`${linkHoverStyle}`}>TV Shows</li>
				<li className={`${linkHoverStyle}`}>Movies</li>
				<li className={`${linkHoverStyle}`}>Anime</li>
			</ul>
		</nav>
	)
}

export default Navbar
