import styled from "styled-components"

import { colors } from "../../styles"

type CardStyleProps = {
	theme: string
}

export const ImageContainer = styled.div`
	width: 100%;
	height: 216px;

	top: 0;
	left: 0;

	img {
		width: 100%;
		height: 100%;
	}
`

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const CardContainer = styled.div<CardStyleProps>`
	width: 100%;
	max-width: 472px;
	padding: 8px;

	display: flex;
	flex-direction: column;

	position: ${props => (props.theme === "light" ? "relative" : "initial")};

	background-color: ${props => (props.theme === "light" ? "#ffffff" : colors.secondaryLight)};
	border: 1px solid ${props => (props.theme === "light" ? colors.secondaryLight : colors.mainLight)};

	${ImageContainer} {
		height: ${props => (props.theme === "light" ? "216px" : "168px")};
		position: ${props => (props.theme === "light" ? "absolute" : "initial")};
	}

	p {
		margin-bottom: ${props => (props.theme === "light" ? "16px" : "8px")};

		color: ${props => (props.theme === "light" ? colors.secondaryLight : colors.mainLight)};
	}

	${TitleContainer} {
		margin: ${props => (props.theme === "light" ? "216px 0 16px" : "8px 0")};
	}
`

export const TopButtonsContainer = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;
`

export const RatingContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	img {
		width: 21px;
		height: 21px;
		display: inline-block;
		margin-left: 8px;
	}
`
