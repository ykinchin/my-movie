import React, { FC, useState } from 'react'

import Button from '../shared/button/Button'

type AuthFormProps = {
	buttonTitle: string
	handleClick: (email: string, password: string) => void
}

const AuthForm: FC<AuthFormProps> = ({ buttonTitle, handleClick }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className='w-full flex flex-col'>
			<input
				type='text'
				className='p-1 my-2 bg-gray-700 xs:p-3 '
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type='text'
				className='p-1 my-2 bg-gray-700 xs:p-3'
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button className='my-6' onClick={() => handleClick(email, password)}>
				{buttonTitle}
			</Button>
		</div>
	)
}

export default AuthForm
