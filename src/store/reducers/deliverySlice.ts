import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: DeliveryInfo = {
	fullName: "Fábio Santos",
	address: { cep: "75800104", city: "Jataí", number: 666, street: "Rua 22", moreInfo: "" },
}

const deliverySlice = createSlice({
	name: "delivery",
	initialState,
	reducers: {
		updateAllDeliveryInfos: (state, action: PayloadAction<DeliveryInfo>) => {
			const { fullName, address } = action.payload

			state.fullName = fullName
			state.address = address
		},
		clearDeliveryInfos: state => {
			state.fullName = ""
			state.address = { cep: "", city: "", number: 0, street: "", moreInfo: "" }
		},
	},
	selectors: {
		selectAllDeliveryInfos: state => state,
		selectDeliveryValidity: state => {
			const { fullName, address } = state

			let addressValidity = true

			for (const [key, value] of Object.entries(address)) {
				if (key !== "moreInfo" && value === "") {
					return (addressValidity = false)
				}
			}

			return fullName && addressValidity
		},
	},
})

export const { updateAllDeliveryInfos, clearDeliveryInfos } = deliverySlice.actions
export const { selectAllDeliveryInfos, selectDeliveryValidity } = deliverySlice.selectors

export default deliverySlice.reducer
