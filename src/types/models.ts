export type DishType = {
	id: number
	title: string
	description: string
	image: string
	isHighlight: boolean
	topButton?: string
	rating?: number | undefined
}
