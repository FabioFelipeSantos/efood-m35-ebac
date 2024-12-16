import styled, { createGlobalStyle } from "styled-components"

export const colors = {
	bgColor: "#FFF8F2",
	mainLight: "#FFEBD9",
	secondaryLight: "#E66767",
	white: "#ffffff",
}

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }

    html {
        min-height: 100vh;
    }
    
    body {
        background-color: ${colors.bgColor};
        font-size: 14px;
        height: 100vh;
    }

    .container {
        max-width: 1024px;
        margin: 0 auto;
    }
`

type TitleStyleProps = {
	fontSize: number
	color: string
}

export const Title = styled.h2<TitleStyleProps>`
	margin: 0;
	color: ${props => props.color};
	font-size: ${props => `${props.fontSize}px`};
	font-weight: 900;
`

type ListDishesProps = {
	gridColumns?: number
}

export const ListCardsContainer = styled.ul<ListDishesProps>`
	margin: ${props => (props.gridColumns === 2 ? "80px" : "56px")} 0 120px;
	display: grid;
	grid-template-columns: repeat(${props => props.gridColumns}, 1fr);
	column-gap: ${props => (props.gridColumns === 2 ? "80px" : "32px")};
	row-gap: ${props => (props.gridColumns === 2 ? "48px" : "32px")};
`

export const SidebarInputContainer = styled.div`
	margin-top: 12px;
	&:first-of-type {
		margin-top: 16px;
	}

	label {
		margin-bottom: 8px;
		font-size: 14px;
		font-weight: bold;
		display: block;
	}

	input {
		width: 100%;
		padding: 8px;
		border: none;
		background-color: ${colors.mainLight};
		font-size: 14px;
		font-weight: 700;
		line-height: 16px;
		color: #4b4b4b;

		&:focus-within {
			border: 2px solid transparent;
			outline: hsl(240, 100%, 65%) solid 2px;
			outline-offset: 0;
		}

		&.is-error {
			border: 2px solid hsl(0, 100%, 40%);
			&:focus-within {
				border: 2px solid transparent;
				outline: hsl(0, 100%, 55%) solid 2px;
				outline-offset: 0;
			}
		}
	}

	div {
		margin-top: 4px;
		margin-left: 4px;
		font-size: 14px;
		color: hsl(0, 100%, 28%);
	}
`
