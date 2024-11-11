import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
const socialmediaData = [
  {
    title: "Facebook",
    link: "",
  },
  {
    title: "Twitter",
    link: "",
  },
  {
    title: "LinkedIn",
    link: "",
  },
  {
    title: "Instagram",
    link: "",
  },
];

const Footer = () => {
  return (
    <section className="bg-[#091C2B]">
      <div className="container mx-auto  py-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-x-28 gap-y-10 ">
        {/* <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 py-20   gap-y-10 lg:gap-y-0 lg:gap-x-4 "> */}
        {/* logo */}
        <Link to={"/"} className="flex flex-row items-center ">
          <img src={logo} alt="YouthTrackIt logo" />
          <p className="text-white ml-2 font-semibold text-base">
            YouthTrackIt
          </p>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* social media */}
          <div className="mt-10 lg:mt-0">
            <p className="text-base font-bold text-white">Social Media</p>
            <div className="mt-4 w-fit">
              {socialmediaData.map((item, index) => (
                <Link key={index} to={item.link} className=" ">
                  <p className="text-[#CCCCCC] hover:text-primaryColor py-1 text-sm">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* contact us */}
          <div className="mt-10 lg:mt-0">
            <p className="text-base font-bold text-white">Contact Us</p>
            <div className="mt-4 w-fit">
              {socialmediaData.map((item, index) => (
                <Link key={index} to={item.link} className="mt-2">
                  <p className="text-[#CCCCCC] py-1 hover:text-primaryColor text-sm">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* about us */}
          <div className="mt-10 lg:mt-0">
            <p className="text-base font-bold text-white">About Us</p>
            <div className="mt-4 w-fit">
              {socialmediaData.map((item, index) => (
                <Link key={index} to={item.link} className="mt-2">
                  <p className="text-[#CCCCCC] py-1 hover:text-primaryColor text-sm">
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* news letter */}
          <div className="mt-10 lg:mt-0">
            <p className="text-base font-bold text-white">News Letter</p>
            <div className="flex flex-row items-center h-12 mt-4">
              <input
                placeholder="Enter your email"
                type="text"
                name=""
                id=""
                className="text-[#555555] text-[13px] bg-white w-[65%] h-full px-2"
              />
              <button className="bg-primaryColor w-[35%] h-full">
                <p className="text-sm font-medium text-white text-center">
                  Subscribe
                </p>
              </button>
            </div>
            <p className="text-[#CCCCCC] text-sm mt-4">
              Your email is safe with us,we don’t spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
