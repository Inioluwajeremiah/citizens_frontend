import starIcon from "../../assets/icons/star.svg";
import forwardArrowIcon2 from "../../assets/icons/forwardArrow2.svg";
import forwardArrowIcon from "../../assets/icons/forwardArrow.svg";
import pastprojectsImage from "../../assets/images/pastprojects.png";

const PastProjects = () => {
  return (
    <section className="container mx-auto py-20 w-[80%] lg:w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-20 lg:gap-x-32 ">
        {/* left div */}
        <div className="flex flex-col items-center lg:items-start ">
          {/* hall of fame */}
          <div className="px-6 py-2 rounded-full flex flex-row items-center bg-[#FFEBE4] w-fit">
            <img
              src={starIcon}
              alt="Citizensrep past projects hall of fame star icon"
            />
            <p className="font-medium text-[10px] lg:text-[13px] text-[#A94E30] ml-2">
              Hall Of Fame
            </p>
          </div>

          <p className="text-2xl lg:text-[40px] text-blackColor mt-10 font-semibold tracking-[-1.6px]">
            Past Project <span className="text-primaryColor">Tracked</span>
          </p>
          <p className="text-base lg:text-2xl text-blackColor font-semibold mt-6">
            Public Health System
          </p>
          <p className="text-sm lg:text-base text-[#444444] mt-6 leading-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed
            diam voluptua. At vero eos et accusam et justo.
          </p>

          {/* see all small screen */}
          <button className="flex flow-row items-center lg:hidden mt-10 ">
            <p className="text-[#FB7F57] font-semibold text-sm">
              See All Projects
            </p>
            <img
              src={forwardArrowIcon2}
              alt="Citizens learn more forward arrow attached to Citizens learn more button"
              className="ml-2"
            />
          </button>

          <div className="w-[80%] lg:w-full flex flex-row items-center gap-x-4 mt-10">
            <div className="bg-primaryColorTint w-1/2 flex flex-col items-center justify-center px-10 py-10">
              <p className="text-[32px] lg:text-[40px] text-primaryColor font-semibold">
                400+
              </p>
              <p className="text-sm lg:text-base font-bold ">Respondents</p>
            </div>
            <div className="bg-primaryColorTint w-1/2 flex flex-col items-center justify-center px-10 py-10">
              <p className="text-[32px] lg:text-[40px] text-primaryColor font-semibold">
                400+
              </p>
              <p className="text-sm lg:text-base font-bold">Respondents</p>
            </div>
          </div>

          {/* progress block */}
          <div className="w-full mt-10">
            {/* progress title */}
            <div className="flex flex-row items-center justify-between">
              <p className="text-base lg:text-lg font-semibold text-blackColor">
                Implementation rate
              </p>
              <p className="text-base lg:text-lg font-semibold text-blackColor">
                75%
              </p>
            </div>
            {/* progress bar */}
            <div className="h-2 w-full bg-primaryColorAccent mt-6">
              <div className="h-2 w-[75%] bg-primaryColor"></div>
            </div>
          </div>
        </div>

        {/* right ddiv */}
        <div className="">
          {/* see all large screen */}
          <button className="hidden lg:flex flow-row items-center  float-end ">
            <p className="text-primaryColor font-semibold text-lg">See All</p>
            <img
              src={forwardArrowIcon}
              alt="Citizens learn more forward arrow attached to Citizens learn more button"
              className="ml-2"
            />
          </button>

          <div className="bg-primaryColorTint p-4 mt-10">
            <img
              src={pastprojectsImage}
              alt="Citizensrep past projects image"
              className="h-fit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastProjects;
