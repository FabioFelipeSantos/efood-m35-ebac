import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
		clearCart: state => {
			state.dishItems = []
			state.isOpen = false
		},
	},
	selectors: {
		isCartOpen: state => state.isOpen,
		cartItems: state => state.dishItems,
		totalCostOfCart: state => {
			return state.dishItems.reduce((total, dish) => (total += dish.preco), 0)
		},
		numberOfItemsOnCart: state => state.dishItems.length,
		selectTotalAmountOfCart: state => {
			return state.dishItems.reduce((acc, cur) => (acc += cur.preco), 0)
		},
	},
})

export const { openCart, closeCart, addItemToCart, removeItemOfCart, clearCart } = cartSlice.actions
export const { isCartOpen, cartItems, totalCostOfCart, numberOfItemsOnCart, selectTotalAmountOfCart } =
	cartSlice.selectors

export default cartSlice.reducer
