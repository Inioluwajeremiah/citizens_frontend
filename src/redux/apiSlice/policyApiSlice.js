import { endpoints } from "../../utils/endpoints";
import apiSlice from "./apiSlice";

export const policyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPolicy: builder.mutation({
      query: (data) => ({
        url: `${endpoints.policyUrl}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Policy"],
    }),

    getActivePolicies: builder.query({
      query: ({ page, itemsPerPage }) => ({
        url: `${endpoints.policyUrl}/active-policies`,
      }),
      transformResponse: (response) => {
        console.log("response transform ==>", response);
        if (response && response.policies) {
          // Sort the policies in descending order based on the endDate
          return response.policies.sort(
            (a, b) => new Date(a.endDate) - new Date(b.endDate)
          );
        }
        // If the response doesn't contain a policy, return an empty array
        return [];
      },
      providesTags: ["Policy"],
      //   cache data for 3 hrs
      keepUnusedDataFor: 10800,
    }),

    getPastPolicies: builder.query({
      query: ({ page, itemsPerPage }) => ({
        url: `${endpoints.policyUrl}/past-policies`,
      }),
      transformResponse: (response) => {
        console.log("response transform ==>", response);
        if (response && response.policies) {
          // Sort the policies in descending order based on the endDate
          return response.policies.sort(
            (a, b) => new Date(a.endDate) - new Date(b.endDate)
          );
        }
        // If the response doesn't contain a policy, return an empty array
        return [];
      },
      providesTags: ["Policy"],
      //   cache data for 3 hrs
      keepUnusedDataFor: 10800,
    }),

    getPolicy: builder.query({
      query: ({ id }) => ({
        url: `${endpoints.policyUrl}/${id}`,
      }),
      providesTags: ["Policy"],
      keepUnusedDataFor: 10800,
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
  useGetPastPoliciesQuery,
  useGetPolicyQuery,
  useEditPolicyMutation,
  useDeletePolicyMutation,
} = policyApiSlice;
