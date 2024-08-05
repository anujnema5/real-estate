import React from 'react'
import '@/utils/custom-prototypes'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"


const UserAvatar = (
    { firstName, lastName, alt="avatar", imgSrc, className, fallBackClassName }:
        { firstName: string, lastName: string, alt?: string, imgSrc: string, className?: string, fallBackClassName?: string }) => {

    return (
        <Avatar className={className}>
            <AvatarImage src={imgSrc} alt={alt}/>
            <AvatarFallback className={fallBackClassName}>
                {firstName?.firstLetterCapital().charAt(0) + lastName?.firstLetterCapital().charAt(0)}</AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar