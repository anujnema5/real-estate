'use client'
import { logout } from '@/features/auth/auth-slice';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(logout())
        router.push('/')
    }, [])

    return (
        <div></div>
    )
}

export default page