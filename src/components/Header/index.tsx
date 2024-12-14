import logo from "../../assets/logo.png"
import { colors, Title } from "../../styles"
import * as S from "./styles"
import fundo from "../../assets/fundo.png"
import { useNavigate } from "react-router-dom"
import { closeCart, isCartOpen, numberOfItemsOnCart, openCart } from "../../store/reducers/cartSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

type Props = {
	page?: "home" | "profile"
	typeRestaurant?: string
	restaurantName?: string
	backgroundImageUrl?: string
}

export default function Header({
	page = "home",
	restaurantName = "",
	typeRestaurant = "",
	backgroundImageUrl = "",
}: Props) {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const numberItensInCart = useAppSelector(state => numberOfItemsOnCart(state))
	const cartOpened = useAppSelector(state => isCartOpen(state))

	function formatCartItemNumber() {
		if (numberItensInCart === 0) return "Não há items no carrinho"
		else if (numberItensInCart === 1) return `${numberItensInCart} produto no carrinho`
		else return `${numberItensInCart} produtos no carrinho`
	}

	function handleClickCart() {
		if (cartOpened) dispatch(closeCart())
		else dispatch(openCart())
	}
	return (
		<S.HeaderContainer page={page} style={{ backgroundImage: `url(${fundo})` }}>
			<div className="container">
				<S.NavContainer>
					{page === "home" ? (
						<S.ImageAlone>
							<img src={logo} alt="EFOOD Logo" />
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
							<S.CartInfo onClick={handleClickCart}>
								{formatCartItemNumber()}
								<span>🛒</span>
							</S.CartInfo>
						</>
					)}
				</S.NavContainer>

				{page === "home" && (
					<Title color={colors.secondaryLight} fontSize={36}>
						Viva experiências gastronômicas no conforto de sua casa
					</Title>
				)}
			</div>

			{page !== "home" && (
				<S.ProfileImage style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
					<div className="container">
						<S.TitleMoreLighter color="#ffffff" fontSize={32}>
							{typeRestaurant}
						</S.TitleMoreLighter>
						<Title as="h1" color="#ffffff" fontSize={32}>
							{restaurantName}
						</Title>
					</div>
				</S.ProfileImage>
			)}
		</S.HeaderContainer>
	)
}
