import { useState } from "react";
import messageIcon from "../../assets/icons/messageicon.svg";

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

const CitizenVoices = () => {
  const [isReversed, setIsReversed] = useState(false);

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

  return (
    <>
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
    </>
  );
};

export default CitizenVoices;
