import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://fake-api-tau.vercel.app/api/efood",
	}),
	endpoints: builder => ({
		getRestaurants: builder.query<RestaurantType[], void>({
			query: () => "restaurantes",
		}),
		sendOrderToCheckout: builder.mutation<{ orderId: string }, CheckoutInformation>({
			query: body => ({
				url: "/checkout",
				method: "POST",
				body,
			}),
		}),
	}),
})

export const { useGetRestaurantsQuery, useSendOrderToCheckoutMutation } = api
export default api
