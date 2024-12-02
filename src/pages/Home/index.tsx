import Header from "../../components/Header"
import ListOfDishes from "../../components/ListOfDishes"
import { DishType } from "../../types/models"

import sushi from "../../assets/sushi.png"
import macarrao from "../../assets/macarrao.png"

const dishes: DishType[] = [
	{
		id: 1,
		title: "Hioki Sushi",
		description:
			"Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
		rating: 4.9,
		topButton: "Japonesa",
		isHighlight: true,
		image: sushi,
	},
	{
		id: 2,
		title: "La Dolce Vita Trattoria",
		description:
			"A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
		rating: 4.6,
		topButton: "Italiana",
		isHighlight: false,
		image: macarrao,
	},
	{
		id: 3,
		title: "La Dolce Vita Trattoria",
		description:
			"A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
		rating: 4.6,
		topButton: "Italiana",
		isHighlight: false,
		image: macarrao,
	},
	{
		id: 4,
		title: "La Dolce Vita Trattoria",
		description:
			"A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
		rating: 4.6,
		topButton: "Italiana",
		isHighlight: false,
		image: macarrao,
	},
	{
		id: 5,
		title: "La Dolce Vita Trattoria",
		description:
			"A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
		rating: 4.6,
		topButton: "Italiana",
		isHighlight: false,
		image: macarrao,
	},
	{
		id: 6,
		title: "La Dolce Vita Trattoria",
		description:
			"A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
		rating: 4.6,
		topButton: "Italiana",
		isHighlight: false,
		image: macarrao,
	},
]

export default function Home() {
	return (
		<>
			<Header />
			<div className="container">
				<ListOfDishes dishes={dishes} />
			</div>
		</>
	)
}
