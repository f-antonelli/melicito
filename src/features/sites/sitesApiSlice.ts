import { apiSlice } from "../../app/api/apiSlice";

interface ISite {
    default_currency_id: string,
    id: string,
    name: string,
}

export const sitesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSites: builder.query<ISite, string>({
            query: () => ({
                url: '/sites',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            })
        })
    }),
});

export const { useGetSitesQuery} = sitesApiSlice


