import { FC, useState } from 'react'
import { HiSearch } from 'react-icons/hi'

const SearchForm: FC = () => {
	return (
		<div className=' '>
			<form className='flex justify-center items-center'>
				<input
					id='search'
					type='text'
					className='outline-none bg-inherit border-b-2 border-b-primary-300 focus:border-white'
				/>
				<label htmlFor='search' className='cursor-pointer'>
					<HiSearch size={25} />
				</label>
			</form>
		</div>
	)
}

export default SearchForm
