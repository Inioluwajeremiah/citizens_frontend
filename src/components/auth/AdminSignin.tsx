import { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { useSigninMutation } from "../../redux/apiSlice/usersApiSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { encryptWithRSA } from "../../utils/subtlecrypto";
import { setCredentials } from "../../redux/slices/authSlice";
import { RootState } from "../../redux/store";

interface UserDataProps {
  email: string;
  password: string;
}

const AdminSignin = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const location = useLocation();
  const [userData, setUserData] = useState<UserDataProps>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const [signin, { isLoading }] = useSigninMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleLogin = async () => {
    try {
      const response = await signin({ ...userData });
      if (response.data) {
        // const encrypteddata = await encryptWithRSA(
        //   import.meta.env.VITE_PUBLIC_KEY,
        //   JSON.stringify(response.data)
        // );
        // dispatch(setCredentials(encrypteddata));
        // console.log("encrypteddata ===> ", encrypteddata);
        if (response.data.role !== "admin") {
          setErrorMessage("Unauthorized access");
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 1000);
        }

        dispatch(setCredentials(JSON.stringify(response.data)));

        navigate("/admin/home", { replace: true });
      }

      console.log("response  ===> ", response);
      if ("error" in response && response.error) {
        let errorMessage = "An unexpected error occurred";

        // Check if it's a FetchBaseQueryError (API error)
        if (
          "data" in response.error &&
          typeof response.error.data === "object"
        ) {
          const errorData = response.error.data as { message?: string };
          errorMessage = errorData.message || errorMessage;
        }

        // Check if it's a SerializedError (Redux internal error)
        if ("message" in response.error) {
          errorMessage = response.error.message || errorMessage;
        }

        setErrorMessage(errorMessage);
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      setErrorMessage(errorMessage);
    }
  };

  useEffect(() => {
    if (
      userInfo &&
      JSON.parse(userInfo)._id &&
      location.pathname === "/admin/signin"
    ) {
      navigate("/admin/home");
    }
  }, [userInfo, location]);
  return (
    <div
      id="signinmodal"
      className="relative w-full flex flex-col items-start justify-start bg-[#F2F8F8] p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll"
    >
      <div className="container mx-auto w-[80%] max-w-lg bg-white mt-28 rounded-lg shadow-lg p-8 ">
        {/* logo */}
        <div
          className={`flex flex-row items-center justify-center w-full mb-6 `}
        >
          <img src={logo} alt="YouthTrackIt logo" />
          <p className="text-base font-semibold text-blackColor ml-2 ">
            YouthTrackIt
          </p>
        </div>

        {/* form title */}
        <p className="w-full text-blackColor text-xl md:text-2xl lg:text-[28px] font-semibold text-center ">
          Admin Sign In
        </p>

        {errorMessage && (
          <p className="mt-2 text-sm text-red-500 italic">{errorMessage}</p>
        )}
        <label htmlFor="email" className="mt-4 md:mt-6 lg:mt-10 text-sm">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          placeholder="Email"
          className="mt-2 border w-full p-4 outline-none focus:border-primaryColor text-sm"
          onChange={handleFormInput}
        />
        <label htmlFor="password" className="mt-4 md:mt-6 lg:mt-10 text-sm ">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          placeholder="Password"
          className="mt-2 border w-full p-4 outline-none focus:border-primaryColor text-sm bg-none"
          onChange={handleFormInput}
        />

        {/* sign in button */}

        <button
          className="bg-[#0A6A69] w-full p-4 mt-10 md:mt-10 lg:mt-10"
          onClick={handleLogin}
        >
          <p className="text-sm text-white">
            {isLoading ? "Loading..." : "Sign in"}
          </p>
        </button>

        {/* forgot password */}
        <button className="mx-auto" onClick={handleLogin}>
          <p className="text-[#828DA9] text-[10px] md:text-xs py-4">
            Forgot Password?
          </p>
        </button>
        <div className="mt-2 flex flex-row  items-center gap-x-2">
          <p className="text-blackColor text-xs md:text-sm lg:text-base">
            Don't have an account?{" "}
          </p>
          <Link to={"/admin/signup"}>
            <p className="text-[#0A6A69] text-xs md:text-sm lg:text-base">
              Sign up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
