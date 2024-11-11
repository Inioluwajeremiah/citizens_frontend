import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { useSignupMutation } from "../../redux/apiSlice/usersApiSlice";

interface UserDataProps {
  username: string;
  email: string;
  password: string;
}
interface SignupProps {
  onPressLogin: () => void;
  closeSignupModal: () => void;
  setShowSucessModal: () => void;
}

// REACT MAIN component
const Signup: React.FC<SignupProps> = ({
  onPressLogin,
  setShowSucessModal,
}) => {
  const [errorIndex, setErrorIndex] = useState(0);
  const [userData, setUserData] = useState<UserDataProps>({
    username: "",
    email: "",
    password: "",
  });
  const [signup, { isLoading }] = useSignupMutation();
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const handleSignup = async () => {
    try {
      if (!userData.username) {
        setErrorIndex(1);
      } else if (!userData.email) {
        setErrorIndex(2);
      } else if (!userData.password) {
        setErrorIndex(3);
      }
      const res = await signup({ ...userData });
      if (res.data) {
        setShowSucessModal();
      }

      console.log("response ===> ", res);
    } catch (error) {
      console.log("sign up catch error ==> ", error);
    }
  };

  return (
    <div
      id="signupModal"
      className="w-full flex flex-col items-start justify-start  mx-auto my-auto bg-white p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll"
    >
      {/* logo */}
      <div className={`flex flex-row items-center justify-center w-full mb-6 `}>
        <img src={logo} alt="Citizens logo" />
        <p className="text-base font-semibold text-blackColor ml-2 ">
          CitizensRep
        </p>
      </div>
      {/* signup title */}
      <p className="w-full text-blackColor text-xl md:text-2xl lg:text-[28px] font-semibold text-center ">
        Sign Up to add your voice
      </p>
      <label htmlFor="username" className="text-sm mt-4 md:mt-6 lg:mt-10">
        Username
      </label>
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
        <button onClick={onPressLogin}>
          <p className="text-[#0A6A69] text-base">Sign in</p>
        </button>
      </div>
    </div>
  );
};

export default Signup;
