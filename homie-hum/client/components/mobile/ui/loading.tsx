import { Icons } from '@/components/icons'
import React from 'react'

const Loading = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Icons.spinner className='animate-spin w-10 h-10 text-primary' />
        </div>
    )
}

export default Loading