import Lottie from "lottie-react";
import successAnimation from "../assets/lottie/success.json";

interface SuccessAlertProp {
  message: string;
}
const SuccessAlert = ({ message }: SuccessAlertProp) => {
  return (
    <div
      id="signinmodal"
      className="relative w-full flex flex-col items-start justify-start  bg-white p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll"
    >
      <p className=" w-full text-center text-2xl  font-bold text-primaryColor py-4">
        {message}
      </p>
      <Lottie animationData={successAnimation} loop={false} />;
    </div>
  );
};

export default SuccessAlert;
