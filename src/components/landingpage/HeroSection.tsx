import { useEffect, useRef, useState } from "react";
import herobg from "../../assets/images/herobg.png";
import infodivicon from "../../assets/icons/infodivicon.svg";
interface InfoDivProps {
  img: string;
  title: string;
  description: string;
}
const InfoDiv = ({ img, title, description }: InfoDivProps) => {
  return (
    <div className="relative w-[191px] flex flex-row items-start p-2 bg-white rounded-md gap-x-2">
      <div className="w-[25%]">
        <img src={img} alt="" />
      </div>
      <div className="w-[70%]">
        <p className="text-xs text-[#23194D] text-left">{title}</p>
        <p className="text-[10px] text-[#79787C] text-left mt-2">
          {description}
        </p>
      </div>
      <img
        src={infodivicon}
        alt="info icon block"
        className="absolute right-0 -bottom-[30px] -z-10"
      />
    </div>
  );
};
const HeroSection: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imgHeight, setImgHeight] = useState<number | null>(null);
  console.log(imgHeight);

  const windowidth = window.innerWidth;
  const heresectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    heresectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      setImgHeight(imageRef.current.clientHeight);
    }
  }, [imageRef, window.innerWidth]);
  return (
    <section
      ref={heresectionRef}
      className="w-full h-fit lg:h-screen  mt-20 relative"
    >
      <div
        id="herosection"
        // className="absolute top-0 inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.0)] to-[rgba(0,0,0,0.8)] z-10"
        className="absolute top-0 inset-0 bg-[#055D57A8] z-10"
        style={{
          height:
            windowidth >= 1024
              ? window.innerHeight - 140
              : window.innerHeight + 120,
        }}
      ></div>

      <img
        src={herobg}
        ref={imageRef}
        // style={{ height: window.innerHeight - 140 }}
        style={{
          height:
            windowidth >= 1024
              ? window.innerHeight - 140
              : window.innerHeight + 120,
        }}
        className="object-cover object-center lg:object-center md:object-cover w-full"
      />

      <div
        // style={{ height: imgHeight || "auto" }}
        // style={{ height: window.innerHeight - 140 }}
        style={{
          height:
            windowidth >= 1024
              ? window.innerHeight - 140
              : window.innerHeight + 120,
        }}
        className="absolute top-0 w-full flex flex-col items-center justify-center items-left z-20 "
      >
        <div className="relative container w-[80%] lg:w-full text-center">
          {/* large screen */}
          <div className="hidden lg:block relative w-full mt-20 ">
            <p className=" font-bold w-[60%] mx-auto text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-[36px] md:leading-[50px] lg:leading-[68px] text-white tracking-[-0.96px] lg:tracking-[-1.6px]">
              Creating a platform to amplify Nigerian voices and <br /> foster
              dialogue between citizens and the government.
            </p>
            <div className="ml-10 absolute right-0 top-5">
              <InfoDiv
                img={"/src/assets/images/kelechi.png"}
                title="Kelechi Adedayo"
                description="You can type a testimony here also and add a customer name and image"
              />
            </div>
          </div>
          {/* small screen */}
          <div className=" block lg:hidden relative w-full mt-20 ">
            <p className=" font-bold text-center text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-[36px] md:leading-[50px] lg:leading-[68px] text-white tracking-[-0.96px] lg:tracking-[-1.6px]">
              Creating a platform to amplify
              <br /> Nigerian voices and foster <br />
              dialogue between citizens and the government.
              {/* One liner tagline <br /> Real-Time <br />
              Government Policy Tracking */}
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block mt-6 absolute left-0">
              <InfoDiv
                img={"/src/assets/images/kelechi.png"}
                title="Kelechi Adedayo"
                description="You can type a testimony here also and add a customer name and image"
              />
            </div>
            <button className="bg-secondaryColor px-16 py-4 mt-4 lg:mt-12 ">
              <p className="text-center text-white text-sm md:text-base lg:text-lg">
                Contribute
              </p>
            </button>
          </div>
          <div className="block lg:hidden  mt-10 float-end left-0">
            <InfoDiv
              img={"/src/assets/images/kelechi.png"}
              title="Kelechi Adedayo"
              description="You can type a testimony here also and add a customer name and image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
