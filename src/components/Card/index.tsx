import Button from "../Button"
import { colors, Title } from "../../styles"
import * as S from "./styles"
import star from "../../assets/star.svg"

type Props = {
	title: string
	description: string
	image: string
	rating?: number | null
	restaurantType?: string
	isHighlight?: boolean
	theme: "light" | "dark"
	onButtonClick: () => void
}

export default function Card({
	title,
	description,
	rating = null,
	image,
	theme,
	restaurantType = "",
	isHighlight = false,
	onButtonClick,
}: Props) {
	return (
		<S.CardContainer theme={theme}>
			<S.ImageContainer>
				<img src={image} alt="Foto de um dos pratos da casa" />
			</S.ImageContainer>

			{restaurantType !== "" && (
				<S.TopButtonsContainer>
					{isHighlight && <Button text="Destaque da semana" textColor={theme} isNonClickable />}
					<Button text={restaurantType} textColor={theme} onClick={onButtonClick} />
				</S.TopButtonsContainer>
			)}

			<S.TitleContainer>
				<Title fontSize={18} color={theme === "light" ? colors.secondaryLight : colors.mainLight}>
					{title}
				</Title>
				{rating && (
					<S.RatingContainer>
						<Title
							as="span"
							fontSize={18}
							color={theme === "light" ? colors.secondaryLight : colors.mainLight}>
							{rating}
						</Title>

						<img src={star} alt="Estrela da avaliação" />
					</S.RatingContainer>
				)}
			</S.TitleContainer>

			<p>{description}</p>
			<Button
				text={theme === "light" ? "Saiba mais" : "Adicionar ao Carrinho"}
				textColor={theme}
				onClick={onButtonClick}
			/>
		</S.CardContainer>
	)
}
