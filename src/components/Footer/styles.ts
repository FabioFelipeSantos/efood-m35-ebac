import styled from "styled-components"
import { colors } from "../../styles"

export const FooterContainer = styled.footer`
	height: 296px;
	padding: 40px 0;

	background-color: ${colors.mainLight};

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	}
`

export const FooterGraphicContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	img {
		margin-bottom: 32px;
	}
`

export const SocialsList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 8px;
`

export const FooterInfos = styled.p`
	width: 480px;

	color: ${colors.secondaryLight};
	font-size: 10px;
	text-align: center;
`
