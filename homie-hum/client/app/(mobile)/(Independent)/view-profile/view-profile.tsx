'use client';

import ProfileEdit from "@/components/mobile/Blocks/Profile/edit/profile-edit";
import SecondayWrapper from "@/components/mobile/Layout/Providers/SecondayWrapper";
import UserAvatar from "@/components/mobile/ui/Avatar"
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import useGetAuth from "@/hooks/useGetAuth";
import { RootState } from "@/redux/store";

import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const ViewProfile = () => {
    const { isUserAuthenticated, user } = useGetAuth()
    const [hydration, setHydration] = useState(false);

    useEffect(() => {
        setHydration(true)
    }, [])

    if (!hydration) {
        return null;
    }
    return (
        <Card className="">
            <CardHeader className="flex items-center">
                <UserAvatar firstName={user?.firstName} lastName={user?.lastName} imgSrc="" className="w-32 h-32" fallBackClassName="text-4xl font-thin border-2 border-primary" />
            </CardHeader>
            <CardContent className="w-full flex gap-3">
                <ProfileEdit />
            </CardContent>
        </Card>
    )
}

export default ViewProfile