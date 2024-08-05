import HeadingWrapper from '@/components/mobile/Layout/Providers/heading-wrapper'
import React from 'react'
import ViewProfile from './view-profile'

const page = () => {
  return (
    <HeadingWrapper heading='Profile View' back>
        <ViewProfile/>
    </HeadingWrapper>
  )
}

export default page