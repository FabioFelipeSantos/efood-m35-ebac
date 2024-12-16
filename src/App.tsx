import { BrowserRouter } from "react-router"

import Footer from "./components/Footer"
import { colors, GlobalStyle } from "./styles"

import MyRoutes from "./routes"
import { useGetRestaurantsQuery } from "./services/api"
import { PropagateLoader } from "react-spinners"

export default function App() {
	const { data: restaurants } = useGetRestaurantsQuery()

	return (
		<BrowserRouter>
			<GlobalStyle />
			{!!restaurants ? (
				<MyRoutes restaurants={restaurants} />
			) : (
				<div
					className="container"
					style={{
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<PropagateLoader size={28} speedMultiplier={0.8} color={colors.secondaryLight} />
				</div>
			)}
			<Footer />
		</BrowserRouter>
	)
}
