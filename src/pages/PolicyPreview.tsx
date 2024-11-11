import ForwardArrow from "../assets/icons/ForwardArrow";
import playIcon from "../assets/icons/playicon.svg";
import infoIcon from "../assets/icons/infoicon.svg";
import Megaphoneicon from "../assets/icons/Megaphoneicon";
import CitizensResponse from "../components/policypreview/CitizensResponse";
import CitizenVoices from "../components/policypreview/CitizenVoices";
import CitizenReport from "../components/policypreview/CitizenReport";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import SuccessAlert from "../components/SuccessAlert";
import PreviewModal from "../components/policypreview/PreviewModal";
import { RootState } from "../redux/store";
import { UserDataProps } from "../components/interfaces/UserInterface";
import { decryptWithRSA } from "../utils/subtlecrypto";
import { useUpdatePolicyViewsMutation } from "../redux/apiSlice/policyApiSlice";

const content =
  "Sexual reproductive health rights (SRHR) are fundamental human rights that encompass a broad spectrum of issues related to sexuality, reproduction, and overall well-being. Recognized internationally, these rights emphasize the importance of providing individuals with access to comprehensive healthcare, education, and information, enabling them to make informed decisions about their sexual and reproductive lives. While significant progress has been made over the years, there remain numerous challenges and barriers to ensuring universal access to SRHR for all individuals around the world. This article delves into the importance of SRHR, its impact on individual lives and societies, the barriers faced, and the way forward to promote a more equitable and inclusive future. 1. Understanding Sexual Reproductive Health Rights At its core, SRHR embodies the notion that all individuals have the right to maintain their sexual health and well-being without discrimination or coercion. This includes access to essential services such as family planning, contraceptive options, maternal healthcare, prevention and treatment of sexually transmitted infections (STIs), and safe abortion services, where legal. Additionally, SRHR advocates for comprehensive sexual education, free from stigma and misinformation, to empower individuals to make responsible and informed choices regarding their bodies and reproductive choices. 2. Empowering Individuals through Education Education plays a crucial role in promoting SRHR. Comprehensive sexual education equips individuals with the knowledge and skills to understand their bodies, foster healthy relationships, prevent unwanted pregnancies and STIs, and make informed decisions about their sexual lives. However, in many parts of the world, access to comprehensive sexual education remains limited due to cultural, religious, or political reasons. It is imperative that policymakers and educational institutions recognize the significance of comprehensive sexual education in fostering responsible behavior, reducing teenage pregnancies, and preventing the spread of STIs.";

const comments = [
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
  {
    title: "Ralph Edwards",
    description:
      "In mauris porttitor tincidunt mauris massa sit lorem sed scelerisque. Fringilla pharetra vel massa enim sollicitudin cras. At pulvinar eget sociis adipiscing eget donec ultricies nibh tristique.",
    date: "Aug 19, 2021",
    imageUrl: "/src/assets/images/avatar.png",
  },
];

