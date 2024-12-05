import { ButtonStyle } from "./styles"

type Props = {
	text: string
	textColor: "light" | "dark"
	isNonClickable?: boolean
	onClick?: () => void
}

export default function Button({ text, textColor, isNonClickable = false, onClick = () => {} }: Props) {
	return (
		<ButtonStyle isNonClickable={isNonClickable} color={textColor} onClick={onClick}>
			{text}
		</ButtonStyle>
	)
}
