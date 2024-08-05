import HeadingWrapper from '@/components/mobile/Layout/Providers/heading-wrapper'
import React from 'react'
import Bookings from './bookings'

const page = () => {
  return (
    <HeadingWrapper back heading="Booking & Orders" className='h-screen'>
      <Bookings />
    </HeadingWrapper>
  )
}

export default page