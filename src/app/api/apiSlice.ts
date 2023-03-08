import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mercadolibre.com",
    credentials: "include",
    prepareHeaders: (headers, api ) => {
      const token = api.getState()
      console.log(token)
console.log('asdasd')
      if (token) headers.set("Authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
