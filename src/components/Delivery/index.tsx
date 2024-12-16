import { Formik, Form, useField, FormikHelpers } from "formik"
import * as Yup from "yup"
import InputMask from "react-input-mask"

import { SidebarInputContainer } from "../../styles"

import SideBar from "../Sidebar"
import Button from "../Button"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectAllDeliveryInfos, updateAllDeliveryInfos } from "../../store/reducers/deliverySlice"

type TextInputProps = {
	label: string
	id: string
	name: string
	type?: string
	placeholder?: string
}

const TextInput = ({ label, ...props }: TextInputProps) => {
	const [field, meta] = useField<string>(props)

	function inputRender() {
		if (field.name === "address.cep") {
			return (
				<InputMask
					mask="99.999-999"
					maskChar={null}
					className={meta.touched && meta.error ? "is-error" : ""}
					{...field}
					{...props}
				/>
			)
		}
		if (field.name === "address.number") {
			return (
				<InputMask
					mask="9999999999"
					maskChar={null}
					className={meta.touched && meta.error ? "is-error" : ""}
					{...field}
					{...props}
				/>
			)
		}

		return <input className={meta.touched && meta.error ? "is-error" : ""} {...field} {...props} />
	}

	return (
		<SidebarInputContainer>
			<label htmlFor={props.name}>{label}</label>
			{inputRender()}
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</SidebarInputContainer>
	)
}

type Props = {
	handleGoBackToCart: () => void
	handleGoPayment: () => void
}

export default function Delivery({ handleGoBackToCart, handleGoPayment }: Props) {
	const initialValues = useAppSelector(state => selectAllDeliveryInfos(state))

	const dispatch = useAppDispatch()

	const validationSchema = () =>
		Yup.object({
			fullName: Yup.string()
				.required("Digite um nome válido")
				.min(2, "O nome deve ter pelo menos 2 letras.")
				.matches(/\s*(.+)\s(.{1,})/i, "Entre com pelo menos um nome e um sobrenome"),
			address: Yup.object({
				cep: Yup.string().required("Digite um CEP válido"),
				street: Yup.string()
					.required("Digite o nome do seu logradouro")
					.min(2, "O logradouro deve ter mais de 2 letras"),
				city: Yup.string()
					.required("Digite a sua cidade")
					.min(2, "A cidade deve ter mais de dois dígitos"),
				number: Yup.number()
					.required("Digite o número da sua residência")
					.min(1, "O número deve ser maior ou igual a 1"),
				moreInfo: Yup.string().min(2, "As informações adicionais devem ter mais de duas letras"),
			}),
		})

	const handleFormSubmitting = (values: DeliveryInfo, { setSubmitting }: FormikHelpers<DeliveryInfo>) => {
		dispatch(updateAllDeliveryInfos(values))
		setSubmitting(false)
		handleGoPayment()
	}

	return (
		<SideBar sidebarTitle="Entrega">
			<>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleFormSubmitting}>
					<Form>
						<TextInput
							label="Quem irá receber?"
							id="fullName"
							name="fullName"
							type="text"
							placeholder="Digite seu nome aqui"
						/>

						<TextInput
							label="Endereço"
							id="address.street"
							name="address.street"
							type="text"
							placeholder="Nome do logradouro"
						/>

						<TextInput
							label="Cidade"
							id="address.city"
							name="address.city"
							type="text"
							placeholder="Cidade"
						/>

						<TextInput
							label="CEP"
							id="address.cep"
							name="address.cep"
							type="text"
							placeholder="CEP"
						/>

						<TextInput
							label="Número"
							id="address.number"
							name="address.number"
							type="text"
							placeholder="Número da residência"
						/>

						<TextInput
							label="Complemento (opcional)"
							id="address.moreInfo"
							name="address.moreInfo"
							type="text"
							placeholder="Número ap, ponto de referência, ..."
						/>

						<div style={{ marginTop: "24px" }}>
							<Button type="submit" text="Continuar com o pagamento" textColor="dark" />
						</div>
					</Form>
				</Formik>

				<div style={{ marginTop: "8px" }}>
					<Button
						type="button"
						text="Voltar para o carrinho"
						textColor="dark"
						onClick={handleGoBackToCart}
					/>
				</div>
			</>
		</SideBar>
	)
}
