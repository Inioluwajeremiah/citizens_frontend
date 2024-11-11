import { apiSlice } from "./apiSlice";

interface UploadFileResponse {
  message: string;
  imageUrl: string;
}

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadFile: builder.mutation<UploadFileResponse, FormData>({
      query: (data) => ({
        url: `upload`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useUploadFileMutation } = usersApiSlice;
