import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = <T,>(url: string, initialState: T): [T, boolean] => {
	const [data, setData] = useState<T>(initialState)
	const [loading, setLoading] = useState(true)

	const fetchData = async () => {
		try {
			const response = await axios.get(url)
			const data = await response.data
			if (data) {
				setData(data.results)
				setLoading(false)
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log(error.response?.data)
			} else {
				console.log(error)
			}
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [url])

	return [data, loading]
}
