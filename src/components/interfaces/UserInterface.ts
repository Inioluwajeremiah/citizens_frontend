export interface UserDataProps {
  success?: string;
  _id?: string;
  username?: string;
  email?: string;
  role?: "participant" | "admin" | "moderator"; // Add any other possible roles here
}
