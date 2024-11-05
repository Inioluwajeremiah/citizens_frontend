const QuickStats = () => {
  const quickStatsData = [
    {
      title: "Project Tracked",
      description:
        "The International Institute of Tropical Agriculture (IITA) is a non-profit ins",
      figure: 38,
    },
    {
      title: "Respondents",
      description:
        "The International Institute of Tropical Agriculture (IITA) is a non-profit ins",
      figure: "761+",
    },
    {
      title: "Success stories",
      description:
        "The International Institute of Tropical Agriculture (IITA) is a non-profit ins",
      figure: "83%",
    },
    {
      title: "Title",
      description:
        "The International Institute of Tropical Agriculture (IITA) is a non-profit ins",
      figure: "12%",
    },
  ];
  return (
    <section className="max-w-full relative bg-quickstartBg bg-no-repeat bg-cover  ">
      <div className="w-full bg-[#055D57A8]  py-20">
        <div className="w-[80%] lg:w-full container mx-auto">
          <div className={` `}>
            <p className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-center text-white tracking-[-1.6px]">
              Quick <span className="text-[#86F0A4]">Stats</span>
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4  gap-x-6 gap-y-8 mt-10">
              {quickStatsData.map((item, index) => (
                <div
                  key={index}
                  className={` px-0 lg:px-10 ${
                    index >= 1 ? "lg:border-l border-[#308C86]" : ""
                  } ${
                    (index + 1) % 2 === 0
                      ? "border-l border-[#308C86] pl-10"
                      : ""
                  }`}
                >
                  <p className="text-[32px] lg:text-[48px] font-semibold text-white text-left">
                    {item.figure}
                  </p>
                  <p className="text-sm lg:text-base font-bold text-white text-left mt-2">
                    {item.title}
                  </p>
                  <p className="text-xs lg:text-sm text-white text-left mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
