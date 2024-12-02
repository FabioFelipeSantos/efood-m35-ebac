import { useNavigate } from "react-router-dom"
import { ButtonStyle } from "./styles"

type Props = {
	text: string
	textColor: "light" | "dark"
}

export default function Button({ text, textColor }: Props) {
	const navigate = useNavigate()

	return (
		<ButtonStyle
			onClick={() => navigate("/profile")}
			color={textColor}>
			{text}
		</ButtonStyle>
	)
}
