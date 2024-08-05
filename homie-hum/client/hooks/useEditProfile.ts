import { useEditUserMutation } from "@/features/api/profile-api.slice";
import { setUser } from "@/features/auth/auth-slice";
import { editprofileSchema, editprofileSchemaType } from "@/schema";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { z } from "zod";

const useEditProfile = () => {
    const [editUser, { data, isError, isLoading, error, isSuccess }] = useEditUserMutation();
    const dispatch = useDispatch();

    const editProfile = async (values: editprofileSchemaType) => {
        try {
            const editProfileRes = await editUser(values).unwrap();
            
            if (editProfileRes.statusCode === 200) {
                console.log(editProfileRes.data)
                dispatch(setUser(editProfileRes.data))
                toast.success(editProfileRes.message)
            } 
            
            else {
                toast.success(editProfileRes.message)
            }

        } catch (error: any) {
            if (error.data) {
                toast.error(error.data.message)
            } else {
                toast.error('Something went wrong')
            }
        }

    }

    return { editProfile }
}

export default useEditProfile