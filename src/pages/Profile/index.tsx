import { useState } from "react"
import { Menu, RestaurantType } from "../../types/models"
import Header from "../../components/Header"
import { useParams } from "react-router-dom"
import { ListCardsContainer } from "../../styles"
import Card from "../../components/Card"
import capitalizeWords from "../../utils/capitalizeWord"
import Modal from "../../components/Modal"
import { useAppSelector } from "../../store/hooks"
import { isCartOpen } from "../../store/reducers/cartSlice"
import Cart from "../../components/Cart"

type Props = {
	restaurants: RestaurantType[]
}

export default function Profile({ restaurants }: Props) {
	const cartIsOpen = useAppSelector(state => isCartOpen(state))

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [dishToOpen, setDishToOpen] = useState<Menu>()

	const { id } = useParams()
	const restaurant = restaurants.find(restaurant => restaurant.id === Number(id))

	if (!restaurant) {
		return <h1>Pratos não encontrados</h1>
	}

	const dishes = restaurant.cardapio

	function handlingClick(dish: Menu) {
		setDishToOpen(dish)
		setIsModalOpen(true)
	}

	return (
		<>
			<Header
				page="profile"
				restaurantName={restaurant.titulo}
				typeRestaurant={capitalizeWords(restaurant.tipo)}
				backgroundImageUrl={restaurant.capa}
			/>

			<div className="container">
				<ListCardsContainer gridColumns={3}>
					{dishes.map(dish => (
						<Card
							key={dish.id}
							title={dish.nome}
							description={dish.descricao}
							image={dish.foto}
							theme="dark"
							onButtonClick={() => handlingClick(dish)}
						/>
					))}
				</ListCardsContainer>
			</div>

			{isModalOpen && <Modal dish={dishToOpen!} handlingClose={() => setIsModalOpen(false)} />}

			{cartIsOpen && <Cart />}
		</>
	)
}
