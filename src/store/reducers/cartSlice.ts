import { createSlice } from "@reduxjs/toolkit"
import { Menu } from "../../types/models"

type Cart = {
	dishItems: Menu[]
	isOpen: boolean
}

const initialState: Cart = {
	dishItems: [
		{
			foto: "https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp",
			preco: 69.9,
			id: 1,
			nome: "Ravioli al Tartufo Nero",
			descricao:
				"O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.",
			porcao: "1 a 2 pessoas",
		},
		{
			foto: "https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//2.jpg",
			preco: 56.9,
			id: 2,
			nome: "Spaghetti alla Carbonara",
			descricao:
				"O Spaghetti alla Carbonara é um clássico prato italiano, feito com massa spaghetti al dente, coberto com um molho rico e cremoso à base de ovos, queijo pecorino romano, pancetta e pimenta-do-reino. Um prato saboroso e reconfortante que leva você diretamente para a Itália.",
			porcao: "1 a 2 pessoas",
		},
		{
			foto: "https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//3.jpg",
			preco: 74.9,
			id: 3,
			nome: "Risotto ai Funghi Porcini",
			descricao:
				"O Risotto ai Funghi Porcini é uma iguaria italiana feita com arroz Arborio de alta qualidade e cogumelos porcini secos, que são reidratados para liberar seu sabor intenso e terroso. O arroz é cozido lentamente em um caldo de legumes, com vinho branco e queijo parmesão, resultando em um risoto cremoso e delicioso.",
			porcao: "1 a 2 pessoas",
		},
	],
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
	},
	selectors: {
		isCartOpen: state => state.isOpen,
		cartItems: state => state.dishItems,
	},
})

export const { openCart, closeCart } = cartSlice.actions
export const { isCartOpen, cartItems } = cartSlice.selectors

export default cartSlice.reducer
