import chevronDownIcon from "../assets/icons/ChevronDown.svg";
import searchIcon from "../assets/icons/searchicon.svg";
import { Link } from "react-router-dom";
import { activePoliciesData } from "../utils/data";

const Policies = () => {
  return (
    <section className="w-full py-20 mt-20">
      <div className="container mx-auto w-[80%] lg:w-full  ">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          {/* active policy  */}
          <p className=" text-2xl lg:text-[40px] text-blackColor font-semibold mt-4 tracking-[-1.6px]">
            Active Policies
          </p>

          {/* category and search */}
          <div className=" flex flex-row items-center mt-10 lg:mt-0 ">
            {/* select category */}
            <div className="bg-white inline-flex rounded-full pr-2 pl-4 py-2 flex-row items-center w-fit h-12  ">
              <p className="text-primaryColor text-sm">Categories</p>
              <button className="flex flex-row items-center justify-center bg-primaryColor px-8 py-2 rounded-full ml-4">
                <p className="text-white text-sm">All</p>
                <img
                  src={chevronDownIcon}
                  alt="Citizens policies categories dropdown"
                  className="ml-2"
                />
              </button>
            </div>

            {/* search policy */}
            <div className="flex flex-row items-center pl-4 pr-2 py-1 bg-white rounded-full ml-4 h-12  ">
              <img
                src={searchIcon}
                alt="Citizens search policies icon"
                className="w-6 h-6"
              />
              <input type="Search" className="bg-white px-2 py-2" />
            </div>
          </div>
        </div>

        {/* policies */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {activePoliciesData.map((item, index) => {
            return (
              <Link
                to={"policies/id"}
                state={item}
                key={index}
                className={`relative h-[316px] ${
                  !item.imageUrl && "bg-primaryColorAccent"
                } `}
                style={{
                  backgroundImage:
                    (item.imageUrl && `url(${item.image})`) || "",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* linear gradient */}
                {item.imageUrl && (
                  <div
                    className="absolute top-0 inset-0 bg-gradient-to-b from-[rgba(11,29,43,0)] to-[rgba(11,29,43,1)] z-10"
                    style={{ height: 316 }}
                  ></div>
                )}
                {/* text divs */}
                <div
                  className={`absolute top-0 z-20 h-[316px] flex flex-col justify-between p-6 ${
                    !item.imageUrl && "bg-primaryColorAccent"
                  } `}
                >
                  <p
                    style={{}}
                    className={`w-fit text-[13px] px-4 py-2 font-medium rounded-full   ${
                      !item.imageUrl
                        ? "bg-primaryColorTint text-primaryColor"
                        : "bg-[#07101759] text-white"
                    } `}
                  >
                    {item.category}
                  </p>
                  <p
                    className={`relative text-xl font-bold ${
                      !item.imageUrl ? "text-[#212B0B] " : " text-white"
                    } `}
                  >
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Policies;
