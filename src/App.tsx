import { BrowserRouter } from "react-router"

import Footer from "./components/Footer"
import { GlobalStyle } from "./styles"

import MyRoutes from "./routes"
import { useGetRestaurantsQuery } from "./services/api"

export default function App() {
	const { data: restaurants } = useGetRestaurantsQuery()

	return (
		<BrowserRouter>
			<GlobalStyle />
			{!!restaurants ? <MyRoutes restaurants={restaurants} /> : <h1>Carregando restaurantes...</h1>}
			<Footer />
		</BrowserRouter>
	)
}
