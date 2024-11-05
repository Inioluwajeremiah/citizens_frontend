import forwardArrowIcon from "../../assets/icons/forwardArrow.svg";

const Purpose = () => {
  return (
    <section className="w-[80%] lg:w-full container mx-auto flex flex-col items-center justify-center py-20 bg-white ">
      <p className="text-2xl lg:text-[40px] font-semibold text-center">
        Our <span className=" text-blackColor tracking-[-1.6px]">Purpose</span>
      </p>
      <p className="mt-10 text-base lg:text-2xl lg:leading-[40px] text-center">
        To monitor the execution of governmental policies and actions <br />
        in response to the demands put forth by Nigerian girls and the youth.
        (ADD LINK)
      </p>
      <div className="mt-10 mb-2">
        <button className="flex flow-row items-center ">
          <p className="text-primaryColor font-semibold text-sm lg:text-lg">
            Learn More
          </p>
          <img
            src={forwardArrowIcon}
            alt="Citizens learn more forward arrow attached to Citizens learn more button"
            className="ml-2"
          />
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
