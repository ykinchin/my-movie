import React, { useEffect, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

import { IMAGE_URL } from '@/shared/constants/urls'
import requests from '@/shared/requests/requests'
import { IMovie } from '@/shared/types/Movie'

import { useFetch } from '@/hooks/useFetch'

type Props = {}

const Banner = (props: Props) => {
	const [movie, setMovie] = useState<IMovie>()
	const [movies, loading] = useFetch<IMovie[]>(requests.fetchTrending, [])

	useEffect(() => {
		setMovie(movies[Math.floor(Math.random() * movies.length)])
	}, [movies])

	const truncateString = (str: any, num: number) => {
		if (str?.length > num) {
			return str.slice(0, num) + '...'
		} else {
			return str
		}
	}

	return (
		// <div>
		// 	{loading ? (
		// 		<div>loading</div>
		// 	) : (
		// 		<div className='w-full h-[600px] text-white relative flex items-center'>
		// 			<div className='w-full relative pl-8  z-20'>
		// 				<h1 className='font-bold text-3xl md:text-5xl'>
		// 					{movie?.title || movie?.name}
		// 				</h1>
		// 				<div>
		// 					<p className='w-full py-4 md:max-w-[50%] xs:max-w-[70%] text-lg'>
		// 						{truncateString(movie?.overview, 200)}
		// 					</p>
		// 					<button className=' flex items-center gap-4 text-xl border-2 border-white px-4 py-2 bg-primary-300 opacity-60 hover:opacity-100'>
		// 						Watch Now <FaPlay />
		// 					</button>
		// 				</div>
		// 			</div>
		// 			<div className='z-10 absolute bottom-0 w-full h-[600px] bg-gradient-to-t from-primary-300'></div>
		// 			<img
		// 				src={`${IMAGE_URL}${movie?.backdrop_path || movie?.poster_path}`}
		// 				alt='banner'
		// 				className='object-cover w-full h-full absolute top-0'
		// 			/>
		// 		</div>
		// 	)}
		// </div>
		<div></div>
	)
}

export default Banner
