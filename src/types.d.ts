declare type RestaurantType = {
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

declare type Menu = {
	id: number
	foto: string
	preco: number
	nome: string
	descricao: string
	porcao: string
}

declare type DeliveryInfo = {
	fullName: string
	address: {
		street: string
		city: string
		cep: string
		number: number
		moreInfo?: string
	}
}

declare type PaymentInfo = {
	cardName: string
	cardNumber: string
	cardVerificationNumber: number
	expiresMonth: number
	expiresYear: number
}

declare type CheckoutInformation = {
	products: { id: number; price: number }[]
	delivery: {
		receiver: string
		address: {
			description: string
			city: string
			zipCode: string
			number: number
			complement?: string
		}
	}
	payment: {
		card: {
			name: string
			number: string
			code: number
			expires: {
				month: number
				year: number
			}
		}
	}
}
