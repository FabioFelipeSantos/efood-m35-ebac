import styled from "styled-components"
import { colors, Title } from "../../styles"

export const CartStyle = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`

export const CartOverlay = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000000cc;
	z-index: 1;
`

export const CartContainer = styled.aside`
	max-width: 360px;
	width: 100%;
	height: 100%;
	padding: 32px 8px;
	position: absolute;
	top: 0;
	right: 0;
	background-color: ${colors.secondaryLight};
	z-index: 1;
	color: ${colors.mainLight};
	animation: openCart 0.3s linear 1;

	@keyframes openCart {
		from {
			right: -360px;
			opacity: 0;
		}

		to {
			right: 0;
			opacity: 1;
		}
	}
`

export const CartItemsList = styled.ul`
	width: 100%;
	margin-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`

export const CartItem = styled.li`
	width: 100%;
	padding: 8px 8px 12px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;

	position: relative;

	background-color: ${colors.mainLight};
	color: ${colors.secondaryLight};

	& > img {
		margin-right: 8px;
		width: 80px;
		height: 80px;
		object-fit: cover;
	}

	${Title} {
		margin-bottom: 16px;
	}

	button {
		width: 16px;
		height: 16px;

		position: absolute;
		bottom: 8px;
		right: 8px;

		background-color: transparent;
		border: none;

		transition: all 0.2s ease-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.2);
		}
	}
`

export const CartInfos = styled.div`
	width: 100%;

	p {
		margin-bottom: 16px;
		font-size: 16px;
		font-weight: 700;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`

export const EmptyCarInfo = styled(Title)`
	text-align: center;
`
