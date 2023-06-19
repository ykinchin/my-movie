import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUser } from '@/shared/types/User'

export interface AuthState {
	user: IUser | null
}

const initialState: AuthState = {
	user: null
}

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<IUser>) => {
			state.user = action.payload
			console.log(state.user)
		},
		logout: (state) => {
			state.user = null
		}
	}
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
