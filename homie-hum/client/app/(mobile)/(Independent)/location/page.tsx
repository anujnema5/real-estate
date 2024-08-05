import HeadingWrapper from '@/components/mobile/Layout/Providers/heading-wrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DEFAULT_PROPERTY_SEARCH_HEADING } from '@/utils/constants'
import { ChevronRightIcon, Locate, LocateFixed, Search } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <HeadingWrapper heading='Search Location' back>
            <div className="w-full h-full">
                <div className="relative">
                    <Input placeholder={DEFAULT_PROPERTY_SEARCH_HEADING} className='py-6' />
                    <Button variant={'ghost'} className='absolute right-0 top-1.5'>
                        <Search className='w-5 h-5 text-primary' />
                    </Button>
                </div>

                <div className="w-full py-5 flex items-center border-b text-primary justify-between">
                    <div className="flex gap-2">
                        <LocateFixed />
                        <span className='font-medium'>Use current location</span>
                    </div>

                    <ChevronRightIcon />
                </div>
            </div>
        </HeadingWrapper>
    )
}

export default page