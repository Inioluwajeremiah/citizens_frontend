import {
  Comment,
  GetCommentsResponse,
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
    getPolicies: builder.query<GetPolicyResponse, PaginationParams>({
      query: ({ page, limit, search, category }) => ({
        url: `${endpoints.policyUrl}`,
        params: { page, limit, search, category },
      }),
      transformResponse: (response: GetPolicyResponse): GetPolicyResponse => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          // Sort the data array within the response, not the entire response.
          const sortedData = [...response.data].sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          );

          // Return a new GetPolicyResponse object with the sorted data.
          return {
            ...response,
            data: sortedData,
          };
        }

        // Handle the case where response.data is undefined or empty.
        return {
          success: false, // Or whatever default values are appropriate
          data: [],
          pagination: {
            total: 0,
            page: null,
            limit: 0,
            totalPages: 0,
            hasNextPage: false,
          },
        };
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
          return response.data?.sort(
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

    postComment: builder.mutation({
      query: (data) => ({
        url: `${endpoints.policyUrl}/comment`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Policy"],
    }),
    // id is policyId
    getCommentsOnPolicy: builder.query<Comment[], PaginationParams>({
      // query: ({ id, page, limit, search, category, createdAt }) => ({
      //   url: `${endpoints.policyUrl}/comment/${id}`,
      //   params: { page, limit, search, category, createdAt },
      // }),
      query: (body) => ({
        url: `${endpoints.policyUrl}/comment/${body.id}`,
        params: { ...body },
      }),
      transformResponse: (response: GetCommentsResponse): Comment[] => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          return response.data.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }

        return [];
      },
      providesTags: ["Comment"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
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
  usePostCommentMutation,
  useGetCommentsOnPolicyQuery,
  useDeletePolicyMutation,
} = policyApiSlice;
