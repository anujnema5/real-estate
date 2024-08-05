'use client'
import { DEFAULT_BROWSE_PAGE } from '@/app/routes'
import { Button } from '@/components/ui/button'
import { getNameFromPathName } from '@/utils/helper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NoDataFallBack = () => {
    const pathname = usePathname();
    const entity = getNameFromPathName(pathname);

    return (
        <div className="w-full flex flex-col gap-3 flex-grow h-full items-center justify-center bg-gray-50 rounded-xl">
            <span className='text-lg font-semibold'>{`No ${entity ? entity : "Data"} Found`}</span>
            <Link href={DEFAULT_BROWSE_PAGE}><Button className='rounded-full'>Browse More</Button></Link>
        </div>
    )
}

export default NoDataFallBack