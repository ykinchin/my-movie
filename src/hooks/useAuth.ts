import { useAppSelector } from './storeHook'

export const useAuth = () => {
	const { user } = useAppSelector((state) => state.user)
	return !!user
}
