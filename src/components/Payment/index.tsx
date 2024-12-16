import { Form, Formik, FormikHelpers, useField } from "formik"
import InputMask from "react-input-mask"
import * as Yup from "yup"

import SideBar from "../Sidebar"
import Button from "../Button"
import { SidebarInputContainer } from "../../styles"

import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { addPaymentInfos, clearPaymentInfos, selectAllPaymentInfos } from "../../store/reducers/paymentSlice"
import { cartItems, clearCart } from "../../store/reducers/cartSlice"
import { clearDeliveryInfos, selectAllDeliveryInfos } from "../../store/reducers/deliverySlice"
import { useSendOrderToCheckoutMutation } from "../../services/api"
import { useEffect } from "react"

type PaymentFormFields = {
	label: string
	name: string
	id: string
	type?: string
	placeholder?: string
}

const InputFields = ({ label, ...props }: PaymentFormFields) => {
	const [field, meta] = useField(props)

	function inputToRender() {
		if (field.name === "cardName") {
			return <input {...field} {...props} />
		}

		if (field.name === "cardNumber") {
			return <InputMask mask={"9999 9999 9999 9999"} maskChar={null} {...field} {...props} />
		}

		if (field.name === "cardVerificationNumber") {
			return <InputMask mask={"999"} maskChar={null} {...field} {...props} />
		}

		if (field.name === "expiresMonth") {
			return <InputMask mask={"99"} maskChar={null} {...field} {...props} />
		}

		if (field.name === "expiresYear") {
			return <InputMask mask={"99"} maskChar={null} {...field} {...props} />
		}
	}

	return (
		<SidebarInputContainer>
			<label htmlFor={props.name}>{label}</label>
			{inputToRender()}
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</SidebarInputContainer>
	)
}

type Props = {
	paymentTitleSideBar: string
	handleGoBackDelivery: () => void
	handleGoToConfirm: (orderId: string) => void
}

export default function Payment({ paymentTitleSideBar, handleGoBackDelivery, handleGoToConfirm }: Props) {
	const dispatch = useAppDispatch()
	const itemsInCart = useAppSelector(state => cartItems(state))
	const deliveryInfo = useAppSelector(state => selectAllDeliveryInfos(state))
	const [sendOrder, { data, isSuccess }] = useSendOrderToCheckoutMutation()

	const initialValues = useAppSelector(state => selectAllPaymentInfos(state))

	const validationSchema = () => {
		return Yup.object({
			cardName: Yup.string()
				.required("Digite um nome válido")
				.min(2, "O nome deve ter pelo menos 2 letras."),
			cardNumber: Yup.string()
				.required("Digite um número de cartão válido")
				.max(19, "Digite exatamente os 16 dígitos, sem espaços")
				.min(19, "Digite exatamente os 16 dígitos, sem espaços"),
			cardVerificationNumber: Yup.number()
				.required("Digite o código de segurança de três dígitos")
				.max(999, "Digite exatamente os 3 dígitos")
				.min(100, "Digite exatamente os 3 dígitos")
				.positive("Não coloque nenhum sinal"),
			expiresMonth: Yup.number()
				.required("Digite o mês de validade do cartão")
				.max(12, "Escolha um número que represente o número do mês de vencimento")
				.min(1, "Escolha um número que represente o número do mês de vencimento"),
			expiresYear: Yup.number()
				.required("Digite o ano de validade do cartão")
				.max(99, "Digite exatamente os 2 últimos dígitos do ano")
				.min(
					Number(new Date().getFullYear().toString().slice(2)),
					"O ano de vencimento tem que ser maior ou igual ao ano corrente"
				),
		})
	}

	useEffect(() => {
		if (isSuccess) {
			dispatch(clearCart())
			dispatch(clearDeliveryInfos())
			dispatch(clearPaymentInfos())
			handleGoToConfirm(data.orderId)
		}
	}, [data, isSuccess])

	function handleSubmitPaymentAndGoCheckout(
		values: PaymentInfo,
		{ setSubmitting }: FormikHelpers<PaymentInfo>
	) {
		console.log("Form com pagamento info salvado. Valores")
		dispatch(addPaymentInfos(values))

		const orderInfo: CheckoutInformation = {
			products: itemsInCart.map(item => ({ id: item.id, price: item.preco })),
			delivery: {
				receiver: deliveryInfo.fullName,
				address: {
					description: deliveryInfo.address.street,
					city: deliveryInfo.address.city,
					zipCode: deliveryInfo.address.cep,
					number: deliveryInfo.address.number,
					complement: deliveryInfo.address.moreInfo,
				},
			},
			payment: {
				card: {
					name: values.cardName,
					number: values.cardNumber,
					code: values.cardVerificationNumber,
					expires: {
						month: values.expiresMonth,
						year: values.expiresYear,
					},
				},
			},
		}

		sendOrder(orderInfo)

		setSubmitting(false)
	}

	return (
		<SideBar sidebarTitle={paymentTitleSideBar}>
			<>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmitPaymentAndGoCheckout}>
					<Form>
						<InputFields
							label="Nome no cartão"
							id="cardName"
							name="cardName"
							placeholder="Digite o nome como consta no seu cartão"
							type="text"
						/>
						<InputFields
							label="Número do cartão"
							id="cardNumber"
							name="cardNumber"
							placeholder="Digite apenas os dígitos do seu cartão"
							type="text"
						/>
						<InputFields
							label="CVV"
							id="cardVerificationNumber"
							name="cardVerificationNumber"
							placeholder="Digite os três números de segurança"
							type="text"
						/>
						<InputFields
							label="Mês de vencimento"
							id="expiresMonth"
							name="expiresMonth"
							placeholder="Digite apenas os dois números do mês de vencimento"
							type="text"
						/>
						<InputFields
							label="Ano de vencimento"
							id="expiresYear"
							name="expiresYear"
							placeholder="Digite apenas os dois números do mês de vencimento"
							type="text"
						/>
						<div style={{ marginTop: "24px" }}>
							<Button type="submit" text="Finalizar pagamento" textColor="dark" />
						</div>
					</Form>
				</Formik>
				<div style={{ marginTop: "8px" }}>
					<Button
						type="button"
						text="Voltar para a edição do endereço"
						textColor="dark"
						onClick={handleGoBackDelivery}
					/>
				</div>
			</>
		</SideBar>
	)
}
