import styled from "styled-components"

import { colors } from "../../styles"

type ButtonStyleProps = {
	color: "light" | "dark"
	isNonClickable: boolean
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
	width: ${props => (props.color === "light" ? "fit-content" : "100%")};
	padding: ${props => (props.color === "light" ? "8px 12px" : "4px 0")};

	display: inline-block;

	color: ${props => (props.color === "light" ? colors.mainLight : colors.secondaryLight)};
	background-color: ${props => (props.color !== "light" ? colors.mainLight : colors.secondaryLight)};
	border: none;

	font-size: 14px;
	font-weight: 700;
	line-height: 16px;
	text-align: center;

	${props =>
		!props.isNonClickable
			? `
                &:hover {
                    cursor: pointer;
                    filter:brightness(105%);
                }
                &:active {
                    filter: brightness(112%);
                }`
			: ""}
	&:active {
	}
`
