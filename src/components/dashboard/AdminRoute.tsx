import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { decryptWithRSA } from "../../utils/subtlecrypto";
import { UserDataProps } from "../interfaces/UserInterface";

const AdminRoute = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserDataProps>({});

  const decryptData = async () => {
    const decryptedText = await decryptWithRSA(
      import.meta.env.VITE_PRIVATE_KEY,
      userInfo
    );
    try {
      const parsedData =
        typeof decryptedText === "object"
          ? decryptedText
          : JSON.parse(decryptedText || "");
      setUserData(parsedData);
    } catch (error) {
      console.error("Failed to parse decrypted text:", error);
    }
  };

  useEffect(() => {
    decryptData();
  }, [userInfo]);

  return userData?.role !== "admin" ? <Outlet /> : <Navigate to="/" replace />;
};

export default AdminRoute;
