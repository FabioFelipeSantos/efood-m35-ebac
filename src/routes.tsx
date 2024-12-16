import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Profile from "./pages/Profile"

type Props = {
	restaurants: RestaurantType[]
}

export default function MyRoutes({ restaurants }: Props) {
	return (
		<Routes>
			<Route path="/" element={<Home restaurants={restaurants} />} />
			<Route path="/restaurant/:id" element={<Profile restaurants={restaurants} />} />
		</Routes>
	)
}
