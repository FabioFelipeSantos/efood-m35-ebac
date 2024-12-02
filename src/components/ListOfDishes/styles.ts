import styled from "styled-components"

type ListDishesProps = {
	gridColumns?: number
}

export const ListDishesContainer = styled.ul<ListDishesProps>`
	margin: ${props => (props.gridColumns === 2 ? "80px" : "56px")} 0 120px;
	display: grid;
	grid-template-columns: repeat(${props => props.gridColumns}, 1fr);
	column-gap: ${props => (props.gridColumns === 2 ? "80px" : "32px")};
	row-gap: ${props => (props.gridColumns === 2 ? "48px" : "32px")};
`
