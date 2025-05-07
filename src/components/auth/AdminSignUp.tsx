import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { useSignupMutation } from "../../redux/apiSlice/usersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import SuccessAlert from "../SuccessAlert";

interface UserDataProps {
  username: string;
  email: string;
  password: string;
}

// REACT MAIN component
const AdminSignup = () => {
  const navigate = useNavigate();
  const [errorIndex, setErrorIndex] = useState(0);
  const [errorIndexMessage, setErrorIndexMessage] = useState("");
  const [userData, setUserData] = useState<UserDataProps>({
    username: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showSucessModal, setShowSucessModal] = useState(false);
  const [signup, { isLoading }] = useSignupMutation();
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  // const adminEmails = import.meta.env.VITE_ADMIN_EMAILS;

  const handleSignup = async () => {
    try {
      if (!userData.username) {
        setErrorIndex(1);
      } else if (!userData.email) {
        setErrorIndex(2);
        setErrorIndexMessage("Incorrect email!");
        // } else if (!adminEmails.includes(userData.email)) {
        //   setErrorIndex(2);
        //   setErrorIndexMessage("Unauthorized access!");
      } else if (!userData.password) {
        setErrorIndex(3);
      }
      const res = await signup({ ...userData, role: "admin" });
      if (res.data) {
        setShowSucessModal(true);
        setTimeout(() => {
          setShowSucessModal(false);
          navigate("/admin/signin", { replace: true });
        }, 3700);
      }
      console.log("response ===> ", res);
      if ("error" in res && res.error) {
        let errorMessage = "An unexpected error occurred";
        // Check if it's a FetchBaseQueryError (API error)
        if ("data" in res.error && typeof res.error.data === "object") {
          const errorData = res.error.data as { message?: string };
          errorMessage = errorData.message || errorMessage;
        }
        // Check if it's a SerializedError (Redux internal error)
        if ("message" in res.error) {
          errorMessage = res.error.message || errorMessage;
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

  return (
    <div
      id="signupModal"
      className="w-full flex flex-col items-start justify-start  mx-auto my-auto bg-[#F2F8F8] p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll"
    >
      {" "}
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
        {/* signup title */}
        <p className="w-full text-blackColor text-xl md:text-2xl lg:text-[28px] font-semibold text-center ">
          Admin Sign Up
        </p>
        {errorMessage && (
          <p className="mt-2 text-sm text-red-500 italic">{errorMessage}</p>
        )}
        <label htmlFor="username" className="text-sm mt-4 md:mt-6 lg:mt-10">
          Username
        </label>
        {errorIndex === 1 && errorIndexMessage !== "" && (
          <p className="mt-2 text-sm text-red-500">{errorIndexMessage}</p>
        )}
        <input
          type="text"
          name="username"
          value={userData.username}
          id="username"
          placeholder="Username"
          className={`mt-2 border w-full p-4 outline-none focus:border-primaryColor text-sm ${
            errorIndex === 1 && "border-red-500"
          }`}
          onChange={handleFormInput}
        />
        <label htmlFor="email" className="mt-4 md:mt-6 lg:mt-10 text-sm">
          Email
        </label>
        {errorIndex === 2 && errorIndexMessage !== "" && (
          <p className="mt-2 text-sm text-red-500">{errorIndexMessage}</p>
        )}
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          placeholder="Email"
          className={`mt-2 border w-full p-4 outline-none focus:border-primaryColor text-sm ${
            errorIndex === 2 && "border-red-500"
          }`}
          onChange={handleFormInput}
        />
        <label htmlFor="password" className="mt-4 md:mt-6 lg:mt-10 text-sm ">
          Password
        </label>
        {errorIndex === 3 && errorIndexMessage !== "" && (
          <p className="mt-2 text-sm text-red-500">{errorIndexMessage}</p>
        )}
        <input
          type="password"
          id="password"
          name="password"
          value={userData.password}
          placeholder="Password"
          className={`mt-2 border w-full p-4 outline-none focus:border-primaryColor text-sm bg-none ${
            errorIndex === 3 && "border-red-500"
          }`}
          onChange={handleFormInput}
        />
        {/* sign up button */}
        <button
          className="bg-[#0A6A69] w-full p-4 mt-10 md:mt-10 lg:mt-10"
          onClick={handleSignup}
        >
          <p className="text-sm text-white">
            {isLoading ? "Loading..." : "Sign up"}
          </p>
        </button>
        <div className="mt-4 flex flex-row items-center gap-x-2">
          <p className="text-blackColor text-base">Already have an account? </p>
          <Link to={"/admin/signin"}>
            <p className="text-[#0A6A69] text-base">Sign in</p>
          </Link>
        </div>
      </div>
      {/* success alert modal */}
      {showSucessModal && (
        <Modal
          closeAllModal={() => setShowSucessModal(false)}
          closeModal={showSucessModal}
        >
          <SuccessAlert
            message=""
            message2="Your admin account succesfully created! A verification email has been sent to your email. Click on the verification link to get verified before you proceed to admin dashboard"
          />
        </Modal>
      )}
    </div>
  );
};

export default AdminSignup;
