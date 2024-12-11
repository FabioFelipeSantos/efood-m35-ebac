import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cartSlice"
import api from "./../services/api"

const store = configureStore({
	reducer: {
		cart: cartReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
