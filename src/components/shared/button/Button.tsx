import React, { FC } from 'react'

interface IButtonProps {
	className?: string
	children: React.ReactNode
	isDisabled?: boolean
	onClick?: (event: React.MouseEvent) => void
}

const Button: FC<IButtonProps> = ({
	className,
	children,
	onClick,
	isDisabled
}) => {
	return (
		<button
			className={`${className} w-full font-bold text-xl sm:text-2xl py-2 bg-secondary-500/80 text-black hover:bg-secondary-500`}
			onClick={onClick}
			disabled={isDisabled}
		>
			{children}
		</button>
	)
}

export default Button
