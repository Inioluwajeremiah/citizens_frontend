import { Link } from "react-router-dom";
// import { activePoliciesData, blogData } from "../../utils/data";
import ForwardArrow from "../../assets/icons/ForwardArrow";
import { useGetGeneralStatsQuery } from "../../redux/apiSlice/generalStatsApiSlice";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import { useState } from "react";
import { useGetPoliciesQuery } from "../../redux/apiSlice/policyApiSlice";
import { useGetBlogsQuery } from "../../redux/apiSlice/blogApiSlice";
// import { blogData } from "../../utils/data";
import { endpoints } from "../../utils/endpoints";
const headerData = [
  {
    title: "Policies",
    stat: 15,
    bgColor: "#226C67",
    borderColor: "#A9D2CF",
  },
  {
    title: "Blog Posts",
    stat: 15,
    bgColor: "#F2F8F6",
    borderColor: "#A9D2CF",
  },
  {
    title: "Users",
    stat: 15,
    bgColor: "#F2F8F6",
    borderColor: "#A9D2CF",
  },
];

const Home = () => {
  const { data: generalStatsData, isLoading: loadingGeneralStats } =
    useGetGeneralStatsQuery();

  const { data: policiesData, isLoading: loadingPolicies } =
    useGetPoliciesQuery({
      page: 1,
      limit: 4,
      search: "",
      category: "",
    });

  const { data: blogsData, isLoading: loadingBlogs } = useGetBlogsQuery({
    page: 1,
    limit: 4,
    search: "",
    category: "",
  });

  console.log("policiesData at admin home ===> ", policiesData && policiesData);

  // const [loading, setLoading] = useState(true);

  return (
    <div className="">
      {/* header 1 */}
      <header className=" border-b flex flex-row items-center justify-between px-10 py-10">
        <h1 className="text-2xl text-blackColor">Hello Admin</h1>
        {/* add new policy button */}
        <Link
          to={"/admin/policies/add-new-policy"}
          className="bg-primaryColor px-6 py-2 rounded-sm"
        >
          <p className="text-white ">+ Create New</p>
        </Link>
      </header>

      {/* header 2 */}
      {loadingGeneralStats ? (
        // <LoadingSpinner />
        <div className="w-full grid grid-cols-3 gap-x-4 px-10 mt-10 border-b pb-10">
          {/* loading  Skeleton */}
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className={`p-4 rounded-md bg-gray-200 h-full justify-center  animate-pulse`}
            >
              <p
                className={` w-[50%] h-4 bg-gray-300 text-base font-medium text-center mx-auto `}
              ></p>
              <p
                className={`w-[30%] h-4  bg-gray-300 text-[40px] text-center mt-2  mx-auto`}
              ></p>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-x-4 px-10 mt-10 border-b pb-10">
          {headerData.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-md  ${
                index !== 0
                  ? "border border-[#A9D2CF] bg-[#F2F8F6]"
                  : "bg-[#226C67] border border-[#226C67]"
              }`}
            >
              <p
                className={`text-base font-medium text-center ${
                  index !== 0 ? "text-blackColor" : "text-white"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`text-[40px] text-center mt-2 ${
                  index !== 0 ? "text-[#0A6A69]" : "text-white"
                }`}
              >
                {item.title === "Policies"
                  ? generalStatsData?.data.policies
                  : item.title === "Blog Posts"
                  ? generalStatsData?.data.blogs
                  : item.title === "Users"
                  ? generalStatsData?.data.users
                  : ""}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* policy section */}
      <div className=" px-10 mt-10">
        {/* header */}
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl text-blackColor">Policies</h1>
          <Link to={"/admin/policies"}>
            <p>See All</p>
          </Link>
        </div>

        {policiesData?.data?.length === 0 && (
          <p className="text-center font-bold text-lg py-4">No policy data</p>
        )}
        {/* policies */}
        <div>
          {loadingPolicies ? (
            <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10 border-b">
              {[0, 1, 2, 3].map((_, index) => {
                return (
                  <div
                    key={index}
                    className={`relative h-[316px] bg-gray-200 animate-pulse`}
                  >
                    <div
                      className={`w-full absolute top-0 z-20 h-[316px] flex flex-col justify-between p-6 bg-gray-200`}
                    >
                      <p
                        style={{}}
                        className={`w-full text-[13px] px-4 py-2 font-medium rounded-full bg-gray-300
                          `}
                      ></p>
                      <p
                        className={`relative w-full h-[50%] text-xl font-bold bg-gray-300`}
                      ></p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10 border-b">
              {policiesData?.data?.slice(0, 4).map((item, index) => {
                return (
                  <Link
                    to={`/policies/${item._id}`}
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
          )}
        </div>
      </div>

      {/* blog section */}
      <div className=" px-10 mt-10">
        {/* header */}
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl text-blackColor">Blogs</h1>
          <Link to={"/admin/blogs"}>
            <p>See All</p>
          </Link>
        </div>

        {blogsData?.length === 0 && (
          <p className="text-center font-bold text-lg py-4">No blog data</p>
        )}
        {/* blogs */}
        <div>
          {loadingBlogs ? (
            <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10 border-b">
              {[0, 1, 2, 3].map((_, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-[316px] flex flex-col gap-y-4 items-start justify-start bg-gray-200 animate-pulse"
                  >
                    <div className="w-full h-[166px] bg-gray-300"></div>
                    <div className="w-full">
                      <p className="text-[#180A03] text-base font-semibold py-1 w-full bg-gray-300 h-10"></p>
                      <p className="text-sm text-[#726057] pb-1 w-full bg-gray-300 h-10 mt-2"></p>
                      <div className="mt-2 flex flex-row items-center gap-x-2 w-full">
                        <p className="w-[50%] text-sm font-semibold text-[#A6D845] underline leading-[22.4px] h-6 bg-gray-300"></p>
                        <div className="w-[30%] h-6 bg-gray-300 ml-4"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10 border-b">
              {blogsData?.slice(0, 4).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-y-4 items-start justify-start"
                  >
                    <div className="w-full h-[166px] bg-gray-400">
                      <img
                        src={item.imageUrl}
                        alt={`${item.imageUrl} image`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-[#180A03] text-base font-semibold py-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-[#726057] pb-1">
                        {item.description}
                      </p>
                      <Link
                        to={"/"}
                        className="mt-2 flex flex-row items-center gap-x-2 "
                      >
                        <p className="text-sm font-semibold text-[#A6D845] underline leading-[22.4px]">
                          Read more
                        </p>
                        <ForwardArrow color="#A6D845" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
