import SideBar from "../Sidebar"
import Button from "../Button"
import { colors, Title } from "../../styles"
import * as S from "./styles"
import trash from "../../assets/trash.png"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
	cartItems,
	numberOfItemsOnCart,
	removeItemOfCart,
	totalCostOfCart,
} from "../../store/reducers/cartSlice"

import changeCurrency from "../../utils/changeCurrency"

type Props = {
	handleCartOverlayClick: () => void
	handleGoDelivery: () => void
}

export default function Cart({ handleCartOverlayClick, handleGoDelivery }: Props) {
	const cartDishes = useAppSelector(state => cartItems(state))
	const dispatch = useAppDispatch()
	const totalPriceOfTheCart = useAppSelector(state => totalCostOfCart(state))
	const totalItemsOnCart = useAppSelector(state => numberOfItemsOnCart(state))

	return (
		<SideBar
			sidebarTitle={totalItemsOnCart === 0 ? "O carrinho está vazio" : ""}
			handleOverlayClick={handleCartOverlayClick}>
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
						<Button text="Continuar com a entrega" textColor="dark" onClick={handleGoDelivery} />
					</S.CartInfos>
				</>
			) : (
				<></>
			)}
		</SideBar>
	)
}
