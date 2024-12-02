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
