import styled from "styled-components"

import { colors, Title } from "../../styles"

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
