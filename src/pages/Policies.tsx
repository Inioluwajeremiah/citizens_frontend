import chevronDownIcon from "../assets/icons/ChevronDown.svg";
import searchIcon from "../assets/icons/searchicon.svg";
import { Link } from "react-router-dom";
import { activePoliciesData } from "../utils/data";
import { useEffect, useRef, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useGetPoliciesQuery } from "../redux/apiSlice/policyApiSlice";
import {
  GetPolicyData,
  PolicyData,
} from "../components/interfaces/PolicyInterface";
import { endpoints } from "../utils/endpoints";

const Policies = () => {
  const policieesSection = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<GetPolicyData[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [filterMode, setFilterMode] = useState<string>("");
  const [filterDate, setFilterDate] = useState<Date | null>(null);
  const [category, setCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(4);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Environment",
    "Technology",
    "Finance",
  ];

  const {
    data: policyData,
    isLoading: loadingpolicyData,
    isError,
    error,
  } = useGetPoliciesQuery({
    page: page,
    limit: 2,
    search: searchTerm,
    createdAt: filterDate ? filterDate.toISOString() : "", // Include date filter
    category: category,
  });

  const windowHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;

  console.log("page at policies ==> ", page);
  console.log("windowHeight at policies ==> ", windowHeight);
  console.log("scrollTop at policies ==> ", scrollTop);
  console.log("scrollHeight at policies ==> ", scrollHeight);
  console.log("handlescroll math ===> ", windowHeight + scrollTop + 1);

  const handleLoadMoreButton = () => {
    setPage((prevPage) => prevPage + 1);
    setLoadingMore(true);
  };

  const handleHideButton = () => {
    setItems([]);
    setPage(1);
    setLoadingMore(true);
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCategory = (category: string) => {
    setCategory(category);
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (policyData) {
      setItems((prevItems) => {
        // Create a Set to store unique items based on a unique identifier (e.g., _id)
        const uniqueItems = new Set([...prevItems.map((item) => item._id)]); // Assumes each item has a unique _id

        // Filter out duplicate items from policyData.data
        const newItems = policyData?.data?.filter(
          (item) => !uniqueItems.has(item._id)
        );

        // Combine the unique new items with the previous items
        return [...prevItems, ...newItems];
      });
      setLoadingMore(false);
    }
  }, [policyData]);

  // const handleScroll = () => {
  //   if (windowHeight + scrollTop + 1 >= scrollHeight) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  useEffect(() => {
    policieesSection.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.addEventListener("scroll", handleScroll);
  // });

  if (loadingpolicyData && page === 1) {
    return (
      <div className="w-full lg:min-h-screen lg:h-full lg:w-[35%] px-4 md:px-6 lg:px-10 pb-10 lg:border-l lg:border-l-black flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <section
      ref={policieesSection}
      id="policiesSection"
      className="w-full  py-10 md:py-16 lg:py-20 mt-20 bg-activepoliciesBg bg-top bg-contain md:bg-center lg:bg-no-repeat bg-[#F2F8F8]   "
    >
      <div className="container mx-auto w-[80%] lg:w-full   ">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          {/* active policy  */}
          <p className=" text-2xl lg:text-[40px] text-blackColor font-semibold mt-4 tracking-[-1.6px]">
            Active Policies
          </p>

          {/* category and search */}
          <div className=" flex flex-col sm:flex-row gap-4 items-center mt-10 lg:mt-0 ">
            {/* select category */}
            <div className="bg-white inline-flex rounded-full pr-2 pl-4 py-2 flex-row items-center w-fit h-12  ">
              <p className="text-primaryColor text-sm">Categories</p>
              <button
                onClick={handleToggleDropdown}
                className="flex flex-row items-center justify-center bg-primaryColor px-8 py-2 rounded-full ml-4"
              >
                <p className="text-white text-sm">All</p>
                <img
                  src={chevronDownIcon}
                  alt="Citizens policies categories dropdown"
                  className="ml-2"
                />
              </button>
              {isOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute mt-2 bg-white border rounded-lg shadow-lg w-fit p-4 z-10"
                  id="select-dropdown-div"
                >
                  <ul className="flex-col items-start justify-start">
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          handleSelectCategory(
                            category === "All" ? "" : category
                          )
                        }
                      >
                        <p className="text-xs md:text-base text-left">
                          {category}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* search policy */}
            <div className="flex flex-row items-center pl-4 pr-2 py-1 bg-white rounded-full ml-4 h-12  ">
              <img
                src={searchIcon}
                alt="Citizens search policies icon"
                className="w-5 h-5"
              />
              <input
                onChange={(e) => setSearchTerm(e.target.value)}
                type="Search"
                className="bg-white px-2 py-2 outline-none"
              />
            </div>
          </div>
        </div>

        {/* policies */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {items.map((item, index) => {
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
                    (item.imageUrl &&
                      `url(${endpoints.imageBaseUrl + item.imageUrl})`) ||
                    "",
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

      {policyData?.pagination?.hasNextPage && (
        <button
          onClick={handleLoadMoreButton}
          className="mt-4 md:mt-8 text-primaryColor text-sm md:text-base font-bold py-4 mx-auto flex"
        >
          {loadingMore ? <p>Loading...</p> : <p>Looad more</p>}
        </button>
      )}
    </section>
  );
};

export default Policies;
