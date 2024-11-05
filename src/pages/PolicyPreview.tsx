import React, { useState } from "react";
import ForwardArrow from "../assets/icons/ForwardArrow";
import playIcon from "../assets/icons/playicon.svg";
import infoIcon from "../assets/icons/infoicon.svg";
import Megaphoneicon from "../assets/icons/Megaphoneicon";
import messageIcon from "../assets/icons/messageicon.svg";

// const img_url = "/src/assets/images/avatar.png";
const viewsData = [
  {
    username: "anonymous1",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous2",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous3",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous4",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous5",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous6",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous7",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous8",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous9",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous10",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous11",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous12",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous13",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous14",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous15",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous16",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous17",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous18",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous19",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
  {
    username: "anonymous20",
    imageUrl: "/src/assets/images/avatar.png",
    policyTitle: "At aliquam enim in cras arcu",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo",
  },
];
const PolicyPreview = () => {
  const [isReversed, setIsReversed] = useState(false);
  const [startIndex, setStartIndex] = useState(4);
  // const [currentVoices, setCurrentVoices] = useState(viewsData.slice(0, 4));
  // const [currentVoices2, setCurrentVoices2] = useState(viewsData.slice(3, 6));
  console.log(setStartIndex);

  /**
   * calculate the negative translate value in the scroll animation. This is done
   * to avoid uneccessary white space if value given is too much or incomplete animated
   *  items in the animation if the value given is too small.
   * 1. first divide the item size by the window width to get the no of items the screen
   * can contain
   * 2. calculate the no of overflowing items and multiply by the item width to get the actual
   * negative translate value. Also add the margin value * no of overflowing item to get the accurate
   * value
   *
   */
  const windowWidth = window.innerWidth;
  // get no if items for large screen
  const noOfItemsWindowScreenCanContain = Math.round(windowWidth / 300);

  const noOfOVerflowingItems =
    viewsData.length - noOfItemsWindowScreenCanContain;
  // const overflowingMarginSize = noOfOVerflowingItems * 40;
  const overflowingMarginSize = viewsData.length * 40;
  const overflowingWidth = noOfOVerflowingItems * 300;
  const totalOverflowingWidth = overflowingMarginSize + overflowingWidth;

  const toggleScrollDirection = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.detail === 2) {
      // Check if it's a double click
      setIsReversed((prev) => !prev);
    }
  };

  const pauseAnimation = () => {
    let animationDiv = document.getElementById("animation-div");
    if (animationDiv) {
      animationDiv.style.animationPlayState = "paused";
    }
    let animationDiv2 = document.getElementById("animation-div2");
    if (animationDiv2) {
      animationDiv2.style.animationPlayState = "paused";
    }
  };

  const playAnimation = () => {
    let animationDiv = document.getElementById("animation-div");
    if (animationDiv) {
      animationDiv.style.animationPlayState = "running";
    }
    let animationDiv2 = document.getElementById("animation-div2");
    if (animationDiv2) {
      animationDiv2.style.animationPlayState = "running";
    }
  };

  console.log("start index ==> ", startIndex);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     // Reset `startIndex` if it exceeds the length of `viewsData`
  //     if (startIndex >= viewsData.length - 1) {
  //       setStartIndex(0);
  //       setCurrentVoices(viewsData.slice(0, 4));
  //     } else {
  //       setCurrentVoices(viewsData.slice(startIndex, startIndex + 4));
  //       setStartIndex(startIndex + 4);
  //     }
  //   }, 10000);

  //   // Clear timeout on cleanup to avoid stacking
  //   return () => clearTimeout(timeoutId);
  // }, [startIndex, viewsData]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (startIndex - viewsData.length >= 1) {
  //       setCurrentVoices(viewsData.slice(0, 4));
  //       // setCurrentVoices2(viewsData.slice(3, 6));
  //       setStartIndex(4);
  //       return;
  //     }
  //     setCurrentVoices(viewsData.slice(startIndex, startIndex + 4));
  //     // setCurrentVoices2(viewsData.slice(startIndex + 3, startIndex + 6));
  //     setStartIndex(startIndex + 4);
  //   }, 10000);
  // }, [startIndex]);
  return (
    <>
      {/* hero section */}
      <section
        className="w-full mt-20 h-[467px] relative bg-center"
        style={{
          backgroundImage: "url('/src/assets/images/policypreview.png')",
        }}
      >
        <div className="absolute h-[467px]  top-0 inset-0 bg-gradient-to-b from-[rgba(11,29,43,0)] to-[rgba(11,29,43,1)] z-10">
          <div className=" w-[80%] lg:w-full container mx-auto h-full  flex flex-col justify-center ">
            <p className="text-[40px] text-white leading-[70px] w-[50%] md:w-[40%] lg:w-[25%] font-medium tracking-[-1.6px]">
              Sexual Reproductive health and right
            </p>
            <div className="mt-10 flex flex-row items-center justify-between">
              {/* play audio button  */}
              <button className="flex flow-row items-center gap-x-2">
                <img
                  src={playIcon}
                  alt="citizensrep play converted policy text to audio  button"
                  className="h-6 w-6"
                />
                <p className="font-medium text-lg text-[#A6D845]">Play audio</p>
              </button>

              {/* add your voice button */}
              <button className="flex flow-row items-center gap-x-2 bg-primaryColor px-8 py-4">
                <Megaphoneicon color="#fff" />
                {/* <img
                  src={megaphoneIcon}
                  alt="citizensrep add your voice forward arrow "
                /> */}
                <p className="text-white"> Add your voice</p>
                <ForwardArrow color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* introduction */}
      <section className=" py-20 bg-primaryColorAccent">
        <div className="container w-[80%] lg:w-full mx-auto">
          <p className="text-center text-blackColor text-[32px] tracking-tighter font-medium">
            Introduction
          </p>
          <p className="text-center text-blackColor text-base leading-[27px] mt-6">
            Championing comprehensive well-being and individual autonomy, the
            government's progressive policy on sexual reproductive health and
            rights endeavors to ensure equitable access to quality healthcare,
            education, and services, fostering informed decision-making, gender
            equality, and reproductive freedom for individuals across all
            backgrounds and circumstances
          </p>

          <button className="flex flow-row items-center  mx-auto mt-6">
            <p className="text-primaryColor font-semibold text-sm lg:text-lg">
              Learn More
            </p>
            <ForwardArrow color="#226c67" />
          </button>
        </div>
      </section>

      {/* citizens rep */}
      <section className="bg-[#FAFAFA] py-20 w-full">
        <p className="container w-[80%] lg:w-full mx-auto text-2xl font-semibold tracking-[-1.68px] text-blackColor">
          Voices
        </p>
        {/* sliding voices or policy comments */}
        <div className="w-full flex flex-row items-center mt-10 overflow-hidden">
          <div
            className="flex w-full"
            onMouseEnter={() => pauseAnimation()}
            onMouseLeave={() => playAnimation()}
          >
            {/* ist slide */}
            <div
              style={
                {
                  "--scrollWidth": `${totalOverflowingWidth + 100}px`,
                } as React.CSSProperties
              }
              className={`w-full flex flex-row flex-shrink-0 ${
                isReversed ? "animate-scroll-reverse" : "animate-scroll"
              }  cursor-pointer  `}
              // className={`w-full flex flex-row space-x-4 cursor-pointer border py-20 animate-scroll flex-shrink-0 `}
              id="animation-div"
              onClick={toggleScrollDirection}
            >
              {viewsData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-shrink-0 flex-row cursor-pointer items-start h-20 md:h-24 w-[250px] lg:w-[300px] ml-10 border-l-[3px] md:border-l-[6px] border-l-[#2A9D8F] px-2"
                  // className="flex flex-shrink-0 flex-row cursor-pointer items-start h-20 md:h-24 w-[70%] lg:w-[22%] ml-10 border-l-[3px] md:border-l-[6px] border-l-[#2A9D8F] px-2"
                  onClick={() =>
                    alert(`username: ${item.username} \nindex:${index + 1}`)
                  }
                >
                  <div className="relative w-[40%] rounded-full">
                    <img
                      src={item.imageUrl}
                      alt="CitizensRep user image"
                      className="h-[36px] w-[36px] md:h-[36px] md:w-[36px] lg:h-[42px] lg:w-[42px]"
                    />
                    <img
                      src={messageIcon}
                      alt=""
                      className="absolute bottom-1 right-0  h-4 w-4"
                    />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs md:text-sm text-[#333]">
                      {item.username}
                    </p>
                    <p className="text-xs md:text-sm font-semibold">
                      {item.policyTitle}
                    </p>
                    <p className="text-[10px] md:text-xs text-[#4F4F4F] ">
                      {item.comment.length > 97
                        ? item.comment.slice(0, 97) + "..."
                        : item.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* test slide */}
            {/* <div
              // style={
              //   {
              //     "--scrollWidth": `${totalOverflowingWidth * 2}px`,
              //   } as React.CSSProperties
              // }
              className={`w-full flex flex-row flex-shrink-0 ${
                isReversed ? "animate-scroll-reverse" : "animate-scroll"
              }  cursor-pointer border py-20  `}
              // className={`w-full flex flex-row space-x-4 cursor-pointer border py-20 animate-scroll flex-shrink-0 `}
              id="animation-div2"
              // onMouseEnter={() => pauseAnimation()}
              // onMouseLeave={() => playAnimation()}
              onClick={toggleScrollDirection}
            >
              {currentVoices.map((item, index) => (
                <div
                  key={index}
                  // className="flex flex-shrink-0 flex-row cursor-pointer items-start h-20 md:h-24 w-[250px] lg:w-[300px] ml-10 border-l-[3px] md:border-l-[6px] border-l-[#2A9D8F] px-2"
                  className="flex flex-shrink-0 flex-row cursor-pointer items-start h-20 md:h-24 w-[70%] lg:w-[22%] ml-10 border-l-[3px] md:border-l-[6px] border-l-[#2A9D8F] px-2"
                  onClick={() =>
                    alert(`username: ${item.username} \nindex:${index + 1}`)
                  }
                >
                  <img
                    src={item.imageUrl}
                    alt="CitizensRep user image"
                    className="h-[36px] w-[36px] md:h-[36px] md:w-[36px] lg:h-[42px] lg:w-[42px]"
                  />
                  <div className="ml-2">
                    <p className="text-xs md:text-sm text-[#333]">
                      {item.username}
                    </p>
                    <p className="text-xs md:text-sm font-semibold">
                      {item.policyTitle}
                    </p>
                    <p className="text-[10px] md:text-xs text-[#4F4F4F] ">
                      {item.comment.length > 97
                        ? item.comment.slice(0, 97) + "..."
                        : item.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}

            {/* test slide */}
            {/* <div
              className={`w-full bg-blue-700 flex flex-row flex-shrink-0 ${
                isReversed ? "animate-scroll-reverse" : "animate-scroll"
              } cursor-pointer border py-20  `}
              id="animation-div2"
              onClick={toggleScrollDirection}
            >
              {viewsData.map((item, index) => (
                <div
                  key={index}
                  className="flex  flex-shrink-0 flex-row cursor-pointer items-start h-20 md:h-24 w-[70%] lg:w-[30%] ml-10 border-l-[3px] md:border-l-[6px] border-l-[#2A9D8F] px-2"
                  onClick={() =>
                    alert(`username: ${item.username} \nindex:${index + 1}`)
                  }
                >
                  <img
                    src={item.imageUrl}
                    alt="CitizensRep user image"
                    className="h-[36px] w-[36px] md:h-[36px] md:w-[36px] lg:h-[42px] lg:w-[42px]"
                  />
                  <div className="ml-2">
                    <p className="text-xs md:text-sm text-[#333]">
                      {item.username}
                    </p>
                    <p className="text-xs md:text-sm font-semibold">
                      {item.policyTitle}
                    </p>
                    <p className="text-[10px] md:text-xs text-[#4F4F4F] ">
                      {item.comment.length > 97
                        ? item.comment.slice(0, 97) + "..."
                        : item.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* banner */}
      <div className="bg-primaryColorAccent py-10">
        <div className="w-[80%] lg:w-full container mx-auto ">
          <div className="flex flex-row items-center gap-x-2 justify-center">
            <img
              src={infoIcon}
              alt="Citizensrep info icon"
              className="w-14 h-14 lg:w-8 lg:h-8"
            />
            <p className="text-base text-primaryColor text-center ">
              <span className="font-semibold">DISCLAIMER:</span> The website
              owners do not endorse any specific views, statements, or content
              shared by participants on the platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyPreview;
