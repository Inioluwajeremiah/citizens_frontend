import { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import { useSigninMutation } from "../../redux/apiSlice/usersApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { encryptWithRSA } from "../../utils/subtlecrypto";
import { setCredentials } from "../../redux/slices/authSlice";

interface UserDataProps {
  email: string;
  password: string;
}

interface SigninProps {
  onPressSignup: () => void;
  closeSigninModal: () => void;
  setShowSucessModal: () => void;
}

const Signin: React.FC<SigninProps> = ({
  onPressSignup,
  setShowSucessModal,
}) => {
  const [userData, setUserData] = useState<UserDataProps>({
    email: "",
    password: "",
  });

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
      const res = await signin({ ...userData });
      if (res.data) {
        const encrypteddata = await encryptWithRSA(
          import.meta.env.VITE_PUBLIC_KEY,
          JSON.stringify(res.data)
        );
        dispatch(setCredentials(encrypteddata));
        console.log("encrypteddata ===> ", encrypteddata);
        setShowSucessModal();
        setTimeout(() => {
          setShowSucessModal();
          navigate("add-your-voice", { state: "policyId" });
        }, 3000);
      }

      console.log("response ===> ", res);
    } catch (error) {
      console.log("sign up catch error ==> ", error);
    }
  };
  return (
    <div
      id="signinmodal"
      className="relative w-full flex flex-col items-start justify-start  bg-white p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll"
    >
      {/* logo */}
      <div className={`flex flex-row items-center justify-center w-full mb-6 `}>
        <img src={logo} alt="Citizens logo" />
        <p className="text-base font-semibold text-blackColor ml-2 ">
          CitizensRep
        </p>
      </div>

      {/* form title */}
      <p className="w-full text-blackColor text-xl md:text-2xl lg:text-[28px] font-semibold text-center ">
        Sign In to add your voice
      </p>

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
        <p className="text-[#828DA9] text-xs py-4">Forgot Password?</p>
      </button>
      <div className="mt-2 flex flex-row items-center gap-x-2">
        <p className="text-blackColor text-base">Don't have an account? </p>
        <button onClick={onPressSignup}>
          <p className="text-[#0A6A69] text-base">Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default Signin;
