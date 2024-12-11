import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Menu } from "../../types/models"

type Cart = {
	dishItems: Menu[]
	isOpen: boolean
}

const initialState: Cart = {
	dishItems: [],
	isOpen: false,
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		openCart: state => {
			state.isOpen = true
		},
		closeCart: state => {
			state.isOpen = false
		},
		addItemToCart: (state, action: PayloadAction<Menu>) => {
			if (state.dishItems.find(dish => dish.id === action.payload.id)) {
				alert("Este prato já foi adicionado ao carrinho")
				return
			} else {
				state.dishItems.push(action.payload)
			}
		},
		removeItemOfCart: (state, action: PayloadAction<number>) => {
			state.dishItems = state.dishItems.filter(dish => dish.id !== action.payload)
		},
	},
	selectors: {
		isCartOpen: state => state.isOpen,
		cartItems: state => state.dishItems,
		totalCostOfCart: state => {
			return state.dishItems.reduce((total, dish) => (total += dish.preco), 0)
		},
		numberOfItemsOnCart: state => state.dishItems.length,
	},
})

export const { openCart, closeCart, addItemToCart, removeItemOfCart } = cartSlice.actions
export const { isCartOpen, cartItems, totalCostOfCart, numberOfItemsOnCart } = cartSlice.selectors

export default cartSlice.reducer
