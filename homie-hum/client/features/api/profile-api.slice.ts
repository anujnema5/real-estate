import apiSlice from "@/redux/api/api-slice";

const profileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        editUser: builder.mutation({
            query: (credentials) => {
                return {
                    url: '/user',
                    method: 'PATCH',
                    body: { ...credentials },
                    providesTags: ['user']
                }
            }
        })
    })
})

export const { useEditUserMutation } = profileApi