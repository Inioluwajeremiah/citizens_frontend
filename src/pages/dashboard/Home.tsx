import { Link } from "react-router-dom";
import { activePoliciesData, blogData } from "../../utils/data";
import ForwardArrow from "../../assets/icons/ForwardArrow";
import { useGetGeneralStatsQuery } from "../../redux/apiSlice/generalStatsApiSlice";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = () => {
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
  const { data: generalStatsData, isLoading: loadingGeneralStats } =
    useGetGeneralStatsQuery();

  return (
    <div className="">
      {/* header 1 */}
      <header className=" border-b flex flex-row items-center justify-between px-10 py-10">
        <h1 className="text-2xl text-blackColor">Hello Admin</h1>
        {/* add new policy button */}
        <Link
          to={"add-new-policy"}
          className="bg-primaryColor px-6 py-4 rounded-md"
        >
          <p className="text-white ">+ Create New</p>
        </Link>
      </header>

      {/* header 2 */}
      {loadingGeneralStats ? (
        <LoadingSpinner />
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
        {/* policies */}
        <div>
          {/* policies */}
          <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10 border-b">
            {activePoliciesData.slice(0, 4).map((item, index) => {
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
        {/* policies */}
        <div>
          {/* policies */}
          <div className=" grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-10 border-b">
            {blogData.slice(0, 4).map((item, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default Home;
