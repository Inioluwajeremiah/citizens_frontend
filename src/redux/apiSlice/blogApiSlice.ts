import {
  GetBlogData,
  GetBlogResponse,
  PaginationParams,
  BlogData,
} from "../../components/interfaces/BlogInterface";
import { endpoints } from "../../utils/endpoints";
import { apiSlice } from "./apiSlice";

export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation<void, BlogData>({
      query: (data) => ({
        url: `${endpoints.blogUrl}/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    getActiveBlogs: builder.query<GetBlogData[], PaginationParams>({
      query: ({ page, limit, search, category }) => ({
        url: `${endpoints.blogUrl}/active-blogs`,
        params: { page, limit, search, category },
      }),
      transformResponse: (response: GetBlogResponse): GetBlogData[] => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          return response.data.sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          );
        }

        return [];
      },
      providesTags: ["Blog"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
    }),

    getPastBlogs: builder.query<GetBlogData[], PaginationParams>({
      query: ({ page, limit, search, category }) => ({
        url: `${endpoints.blogUrl}/past-blogs`,
        params: { page, limit, search, category },
      }),
      transformResponse: (response: GetBlogResponse): GetBlogData[] => {
        console.log("response transform ==>", response);

        if (response && response.data) {
          return response.data.sort(
            (a, b) =>
              new Date(b.endTime).getTime() - new Date(a.endTime).getTime()
          );
        }
        return [];
      },
      providesTags: ["Blog"],
      keepUnusedDataFor: 10800, // Cache data for 3 hours
    }),

    getBlog: builder.query({
      query: ({ id }) => ({
        url: `${endpoints.blogUrl}/${id}`,
      }),
      providesTags: ["Blog"],
      keepUnusedDataFor: 10800,
    }),

    editBlog: builder.mutation({
      query: (data) => ({
        url: `${endpoints.blogUrl}editBlog/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Blog"],
    }),

    deleteBlog: builder.mutation({
      query: ({ id }) => ({
        url: `${endpoints.blogUrl}deleteBlog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetActiveBlogsQuery,
  useGetPastBlogsQuery,
  useGetBlogQuery,
  useEditBlogMutation,
  useDeleteBlogMutation,
} = blogApiSlice;
