import SideBar from "../Sidebar"
import Button from "../Button"
import { ConfirmParagraph } from "./styles"

type Props = {
	orderId: string
	handleFinishButtonClick: () => void
}

export default function Confirm({ orderId, handleFinishButtonClick }: Props) {
	return (
		<SideBar sidebarTitle={`Pedido realizado - ${orderId}`}>
			<>
				<ConfirmParagraph>
					Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve,
					será entregue no endereço fornecido.
				</ConfirmParagraph>
				<ConfirmParagraph>
					Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar
					cobranças extras.
				</ConfirmParagraph>
				<ConfirmParagraph>
					Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo
					assim sua segurança e bem-estar durante a refeição.
				</ConfirmParagraph>
				<ConfirmParagraph>
					Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
				</ConfirmParagraph>

				<div style={{ marginTop: "24px" }}>
					<Button text="Concluir" textColor="dark" onClick={handleFinishButtonClick} />
				</div>
			</>
		</SideBar>
	)
}
