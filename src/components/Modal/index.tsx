import Button from "../Button"

import close from "../../assets/close1.png"
import * as S from "./styles"
import { Title } from "../../styles"
import { Menu } from "../../types/models"
import changeCurrency from "../../utils/changeCurrency"

type Props = {
	dish: Menu
	handlingClose: () => void
}

export default function Modal({ dish, handlingClose }: Props) {
	return (
		<>
			<S.ModalContainer onClick={handlingClose}>
				<S.ModalContent className="container">
					<S.ModalCloseButton onClick={handlingClose}>
						<img src={close} alt="Botão para fechar o modal" />
					</S.ModalCloseButton>

					<S.ModalInfo>
						<img src={dish.foto} alt="" />

						<S.ModalInfoDetails>
							<Title color="#ffffff" fontSize={18}>
								{dish.nome}
							</Title>

							<p>{dish.descricao}</p>

							<p>Serve: de {dish.porcao}</p>

							<Button
								text={`Adicionar ao carrinho - ${changeCurrency(dish.preco)}`}
								textColor="dark"
							/>
						</S.ModalInfoDetails>
					</S.ModalInfo>
				</S.ModalContent>
			</S.ModalContainer>
			<S.ModalOverLay></S.ModalOverLay>
		</>
	)
}
