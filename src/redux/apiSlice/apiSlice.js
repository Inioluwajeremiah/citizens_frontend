import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoints } from "../../utils/endpoints";

const baseQuery = fetchBaseQuery({ baseUrl: endpoints.baseUrl });
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Blog", "Policies"],
  endpoints: (builder) => ({}),
});
