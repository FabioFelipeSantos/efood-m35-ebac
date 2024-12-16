import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: PaymentInfo = {
	cardName: "",
	cardNumber: "",
	cardVerificationNumber: 0,
	expiresMonth: 0,
	expiresYear: 0,
}

const paymentSlice = createSlice({
	name: "payment",
	initialState,
	reducers: {
		addPaymentInfos: (state, action: PayloadAction<PaymentInfo>) => {
			const { cardName, cardNumber, cardVerificationNumber, expiresMonth, expiresYear } = action.payload

			state.cardName = cardName
			state.cardNumber = cardNumber
			state.cardVerificationNumber = cardVerificationNumber
			state.expiresMonth = expiresMonth
			state.expiresYear = expiresYear
		},
		clearPaymentInfos: state => {
			state.cardName = ""
			state.cardNumber = ""
			state.cardVerificationNumber = 0
			state.expiresMonth = 0
			state.expiresYear = 0
		},
	},
	selectors: {
		selectAllPaymentInfos: state => state,
		selectValidityOfPayment: state => {
			let paymentValidity = true

			for (const value of Object.values(state)) {
				if (value === "") {
					return (paymentValidity = false)
				}
			}

			return paymentValidity
		},
	},
})

export const { addPaymentInfos, clearPaymentInfos } = paymentSlice.actions
export const { selectAllPaymentInfos, selectValidityOfPayment } = paymentSlice.selectors

export default paymentSlice.reducer
