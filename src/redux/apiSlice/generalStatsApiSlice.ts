import { endpoints } from "../../utils/endpoints";
import { apiSlice } from "./apiSlice";

interface GeneralStatsResponse {
  status: string;
  message: string;
  data: {
    policies: number;
    blogs: number;
    users: number;
  };
}
interface EducationStatsParams {
  userId: string;
  policyId: string;
  category: string;
  surveyFields: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}

export const generalStatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createEducationStat: builder.mutation<void, EducationStatsParams>({
      query: (data) => ({
        url: `${endpoints.statsUrl}/education`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Stats"],
    }),
    getGeneralStats: builder.query<GeneralStatsResponse, void>({
      query: () => ({
        url: `${endpoints.statsUrl}`,
      }),
      providesTags: ["Stats"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
    }),
  }),
});

export const { useCreateEducationStatMutation, useGetGeneralStatsQuery } =
  generalStatsApiSlice;
