import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoints } from "../../utils/endpoints";

// Define the types for your API slice
interface ApiResponse {
  // Define the expected structure of the response if applicable
  // For example:
  data: any;
}

const baseQuery = fetchBaseQuery({ baseUrl: endpoints.baseUrl });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["User", "Blog", "Policy"],
  endpoints: (builder) => ({}),
});

export type ApiSlice = typeof apiSlice;
