import Lottie from "lottie-react";
import successAnimation from "../assets/lottie/success.json";

interface SuccessAlertProp {
  message: string;
  message2?: string;
}
const SuccessAlert = ({ message, message2 }: SuccessAlertProp) => {
  return (
    <div
      id="signinmodal"
      className="relative w-full flex flex-col items-start justify-start  bg-white p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll"
    >
      <p className=" w-full text-center text-base md:text-xl lg:text-2xl  font-bold text-primaryColor py-4">
        {message}
      </p>
      <p className=" w-full text-center text-sm md:text-base py-4">
        {message2}
      </p>
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto ">
        <Lottie animationData={successAnimation} loop={false} />;
      </div>
    </div>
  );
};

export default SuccessAlert;
