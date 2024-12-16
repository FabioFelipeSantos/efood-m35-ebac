import { useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import Card from "../../components/Card"
import { ListCardsContainer } from "../../styles"

import capitalizeWords from "../../utils/capitalizeWord"

type Props = {
	restaurants: RestaurantType[]
}

export default function Home({ restaurants }: Props) {
	const navigate = useNavigate()

	return (
		<>
			<Header />
			<div className="container">
				<ListCardsContainer gridColumns={2}>
					{restaurants.map(restaurant => (
						<Card
							key={restaurant.id}
							title={restaurant.titulo}
							description={restaurant.descricao}
							image={restaurant.capa}
							rating={restaurant.avaliacao}
							isHighlight={restaurant.destacado}
							restaurantType={capitalizeWords(restaurant.tipo)}
							theme="light"
							onButtonClick={() => navigate(`/restaurant/${restaurant.id}`)}
						/>
					))}
				</ListCardsContainer>
			</div>
		</>
	)
}
