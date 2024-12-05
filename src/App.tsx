import { BrowserRouter } from "react-router"

import { GlobalStyle } from "./styles"
import MyRoutes from "./routes"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import { RestaurantType } from "./types/models"

export default function App() {
	const [restaurants, setRestaurants] = useState<RestaurantType[]>()

	useEffect(() => {
		fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
			.then(response => response.json())
			.then(data => setRestaurants(data))
	}, [])

	return (
		<BrowserRouter>
			<GlobalStyle />
			{restaurants ? <MyRoutes restaurants={restaurants} /> : <h1>Carregando restaurantes...</h1>}
			<Footer />
		</BrowserRouter>
	)
}
