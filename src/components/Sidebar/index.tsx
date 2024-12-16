import { ReactElement } from "react"

import { colors, Title } from "../../styles"
import * as S from "./styles"

type Props = {
	sidebarTitle?: string
	children: ReactElement
	handleOverlayClick?: () => void
}

export default function SideBar({ sidebarTitle = "", handleOverlayClick = () => {}, children }: Props) {
	return (
		<S.Sidebar>
			<S.SidebarOverlay onClick={handleOverlayClick}></S.SidebarOverlay>
			<S.SidebarContainer>
				{sidebarTitle !== "" && (
					<Title fontSize={16} color={colors.mainLight}>
						{sidebarTitle}
					</Title>
				)}
				{children}
			</S.SidebarContainer>
		</S.Sidebar>
	)
}
