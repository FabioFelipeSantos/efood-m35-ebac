import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
	cartItems,
	closeCart,
	numberOfItemsOnCart,
	removeItemOfCart,
	totalCostOfCart,
} from "../../store/reducers/cartSlice"
import * as S from "./styles"
import trash from "../../assets/trash.png"
import { colors, Title } from "../../styles"
import changeCurrency from "../../utils/changeCurrency"
import Button from "../Button"

export default function Cart() {
	const cartDishes = useAppSelector(state => cartItems(state))
	const dispatch = useAppDispatch()
	const totalPriceOfTheCart = useAppSelector(state => totalCostOfCart(state))
	const totalItemsOnCart = useAppSelector(state => numberOfItemsOnCart(state))

	return (
		<S.CartStyle>
			<S.CartOverlay onClick={() => dispatch(closeCart())}></S.CartOverlay>
			<S.CartContainer>
				{totalItemsOnCart > 0 ? (
					<>
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
									<button onClick={() => dispatch(removeItemOfCart(dish.id))}>
										<img src={trash} alt="Botao para excluir este item do carrinho" />
									</button>
								</S.CartItem>
							))}
						</S.CartItemsList>

						<S.CartInfos>
							<p>
								Valor total <span>{changeCurrency(totalPriceOfTheCart)}</span>
							</p>

							<Button text="Continuar com a entrega" textColor="dark" />
						</S.CartInfos>
					</>
				) : (
					<S.EmptyCarInfo fontSize={18} color={colors.mainLight}>
						Carrinho Vazio!
					</S.EmptyCarInfo>
				)}
			</S.CartContainer>
		</S.CartStyle>
	)
}
