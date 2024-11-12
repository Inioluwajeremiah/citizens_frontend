const AboutUs = () => {
  // const purpose =
  //   "Youth Track it is an accountability platform established by the Democracy Convening Alliance. It serves as an online scorecard, amplifying the voices of young people and marginalized communities in Nigeria. This tool tracks progress on the demands outlined in the Youth Democracy Charter of Demand and provides vital data to guide advocacy efforts and influence policy formulation, implementation, and reform where needed.";

  return (
    <>
      <section
        className="w-full mt-20 h-[467px] relative  bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/src/assets/images/herobg.png')`,
        }}
      >
        {/* <div className="absolute h-[467px]  top-0 inset-0 bg-gradient-to-b from-[rgba(11,29,43,0)] to-[rgba(11,29,43,1)] z-10"> */}
        <div className="absolute h-[467px] top-0 inset-0 bg-gradient-to-b from-[rgba(220,238,236,0.4)] to-[#062422] z-10">
          <div className=" w-[80%] lg:w-full container mx-auto h-full  flex flex-col justify-end  ">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-10">
              <p className="text-[40px] text-center md:text-left text-white leading-[70px] w-[80%] md:w-[40%] lg:w-[25%] font-medium tracking-[-1.6px]">
                YouthTrackIt
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[80%] lg:w-full container mx-auto flex flex-col items-center justify-center py-20 bg-white ">
        <p className="text-2xl lg:text-[40px] font-semibold text-center">
          About <span className=" text-blackColor tracking-[-1.6px]">Us</span>
        </p>
        <p className="mt-10 text-base lg:text-2xl lg:leading-[40px] text-center">
          Youth Track It is a dynamic accountability platform developed by the
          Democracy Convening Alliance, dedicated to empowering young people and
          marginalized communities across Nigeria. Our platform acts as a
          powerful online scorecard, monitoring and highlighting progress on
          critical demands outlined in the Youth Democracy Charter of Demand. At
          Youth Track It, we believe that amplifying the voices of young
          Nigerians is essential for a thriving democracy. By providing
          accessible, real-time data, we empower communities to advocate for
          meaningful change, guiding efforts to shape, influence, and reform
          policies that impact their lives. We’re committed to supporting
          transparency, accountability, and equity in governance—ensuring that
          progress is both measurable and impactful for every Nigerian youth.
        </p>
      </section>
    </>
  );
};

export default AboutUs;
