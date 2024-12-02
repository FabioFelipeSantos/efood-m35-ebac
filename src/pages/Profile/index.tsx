import { DishType } from "../../types/models"
import Header from "../../components/Header"
import ListOfDishes from "../../components/ListOfDishes"

import pizza from "../../assets/pizza.png"

const pizzasDishes: DishType[] = [
	{
		id: 1,
		title: "Pizza Marguerita",
		description:
			"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
		isHighlight: false,
		image: pizza,
	},
	{
		id: 2,
		title: "Pizza Marguerita",
		description:
			"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
		isHighlight: false,
		image: pizza,
	},
	{
		id: 3,
		title: "Pizza Marguerita",
		description:
			"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
		isHighlight: false,
		image: pizza,
	},
	{
		id: 4,
		title: "Pizza Marguerita",
		description:
			"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
		isHighlight: false,
		image: pizza,
	},
	{
		id: 5,
		title: "Pizza Marguerita",
		description:
			"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
		isHighlight: false,
		image: pizza,
	},
	{
		id: 6,
		title: "Pizza Marguerita",
		description:
			"A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
		isHighlight: false,
		image: pizza,
	},
]

export default function Profile() {
	return (
		<>
			<Header page="profile" />
			<div className="container">
				<ListOfDishes
					dishes={pizzasDishes}
					theme="dark"
					gridColumns={3}
				/>
			</div>
		</>
	)
}
