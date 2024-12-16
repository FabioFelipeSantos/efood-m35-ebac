import { useState, ReactNode, useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from "../../components/Header"
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import Cart from "../../components/Cart"
import Delivery from "../../components/Delivery"
import Payment from "../../components/Payment"
import { ListCardsContainer } from "../../styles"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { closeCart, isCartOpen, openCart, selectTotalAmountOfCart } from "../../store/reducers/cartSlice"

import changeCurrency from "../../utils/changeCurrency"
import capitalizeWords from "../../utils/capitalizeWord"
import Confirm from "../../components/Confirm"

type Props = {
	restaurants: RestaurantType[]
}

type OptionsToSidebar = "cart" | "delivery" | "payment" | "confirm" | null

export default function Profile({ restaurants }: Props) {
	const cartIsOpen = useAppSelector(state => isCartOpen(state))
	const dispatch = useAppDispatch()
	const cartTotalAmount = useAppSelector(state => selectTotalAmountOfCart(state))

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [dishToOpen, setDishToOpen] = useState<Menu>()
	const [whatSidebarIsToShow, setWhatSidebarIsToShow] = useState<OptionsToSidebar>(null)
	const [renderedComponent, setRenderedComponent] = useState<ReactNode>(<></>)
	const [orderId, setOrderId] = useState("")

	const { id } = useParams()
	const restaurant = restaurants.find(restaurant => restaurant.id === Number(id))

	if (!restaurant) {
		return <h1>Pratos não encontrados</h1>
	}

	const dishes = restaurant.cardapio

	function handlingClick(dish: Menu) {
		setDishToOpen(dish)
		setIsModalOpen(true)
	}

	function handleRenderingSidebar() {
		if (!whatSidebarIsToShow) setRenderedComponent(<></>)

		if (whatSidebarIsToShow === "cart") {
			setRenderedComponent(
				<Cart
					handleCartOverlayClick={() => {
						dispatch(closeCart())
						setWhatSidebarIsToShow(null)
					}}
					handleGoDelivery={() => {
						setWhatSidebarIsToShow("delivery")
						dispatch(closeCart())
					}}
				/>
			)
		}

		if (whatSidebarIsToShow === "delivery") {
			setRenderedComponent(
				<Delivery
					handleGoBackToCart={() => {
						setWhatSidebarIsToShow("cart")
						dispatch(openCart())
					}}
					handleGoPayment={() => {
						dispatch(closeCart())
						setWhatSidebarIsToShow("payment")
					}}
				/>
			)
		}

		if (whatSidebarIsToShow === "payment") {
			setRenderedComponent(
				<Payment
					paymentTitleSideBar={`Pagamento - Valor a pagar ${changeCurrency(cartTotalAmount)}`}
					handleGoBackDelivery={() => {
						setWhatSidebarIsToShow("delivery")
						// dispatch(closeCart())
					}}
					handleGoToConfirm={orderId => {
						setOrderId(orderId)
						// dispatch(closeCart())
						setWhatSidebarIsToShow("confirm")
					}}
				/>
			)
		}

		if (whatSidebarIsToShow === "confirm") {
			setRenderedComponent(
				<Confirm
					orderId={orderId}
					handleFinishButtonClick={() => {
						// dispatch(closeCart())
						setWhatSidebarIsToShow(null)
					}}
				/>
			)
		}
	}

	useEffect(() => {
		if (cartIsOpen && whatSidebarIsToShow !== "cart") {
			setWhatSidebarIsToShow("cart")
		}

		handleRenderingSidebar()
	}, [cartIsOpen, whatSidebarIsToShow])

	return (
		<>
			<Header
				page="profile"
				restaurantName={restaurant.titulo}
				typeRestaurant={capitalizeWords(restaurant.tipo)}
				backgroundImageUrl={restaurant.capa}
			/>

			<div className="container">
				<ListCardsContainer gridColumns={3}>
					{dishes.map(dish => (
						<Card
							key={dish.id}
							title={dish.nome}
							description={dish.descricao}
							image={dish.foto}
							theme="dark"
							onButtonClick={() => handlingClick(dish)}
						/>
					))}
				</ListCardsContainer>
			</div>

			{isModalOpen && <Modal dish={dishToOpen!} handlingClose={() => setIsModalOpen(false)} />}

			{renderedComponent}
		</>
	)
}
