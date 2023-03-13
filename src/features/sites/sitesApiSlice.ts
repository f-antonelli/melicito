import { apiSlice } from "../../app/api/apiSlice";
import { ISite } from "../../interfaces/site.interface";

export const sitesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSites: builder.query({
      query: () => ({
        url: '/sites',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result, _, __) => {
        if (result) {
          return [
            { type: 'Site', id: 'LIST' },
            ...result?.map((id: string) => ({ type: 'Site', id })),
          ];
        } else return [{ type: 'Site', id: 'LIST' }];
      },
    })
  }),
});

export const { useGetSitesQuery } = sitesApiSlice


