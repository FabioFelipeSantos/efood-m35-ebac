import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cartSlice"
import api from "./../services/api"
import deliveryReducer from "./reducers/deliverySlice"
import paymentReducer from "./reducers/paymentSlice"

const store = configureStore({
	reducer: {
		cart: cartReducer,
		[api.reducerPath]: api.reducer,
		delivery: deliveryReducer,
		payment: paymentReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
