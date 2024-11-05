import { useEffect, useRef, useState } from "react";
import herobg from "../../assets/images/herobg.png";

const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);
  console.log(imgHeight);

  useEffect(() => {
    if (imageRef.current) {
      setImgHeight(imageRef.current.clientHeight);
    }
  }, [imageRef, window.innerWidth]);
  return (
    <section className="w-full h-fit lg:h-screen  mt-20 relative">
      <div
        // className="absolute top-0 inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.8)] z-10"
        className="absolute top-0 inset-0 bg-[#055D57A8] z-10"
        style={{ height: window.innerHeight - 80 }}
      ></div>

      <img
        src={herobg}
        ref={imageRef}
        style={{ height: window.innerHeight - 80 }}
        className=" object-center md:object-cover w-full"
      />

      <div
        // style={{ height: imgHeight || "auto" }}
        style={{ height: window.innerHeight - 80 }}
        className="absolute top-0 w-full flex flex-col items-center justify-center items-left z-20 "
      >
        <div className="container w-[80%] lg:w-full text-center">
          <p className="font-bold text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-[36px] md:leading-[50px] lg:leading-[68px] text-white mt-20 tracking-[-1.6px]">
            Empowering Citizens with Real-Time <br />
            Government Policy Tracking
          </p>
          <button className="bg-secondaryColor px-16 py-4 mt-12 ">
            <p className="text-center text-white text-sm md:text-base lg:text-lg">
              Contribute
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
