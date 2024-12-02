import { DishType } from "../../types/models"
import Dish from "../Dish"
import { ListDishesContainer } from "./styles"

type Props = {
	dishes: DishType[]
	gridColumns?: number
	theme?: "light" | "dark"
}

export default function ListOfDishes({ dishes, theme = "light", gridColumns = 2 }: Props) {
	return (
		<ListDishesContainer gridColumns={gridColumns}>
			{dishes.map(dish => (
				<Dish
					key={dish.id}
					title={dish.title}
					description={dish.description}
					image={dish.image}
					rating={dish.rating}
					isHighlight={dish.isHighlight}
					topButton={dish.topButton}
					theme={theme}
				/>
			))}
		</ListDishesContainer>
	)
}
