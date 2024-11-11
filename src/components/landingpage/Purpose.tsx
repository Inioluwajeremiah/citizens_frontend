import { useState } from "react";

import showmoreicon from "../../assets/icons/showmoreicon.svg";
import showlessicon from "../../assets/icons/showlessiocn.svg";

const Purpose = () => {
  const [reveal, setReveal] = useState(false);
  const purpose =
    "Youth Track it is an accountability platform established by the Democracy Convening Alliance. It serves as an online scorecard, amplifying the voices of young people and marginalized communities in Nigeria. This tool tracks progress on the demands outlined in the Youth Democracy Charter of Demand and provides vital data to guide advocacy efforts and influence policy formulation, implementation, and reform where needed.";
  return (
    <section className="w-[80%] lg:w-full container mx-auto flex flex-col items-center justify-center py-20 bg-white ">
      <p className="text-2xl lg:text-[40px] font-semibold text-center">
        Our <span className=" text-blackColor tracking-[-1.6px]">Purpose</span>
      </p>
      <p className="mt-10 text-base lg:text-2xl lg:leading-[40px] text-center">
        {!reveal ? purpose.slice(0, 150) + "..." : purpose}
      </p>
      <div className="mt-10 mb-2">
        <button
          className="flex flow-row items-center"
          onClick={() => setReveal(!reveal)}
        >
          <p className="text-primaryColor font-semibold text-sm lg:text-lg">
            {reveal ? "Show Less" : "Learn More"}
          </p>
          {reveal ? (
            <img
              src={showlessicon}
              alt="Citizens learn more forward arrow attached to Citizens learn more button"
              className="ml-2"
            />
          ) : (
            <img
              src={showmoreicon}
              alt="Citizens learn more forward arrow attached to Citizens learn more button"
              className="ml-2"
            />
          )}
        </button>
      </div>

      {/* image div */}
      {/* <div className="flex flex-row items-center">
          <img
            src={purposeArrowLeft}
            alt="Citizens purpose image"
            className="-mb-4"
          />
          <img
            src={purposeImg}
            alt="Citizens purpose image"
            className="mx-10"
          />
          <img
            src={purposeArrowRight}
            alt="Citizens purpose image"
            className="-mb-4"
          />
        </div> */}
    </section>
  );
};

export default Purpose;
