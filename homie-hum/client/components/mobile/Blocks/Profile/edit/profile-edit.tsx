"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, useTransition } from "react"
import { PhoneInput } from "@/components/ui/phone-input"
import { DatePicker } from "@/components/ui/date-input"
import { FilePenLine } from "lucide-react"
import { editprofileSchema, editprofileSchemaType } from "@/schema"
import useEditProfile from "@/hooks/useEditProfile"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { useRouter } from "next/navigation"

const ProfileEdit = () => {
    const [edit, setEdit] = useState(true);
    const [isPending, startTransition] = useTransition();
    const { editProfile } = useEditProfile()
    const router = useRouter();

    const user = useSelector((state: RootState) => state.auth.user);

    const form = useForm<editprofileSchemaType>({
        resolver: zodResolver(editprofileSchema),
        defaultValues: {
            username: user.username || "",
            dateOfBirth: new Date(user.dateOfBirth) || "",
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            phoneNumber: user.phoneNumber || ""
        },
    })

    function onSubmit(values: editprofileSchemaType) {
        const formattedDate = new Date(values?.dateOfBirth).toISOString() as any;

        const body = {
            dateOfBirth: formattedDate,
            ...values
        }

        startTransition(async () => {
            await editProfile(body);
        })

        console.log(body)
    }

    return (
        <div className="w-full">
            <div className="flex justify-end w-full cursor-pointer" onClick={() => setEdit((prev) => !prev)}>
                <FilePenLine />
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-full">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="mt-7">
                                <FormLabel>Firstname</FormLabel>
                                <FormControl>
                                    <Input placeholder="Firstname" disabled={edit} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="mt-7">
                                <FormLabel>Lastname</FormLabel>
                                <FormControl>
                                    <Input placeholder="Lastname" disabled={edit} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="mt-7">
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Username" disabled={edit} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile No.</FormLabel>
                                <FormControl>
                                    <PhoneInput disabled={edit} {...field} defaultCountry="IN" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <DatePicker disabled={edit} onSelect={field.onChange} selected={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex justify-between gap-3 pt-5">
                        <Button type="submit" disabled={edit || isPending} className="w-full">Submit</Button>
                    </div>
                </form>
            </Form>
            <Button variant={'outline'} onClick={() => router.back()} className="w-full my-3.5">Cancel</Button>
        </div>
    )
}

export default ProfileEdit
