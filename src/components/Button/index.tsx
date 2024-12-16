import { ButtonStyle } from "./styles"

type Props = {
	text: string
	textColor: "light" | "dark"
	isNonClickable?: boolean
	onClick?: () => void
	type?: "submit" | "button"
}

export default function Button({
	type = "button",
	text,
	textColor,
	isNonClickable = false,
	onClick = () => {},
}: Props) {
	return (
		<ButtonStyle type={type} isNonClickable={isNonClickable} color={textColor} onClick={onClick}>
			{text}
		</ButtonStyle>
	)
}
