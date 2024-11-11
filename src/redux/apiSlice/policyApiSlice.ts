import {
  GetPolicyData,
  GetPolicyResponse,
  PaginationParams,
  PolicyData,
} from "../../components/interfaces/PolicyInterface";
import { endpoints } from "../../utils/endpoints";
import { apiSlice } from "./apiSlice";

export const policyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPolicy: builder.mutation<void, PolicyData>({
      query: (data) => ({
        url: `${endpoints.policyUrl}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Policy"],
    }),
    getPolicies: builder.query<GetPolicyData[], PaginationParams>({
      query: ({ page, limit, search, category }) => ({
        url: `${endpoints.policyUrl}`,
        params: { page, limit, search, category },
      }),
      transformResponse: (response: GetPolicyResponse): GetPolicyData[] => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          return response.data.sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          );
        }

        return [];
      },
      providesTags: ["Policy"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
    }),
    getActivePolicies: builder.query<GetPolicyData[], PaginationParams>({
      query: ({ page, limit, search, category }) => ({
        url: `${endpoints.policyUrl}/active-policies`,
        params: { page, limit, search, category },
      }),
      transformResponse: (response: GetPolicyResponse): GetPolicyData[] => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          return response.data.sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          );
        }

        return [];
      },
      providesTags: ["Policy"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
    }),

    getPastPolicies: builder.query<GetPolicyData[], PaginationParams>({
      query: ({ page, limit, search, category }) => ({
        url: `${endpoints.policyUrl}/past-policies`,
        params: { page, limit, search, category },
      }),
      transformResponse: (response: GetPolicyResponse): GetPolicyData[] => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          return response.data.sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          );
        }
        return [];
      },
      providesTags: ["Policy"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
    }),

    getPolicy: builder.query({
      query: ({ id }) => ({
        url: `${endpoints.policyUrl}/${id}`,
      }),
      providesTags: ["Policy"],
      keepUnusedDataFor: 10800,
    }),

    updatePolicyViews: builder.mutation({
      query: (data) => ({
        url: `${endpoints.policyUrl}views`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Policy"],
    }),

    editPolicy: builder.mutation({
      query: (data) => ({
        url: `${endpoints.policyUrl}editPolicy/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Policy"],
    }),

    deletePolicy: builder.mutation({
      query: ({ id }) => ({
        url: `${endpoints.policyUrl}deletePolicy/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Policy"],
    }),
  }),
});

export const {
  useCreatePolicyMutation,
  useGetActivePoliciesQuery,
  useGetPoliciesQuery,
  useGetPastPoliciesQuery,
  useGetPolicyQuery,
  useUpdatePolicyViewsMutation,
  useEditPolicyMutation,
  useDeletePolicyMutation,
} = policyApiSlice;
