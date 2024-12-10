import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cartSlice"

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
