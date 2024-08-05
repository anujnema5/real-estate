import { ChevronRightIcon } from '@radix-ui/react-icons'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const UserDirectoryCard = ({ title, Icon, href }: { title: string, Icon: any, href: string }) => {
    return (
        <Link href={href} className='w-full cursor-pointer'>
            <div className="flex items-center justify-between gap-3 w-full border py-3 bg-gray-100/50 rounded-lg pl-3 pr-3">
                <div className="flex items-center gap-3">
                    <Icon className="w-10 h-10 text-primary bg-primary/10 p-2 rounded-full" />
                    {title}
                </div>

                <ChevronRightIcon />
            </div>
        </Link>
    )
}

export default UserDirectoryCard