import { RootState } from "./store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.mercadolibre.com",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token

      if (token) headers.set("Authorization", `Bearer ${token}`)

      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
