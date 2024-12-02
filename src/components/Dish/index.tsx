import { colors, Title } from "../../styles"
import Button from "../Button"
import * as S from "./styles"
import star from "../../assets/star.svg"

type Props = {
	title: string
	description: string
	image: string
	rating?: number | null
	topButton?: string
	isHighlight: boolean
	theme: "light" | "dark"
}

export default function Dish({
	title,
	description,
	rating = null,
	image,
	theme,
	topButton = "",
	isHighlight,
}: Props) {
	return (
		<S.CardContainer theme={theme}>
			<S.ImageContainer>
				<img
					src={image}
					alt="Foto de um dos pratos da casa"
				/>
			</S.ImageContainer>

			{topButton !== "" && (
				<S.TopButtonsContainer>
					{isHighlight && (
						<Button
							text="Destaque da semana"
							textColor={theme}
						/>
					)}
					<Button
						text={topButton}
						textColor={theme}
					/>
				</S.TopButtonsContainer>
			)}

			<S.TitleContainer>
				<Title
					fontSize={18}
					color={theme === "light" ? colors.secondaryLight : colors.mainLight}>
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

						<img
							src={star}
							alt="Estrela da avaliação"
						/>
					</S.RatingContainer>
				)}
			</S.TitleContainer>

			<p>{description}</p>
			<Button
				text={theme === "light" ? "Saiba mais" : "Adicionar ao Carrinho"}
				textColor={theme}
			/>
		</S.CardContainer>
	)
}
