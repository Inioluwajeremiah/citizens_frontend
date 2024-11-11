import { apiSlice } from "./apiSlice";

// Define types for the data
interface UserData {
  username: string;
  email: string;
  password: string;
}
interface LoginResponse {
  success: string;
  _id: string;
  username: string;
  email: string;
  role: "participant" | "admin" | "moderator"; // Add any other possible roles here
}

interface SigninData {
  email: string;
  password: string;
}

interface User {
  id: string;
  username: string;
  email: string;
}

interface UpdateUserData {
  userId: string;
  username?: string;
  email?: string;
  password?: string;
}

// Assuming USERS_URL is a constant, you should define it too
const USERS_URL = "/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<void, UserData>({
      query: (data) => ({
        url: `signup`,
        method: "POST",
        body: data,
      }),
    }),
    signin: builder.mutation<LoginResponse, SigninData>({
      query: (data) => ({
        url: `signin`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `logout`,
        method: "POST",
      }),
    }),
    getUser: builder.query<User, void>({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 10800,
    }),
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: `${USERS_URL}`,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 10800,
    }),
    deleteUser: builder.mutation<void, string>({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation<void, UpdateUserData>({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useSignupMutation,
  useSigninMutation,
  useLogoutMutation,
  useGetUserQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApiSlice;
