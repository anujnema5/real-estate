'use client'
import { useBookingsQuery } from "@/features/api/bookings-api.slice"

export const useGetEntity = () => {
    const bookings = useBookingsQuery({})
    const getBookings = () => {
        const allBookings = bookings;

        return allBookings;
    }

    return { getBookings }
}