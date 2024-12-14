import styled from "styled-components"
import { colors, Title } from "../../styles"
import { Link } from "react-router-dom"

type HeaderProps = {
	page: "home" | "profile"
}

export const HeaderContainer = styled.header<HeaderProps>`
	height: ${props => (props.page === "home" ? "384px" : "calc(384px + 64px)")};
	padding: 40px 0;

	position: relative;

	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;

	.container {
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		text-align: center;
	}

	${Title} {
		max-width: 544px;
	}
`

export const ImageAlone = styled.div`
	width: 100%;
	height: 58px;
	display: inline-block;
`

export const NavContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	& > img {
		&:hover {
			cursor: pointer;
		}
	}
`

export const ProfileImage = styled.div`
	width: 100%;
	height: 280px;
	padding: 24px 0 32px;
	position: absolute;
	bottom: 0;
	left: 0;

	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;

	color: ${colors.white};

	.container {
		align-items: flex-start;
	}
`

export const TitleMoreLighter = styled(Title)`
	font-weight: 100;
`

export const LinkStyle = styled(Link)`
	width: 280px;

	color: ${colors.secondaryLight};
	font-weight: 900;
	font-size: 18px;
	text-align: left;
	text-decoration: none;

	&:hover {
		filter: brightness(90%);
	}
`

export const CartInfo = styled.p`
	width: 280px;

	color: ${colors.secondaryLight};
	font-size: 18px;
	font-weight: 900;
	/* text-align: right; */

	display: flex;
	align-items: center;
	justify-content: flex-end;

	span {
		margin-left: 4px;
		font-size: 28px;
	}

	&:hover {
		cursor: pointer;
	}
`
