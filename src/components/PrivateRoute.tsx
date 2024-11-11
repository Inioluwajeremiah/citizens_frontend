import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import { decryptWithRSA } from "../utils/subtlecrypto";
import { UserDataProps } from "./interfaces/UserInterface";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  const decryptData = async () => {
    const decryptedText = await decryptWithRSA(
      import.meta.env.VITE_PRIVATE_KEY,
      userInfo
    );
    console.log("private riute decryptedText ===> ", decryptedText);
    try {
      const parsedData =
        typeof decryptedText === "object"
          ? decryptedText
          : JSON.parse(decryptedText || "");
      // userData?._id ? <Outlet /> : <Navigate to="/" replace />;Z
      console.log("private riute decryptedText parsed data ===> ", parsedData);
      setUserData(parsedData);
      return userData?._id ? <Outlet /> : <Navigate to="/" replace />;
    } catch (error) {
      console.error("Failed to parse decrypted text:", error);
      // setLoading(false);
    }
  };

  console.log("userData?._id ==> ", userData);

  useEffect(() => {
    if (userInfo) {
      decryptData();
    } else {
      // setLoading(false);
    }
  }, [userInfo]);

  return userInfo.length === 344 ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