const PolicyPreview = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const { state } = useLocation();
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSucessModal, setShowSucessModal] = useState(false);
  const [playButtonPressed, setPlayButtonPressed] = useState(false);
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserDataProps>({});

  const [updatePolicyViews, { isLoading: loadingViews }] =
    useUpdatePolicyViewsMutation();

  const policyDescription = state?.description.replace(/<[^>]+>/g, "");
  const decryptData = async () => {
    const decryptedText = await decryptWithRSA(
      import.meta.env.VITE_PRIVATE_KEY,
      userInfo
    );
    console.log("decryptedText ===> ", decryptedText);
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

  // update policy views

  useEffect(() => {
    const handleUpdatePolicyView = async () => {
      console.log("policy id ==> ", state._id);

      const res = await updatePolicyViews({ policyId: state._id });
      console.log("updatePolicyView res ===> ", res);
    };
    handleUpdatePolicyView();
  }, [state]);

  useEffect(() => {
    decryptData();
  }, [userInfo]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePlayAudioButton = () => {
    setShowFullPreview(true);
    setPlayButtonPressed(true);
  };

  const handleSetPlayAudioButton = () => {
    setPlayButtonPressed(false);
  };
  const handleToggleSigninModal = () => {
    setShowSignUpModal(false);
    setShowFullPreview(false);
    setShowSignInModal(!showSignInModal);
  };

  const handleToggleSignupModal = () => {
    setShowSignInModal(false);
    setShowFullPreview(false);
    setShowSignUpModal(!showSignUpModal);
  };

  const handleToggleFullPreviewModal = () => {
    setShowSignInModal(false);
    setShowSignUpModal(false);
    setShowFullPreview(!showFullPreview);
  };

  const handleSuccessModal = () => {
    setShowSucessModal(!showSucessModal);
  };
  const handleTouchMove = (e: any) => {
    e.preventDefault();
  };
  const handleCloseAllModal = () => {
    setShowSignUpModal(false);
    setShowFullPreview(false);
    setShowSignInModal(false);
    handleSetPlayAudioButton();
  };

  useEffect(() => {
    if (
      showFullPreview ||
      showSignInModal ||
      showSignUpModal ||
      showSucessModal
    ) {
      document.body.style.overflow = "hidden";
      // Additional touch event handling for mobile

      // Add event listeners to prevent touch move on mobile
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [showModal]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setShowSucessModal(true);
      // if (showSucessModal) {
      //   handleCloseAllModal();
      // }
    }, 5000);
    return () => clearTimeout(timeout);
  });

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
          <div className=" w-[80%] lg:w-full container mx-auto h-full  flex flex-col justify-center  ">
            <p className="text-[40px] text-white leading-[70px] w-[50%] md:w-[40%] lg:w-[25%] font-medium tracking-[-1.6px]">
              {/* {     Sexual Reproductive health and right} */}
              {state?.title}
            </p>
            <div className="mt-10 flex flex-row items-center justify-between">
              {/* play audio button  */}
              <button
                className="flex flow-row items-center gap-x-2"
                onClick={handlePlayAudioButton}
              >
                <img
                  src={playIcon}
                  alt="citizensrep play converted policy text to audio  button"
                  className="h-6 w-6"
                />
                <p className="font-medium text-lg text-[#A6D845]">Play audio</p>
              </button>

              {/* add your voice button */}
              {userInfo ? (
                <Link
                  to="/add-your-voice"
                  state={{ policyData: state, userData: userData }}
                  className="flex flow-row items-center gap-x-2 bg-primaryColor px-8 py-4"
                >
                  <Megaphoneicon color="#fff" />

                  <p className="text-white"> Add your voice</p>
                  <ForwardArrow color="#fff" />
                </Link>
              ) : (
                <button
                  onClick={handleToggleSigninModal}
                  className="flex flow-row items-center gap-x-2 bg-primaryColor px-8 py-4"
                >
                  <Megaphoneicon color="#fff" />
                  {/* <img
                src={megaphoneIcon}
                alt="citizensrep add your voice forward arrow "
              /> */}
                  <p className="text-white"> Add your voice</p>
                  <ForwardArrow color="#fff" />
                </button>
              )}
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
            {/* { Championing comprehensive well-being and individual autonomy, the
            government's progressive policy on sexual reproductive health and
            rights endeavors to ensure equitable access to quality healthcare,
            education, and services, fostering informed decision-making, gender
            equality, and reproductive freedom for individuals across all
            backgrounds and circumstances} */}
            {policyDescription?.length > 200
              ? policyDescription.slice(0, 200) + "..."
              : policyDescription}
          </p>

          <button
            className="flex flow-row items-center  mx-auto mt-6"
            onClick={handleToggleFullPreviewModal}
          >
            <p className="text-primaryColor font-semibold text-sm lg:text-lg">
              Learn More
            </p>
            <ForwardArrow color="#226c67" />
          </button>
        </div>
      </section>

      {/* citizens rep */}
      <section className="bg-[#FAFAFA] py-20 w-full">
        <CitizensResponse data={data} />
        <CitizenVoices />
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

      {/* citizens report */}
      <CitizenReport />

      {showSignInModal && (
        <Modal closeAllModal={handleCloseAllModal}>
          <Signin
            onPressSignup={handleToggleSignupModal}
            closeSigninModal={handleToggleSigninModal}
            setShowSucessModal={handleSuccessModal}
          />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal closeAllModal={handleCloseAllModal}>
          <Signup
            onPressLogin={handleToggleSigninModal}
            closeSignupModal={handleToggleSignupModal}
            setShowSucessModal={handleSuccessModal}
          />
        </Modal>
      )}
      {showFullPreview && (
        <Modal closeAllModal={handleCloseAllModal}>
          <PreviewModal
            content={content}
            comments={comments}
            playAudioButtonPressed={playButtonPressed}
            handleSetPlayAudioButton={handleSetPlayAudioButton}
          />
        </Modal>
      )}

      {showSucessModal && (
        <Modal closeAllModal={handleCloseAllModal}>
          <SuccessAlert message="Log in successful!" />
        </Modal>
      )}
    </>
  );
};

export default PolicyPreview;
