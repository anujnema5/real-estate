import apiSlice from "@/redux/api/api-slice";

const orderApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        bookings: builder.query({
            query: () => '/user/booking'
        })
    })
})

export const { useBookingsQuery } = orderApi