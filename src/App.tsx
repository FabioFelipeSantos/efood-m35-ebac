import { BrowserRouter } from "react-router"

import { GlobalStyle } from "./styles"
import MyRoutes from "./routes"
import Footer from "./components/Footer"
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
