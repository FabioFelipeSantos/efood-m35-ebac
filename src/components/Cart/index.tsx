import { useAppSelector } from "../../store/hooks"
import { cartItems } from "../../store/reducers/cartSlice"
import * as S from "./styles"
import trash from "../../assets/trash.png"
import { colors, Title } from "../../styles"
import changeCurrency from "../../utils/changeCurrency"
import Button from "../Button"

export default function Cart() {
	const cartDishes = useAppSelector(state => cartItems(state))

	return (
		<S.CartStyle>
			<S.CartOverlay></S.CartOverlay>
			<S.CartContainer>
				<S.CartItemsList>
					{cartDishes.map(dish => (
						<S.CartItem key={dish.id}>
							<img src={dish.foto} alt="Foto do prato da casa no carrinho" />
							<div>
								<Title fontSize={18} color={colors.secondaryLight}>
									{dish.nome}
								</Title>
								<p>{changeCurrency(dish.preco)}</p>
							</div>
							<button>
								<img src={trash} alt="" />
							</button>
						</S.CartItem>
					))}
				</S.CartItemsList>

				<S.CartInfos>
					<p>
						Valor total <span>R$ 182,70</span>
					</p>

					<Button text="Continuar com a entrega" textColor="dark" />
				</S.CartInfos>
			</S.CartContainer>
		</S.CartStyle>
	)
}
