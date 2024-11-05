import chevronDownIcon from "../../assets/icons/ChevronDown.svg";
import searchIcon from "../../assets/icons/searchicon.svg";
import health from "../../assets/images/health.png";
import economy from "../../assets/images/economy.png";
import education from "../../assets/images/education.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import endpoint from '../../utils/endpoints'

const HorizontalDivider = () => {
  return (
    <div className="grid grid-cols-6 w-full">
      {[...Array(6)].map((_, index) => (
        <div
          className={`w-1/g h-2 ${
            index % 2 === 0 ? "bg-primaryColor" : "bg-secondaryColor"
          }`}
          key={index}
        ></div>
      ))}
    </div>
  );
};

const activePoliciesData = [
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },

  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "",
  },
  {
    category: "HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "EDUCATION",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "",
  },

  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "/src/assets/images/economy.png",
  },
  {
    category: "DIGITAL",
    title: "Sexual reproductive health and right",
    image: education,
    imageUrl: "/src/assets/images/education.png",
  },
  {
    category: "SEXUAL HEALTH",
    title: "Sexual reproductive health and right",
    image: health,
    imageUrl: "/src/assets/images/health.png",
  },
  {
    category: "ECONOMY",
    title: "Sexual reproductive health and right",
    image: economy,
    imageUrl: "",
  },
];

const ActivePolicies = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  console.log(page);

  const windowHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;

  // useEffect(() => {
  //   setLoading(true);
  //   const url = `${endpoint}?page=${page}&itemsPerPage=${itemsPerPage}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       set;
  //     });
  // }, [page]);

  const handleScroll = () => {
    if (windowHeight + scrollTop + 1 >= scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  });

  //implement infinte scroll

  return (
    <section className="w-full pb-20 bg-activepoliciesBg bg-center relative">
      <HorizontalDivider />
      <div className="container mx-auto w-[80%] lg:w-full ">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-20">
          {/* active policy  */}
          <p className=" text-2xl lg:text-[40px] text-blackColor font-semibold mt-4 tracking-[-1.6px]">
            Active Policies
          </p>

          {/* category and search */}
          <div className=" w-[80%] lg:w-1/2 flex flex-col gap-y-4  md:flex-row gap-x-4 items-center justify-center lg:justify-end mt-10 lg:mt-0 ">
            {/* select category */}
            <div className=" bg-white inline-flex rounded-full pr-2 pl-4 py-2 flex-row items-center h-12  ">
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
            <div className=" flex flex-row items-center pl-4 pr-2 py-1 bg-white rounded-full h-12  ">
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
                    className={`relative text-xl font-semibold ${
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

export default ActivePolicies;
