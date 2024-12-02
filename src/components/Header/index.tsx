import logo from "../../assets/logo.png"
import { colors, Title } from "../../styles"
import * as S from "./styles"
import fundo from "../../assets/fundo.png"
import profileBg from "../../assets/profile_background.png"
import { useNavigate } from "react-router-dom"

type Props = {
	page?: "home" | "profile"
}

export default function Header({ page = "home" }: Props) {
	const navigate = useNavigate()

	return (
		<S.HeaderContainer
			page={page}
			style={{ backgroundImage: `url(${fundo})` }}>
			<div className="container">
				<S.NavContainer>
					{page === "home" ? (
						<S.ImageAlone>
							<img
								src={logo}
								alt="EFOOD Logo"
							/>
						</S.ImageAlone>
					) : (
						<>
							<S.LinkStyle to="/">Restaurantes</S.LinkStyle>
							<img
								onClick={() => navigate("/")}
								src={logo}
								alt="EFOOD Logo"
								title="Clique para voltar para a página anterior"
							/>
							<S.CartInfo>
								<span>0 </span>
								produto(s) no carrinho
							</S.CartInfo>
						</>
					)}
				</S.NavContainer>

				{page === "home" && (
					<Title
						color={colors.secondaryLight}
						fontSize={36}>
						Viva experiências gastronômicas no conforto de sua casa
					</Title>
				)}
			</div>

			{page !== "home" && (
				<S.ProfileImage style={{ backgroundImage: `url(${profileBg})` }}>
					<div className="container">
						<S.TitleMoreLighter
							color="#ffffff"
							fontSize={32}>
							Italiana
						</S.TitleMoreLighter>
						<Title
							as="h1"
							color="#ffffff"
							fontSize={32}>
							La Dolce Vita Trattoria
						</Title>
					</div>
				</S.ProfileImage>
			)}
		</S.HeaderContainer>
	)
}
