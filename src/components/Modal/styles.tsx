import styled from "styled-components"
import { colors, Title } from "../../styles"
import { ButtonStyle } from "../Button/styles"

export const ModalContainer = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	animation: modalOpen 0.4s linear 1;

	@keyframes modalOpen {
		from {
			opacity: 0;
			transform: scale(0);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}
`

export const ModalContent = styled.div`
	padding: 32px;

	position: relative;

	background-color: ${colors.secondaryLight};
	color: #fff;
`

export const ModalCloseButton = styled.div`
	width: 16px;
	aspect-ratio: 1;

	position: absolute;
	top: 8px;
	right: 8px;

	transition: all 0.2s ease-in-out;

	img {
		width: 100%;
	}

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
`

export const ModalInfo = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	column-gap: 24px;

	img {
		width: 280px;
		aspect-ratio: 1;
		object-fit: cover;
	}
`

export const ModalInfoDetails = styled.div`
	height: 100%;
	width: 100%;

	${Title} {
		margin-bottom: 16px;
	}

	p:not(:last-of-type) {
		margin-bottom: 24px;
	}

	p:last-of-type {
		margin-bottom: 16px;
	}

	${ButtonStyle} {
		max-width: 218px;
	}
`

export const ModalOverLay = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #000000cc;
	z-index: 0;
`
