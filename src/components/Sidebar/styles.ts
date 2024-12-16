import styled from "styled-components"

import { colors, Title } from "../../styles"

export const Sidebar = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
`

export const SidebarOverlay = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000000cc;
	z-index: 1;
`

export const SidebarContainer = styled.aside`
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

	${Title} {
		text-align: left;
	}

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
