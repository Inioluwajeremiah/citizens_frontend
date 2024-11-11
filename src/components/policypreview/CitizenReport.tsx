import { Link } from "react-router-dom";
import ForwardArrow from "../../assets/icons/ForwardArrow";
import { blogData } from "../../utils/data";

const CitizenReport = () => {
  return (
    <section className="container mx-auto w-[80%] lg:w-full py-20">
      <p className="text-[40px] font-semibold mb-10">Citizens report</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-x-0 gap-y-4 ">
        {blogData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-x-4 items-start justify-start"
          >
            <div className="w-1/2 h-[166px] bg-gray-400">
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
              <p className="text-sm text-[#726057] pb-1">{item.description}</p>
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
        ))}
      </div>
    </section>
  );
};

export default CitizenReport;
