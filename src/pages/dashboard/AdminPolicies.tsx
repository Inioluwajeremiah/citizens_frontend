import { useEffect, useRef, useState } from "react";
import chevronDownIcon from "../../assets/icons/ChevronDown.svg";
import searchIcon from "../../assets/icons/searchicon.svg";
// import health from "../../assets/images/health.png";
// import economy from "../../assets/images/economy.png";
// import education from "../../assets/images/education.png";
import OptionsIcons from "../../assets/icons/OptionsIcons";
import { Link } from "react-router-dom";
import { decryptWithRSA } from "../../utils/subtlecrypto";
import { RootState } from "../../redux/store";
import { UserDataProps } from "../../components/interfaces/UserInterface";
import { useSelector } from "react-redux";
import { useGetPoliciesQuery } from "../../redux/apiSlice/policyApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

// const activePoliciesData = [
//   {
//     category: "SEXUAL HEALTH",
//     title: "Sexual reproductive health and right",
//     image: health,
//     imageUrl: "",
//   },
//   {
//     category: "HEALTH",
//     title: "Sexual reproductive health and right",
//     image: health,
//     imageUrl: "/src/assets/images/health.png",
//   },
//   {
//     category: "EDUCATION",
//     title: "Sexual reproductive health and right",
//     image: education,
//     imageUrl: "/src/assets/images/education.png",
//   },
//   {
//     category: "DIGITAL",
//     title: "Sexual reproductive health and right",
//     image: education,
//     imageUrl: "",
//   },

//   {
//     category: "ECONOMY",
//     title: "Sexual reproductive health and right",
//     image: economy,
//     imageUrl: "/src/assets/images/economy.png",
//   },
//   {
//     category: "DIGITAL",
//     title: "Sexual reproductive health and right",
//     image: education,
//     imageUrl: "/src/assets/images/education.png",
//   },
//   {
//     category: "SEXUAL HEALTH",
//     title: "Sexual reproductive health and right",
//     image: health,
//     imageUrl: "/src/assets/images/health.png",
//   },
//   {
//     category: "ECONOMY",
//     title: "Sexual reproductive health and right",
//     image: economy,
//     imageUrl: "",
//   },
// ];

const AdminPolicies = () => {
  const [showOPtionsModal, setShowOPtionsModal] = useState(false);
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserDataProps>({});
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  // const [limit, setLimit] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Education",
    "Healthcare",
    "Environment",
    "Technology",
    "Finance",
  ];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCategory = (category: string) => {
    setCategory(category);
    setIsOpen(false); // Close dropdown after selection
  };

  const {
    data: policiesData,

    isLoading: loadingPolicies,
  } = useGetPoliciesQuery({
    page,
    limit: 10,
    search: searchTerm,
    category,
  });

  const handleToggleOptions = () => {
    setShowOPtionsModal(!showOPtionsModal);
  };

  const decryptData = async () => {
    const decryptedText = await decryptWithRSA(
      import.meta.env.VITE_PRIVATE_KEY,
      userInfo
    );
    try {
      const parsedData =
        typeof decryptedText === "object"
          ? decryptedText
          : JSON.parse(decryptedText || "");
      setUserData(parsedData);
    } catch (error) {
      console.error("Failed to parse decrypted text:", error);
    }
  };

  useEffect(() => {
    decryptData();
  }, [userInfo]);

  // Close dropdown when clicking outside
  useEffect(() => {
    setPage(1);
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

  return (
    <div className="">
      {/* header 1 */}
      <header className=" border-b flex flex-row items-center justify-between px-10 py-10">
        <h1 className="text-2xl text-blackColor">Hello {userData.username}</h1>
      </header>

      {/* header 2 */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-10 mt-10">
        {/* left div */}
        <div className="flex flex-row items-center gap-x-4">
          {/* active policy  */}
          <p className=" text-2xl  text-blackColor font-semibold mt-4 tracking-[-0.48px]">
            Policies
          </p>
          {/* select category */}
          <div className="relative">
            <button
              className="  bg-white inline-flex rounded-full pr-2 pl-4 py-2 flex-row items-center w-fit h-12 border "
              onClick={handleToggleDropdown}
            >
              <p className="text-primaryColor text-sm">
                {category ? category : "Categories"}
              </p>
              <div className="flex flex-row items-center justify-center bg-primaryColor px-8 py-2 rounded-full ml-4">
                <p className="text-white text-sm">All</p>
                <img
                  src={chevronDownIcon}
                  alt="Citizens policies categories dropdown"
                  className="ml-2"
                />
              </div>
            </button>

            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-2 bg-white border rounded-lg shadow-lg w-full z-10"
                id="select-dropdown-div"
              >
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelectCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* right div ==>  search and add new */}
        <div className=" flex flex-row items-center gap-x-4 ">
          {/* search policy */}
          <div className="flex flex-row items-center px-4 py-0 bg-white rounded-full h-12 border  ">
            <img
              src={searchIcon}
              alt="Citizens search policies icon"
              className="w-4 h-4"
            />
            <input
              type="Search"
              className="bg-white px-2 py-1 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* add new policy button */}
          <Link
            to={"add-new-policy"}
            className="bg-primaryColor px-6 py-2 rounded-md"
          >
            <p className="text-white ">+ Create New</p>
          </Link>
        </div>
      </div>

      {loadingPolicies && <LoadingSpinner />}
      {/* policies */}
      <div className=" grid grid-cols-2 gap-10 px-10 mt-10 pb-14">
        {policiesData?.map((item, index) => (
          <Link
            to={`/policies/${item._id}`}
            state={item}
            key={index}
            className=" flex flow-row items-start"
          >
            <div className="w-[40%] bg-gray-400 h-full">
              <img
                src={item.imageUrl}
                // src="http://localhost:7000/uploads/image-1731173840648.png"
                alt={item.title + " image"}
                className=" rounded-l-md h-full"
              />
            </div>
            <div className="relative w-[60%] pl-6 py-4 h-full border-r border-b border-t rounded-md">
              <p className="pr-8 text-base text-blackColor font-semibold">
                {item.title}
              </p>
              <p className="pr-8 text-sm text-[#383434] mt-2">
                TAGS:{" "}
                <span className="text-primaryColor font-semibold">
                  {item.category}
                </span>
              </p>
              <p className="pr-6 text-sm text-[#383434] mt-10">
                Views:{" "}
                <span className="text-blackColor font-semibold">555</span>
              </p>
              <p className="pr-6 text-sm text-[#383434] mt-2">
                Responses:{" "}
                <span className="text-blackColor font-semibold">403</span>
              </p>

              {/* options menu button */}
              <div className="group absolute top-4 right-4">
                <button
                  onClick={handleToggleOptions}
                  className="absolute top-0 right-0"
                >
                  <OptionsIcons color="#000" />
                </button>

                {/* options menu */}
                <div className=" invisible group-hover:visible transition-opacity opacity-0 group-hover:opacity-100">
                  <div className="rounded-md px-6 py-4 bg-white shadow-md flex flex-col justify-start  items-start ">
                    <button className="p-2">
                      <p className="text-xs text-[#49526A]">Delete Post</p>
                    </button>
                    <button className="p-2">
                      <p className="text-xs text-[#49526A]">Edit Post</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPolicies;
