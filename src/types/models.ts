// https://fake-api-tau.vercel.app/api/efood/restaurantes
export type RestaurantType = {
	id: number
	titulo: string
	destacado: boolean
	tipo: string
	avaliacao?: number | undefined
	descricao: string
	capa: string
	cardapio: {
		id: number
		foto: string
		preco: number
		nome: string
		descricao: string
		porcao: string
	}[]
	topButton?: string
}

export type Menu = {
	id: number
	foto: string
	preco: number
	nome: string
	descricao: string
	porcao: string
}
