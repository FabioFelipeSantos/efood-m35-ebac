import { BrowserRouter } from "react-router"

import { GlobalStyle } from "./styles"
import MyRoutes from "./routes"
import Footer from "./components/Footer"

export default function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<MyRoutes />
			<Footer />
		</BrowserRouter>
	)
}
