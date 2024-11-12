import { useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import PreviewModal from "../components/policypreview/PreviewModal";
import { useState } from "react";
import EducationForm from "../forms/EducationForm";

const AddYourVoice = () => {
  const location = useLocation();
  const { policyData, userData } = location.state;

  const [showFullPreview, setShowFullPreview] = useState(false);

  const policyDescription = policyData.description.replace(/<[^>]+>/g, "");

  return (
    <>
      <section
        className="w-full mt-20 h-[467px] relative  bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('${policyData.imageUrl}')`,
        }}
      >
        <div className="absolute h-[467px]  top-0 inset-0 bg-gradient-to-b from-[rgba(11,29,43,0)] to-[rgba(11,29,43,1)] z-10">
          <div className=" w-[80%] lg:w-full container mx-auto h-full  flex flex-col justify-end  ">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-10">
              <p className="text-[40px] text-center md:text-left text-white leading-[70px] w-[80%] md:w-[40%] lg:w-[25%] font-medium tracking-[-1.6px]">
                {/* {     Sexual Reproductive health and right} */}
                {policyData?.title}
              </p>
              <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
                <h1 className="text-2xl text-center md:text-left font-semibold text-white tracking-[-1.68px]">
                  Introduction
                </h1>
                <p className="text-base text-white mt-2">
                  {policyDescription.lenght > 200
                    ? policyDescription.slice(0, 200) + "..."
                    : policyDescription}
                </p>

                <button
                  onClick={() => setShowFullPreview(!showFullPreview)}
                  className="mt-4 text-center md:text-left"
                >
                  <p className="text-base text-[#86F0A4] font-semibold ">
                    Read more
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* form section */}
      <section className="w-full ">
        <div className="h-[438px] bg-primaryColorAccent"></div>
        <div className="container relative w-full md:w-[80%] lg:w-full mx-auto ">
          {/* form container */}
          <div className="  w-[80%] lg:w-[60%] mx-auto -mt-[380px] bg-white p-4 md:p-10 ">
            <EducationForm
              policyId={policyData._id}
              userData={userData}
              policyTitle={policyData.title}
              policyCategory={policyData.category}
            />
            {/* education form */}
            {/* {policyData.category === "education" && (
              <EducationForm
                policyId={policyData._id}
                usertData={userData}
                policyTitle={policyData.title}
              />
            )} */}
            {/* women in politics forms */}
          </div>
        </div>
      </section>
      {showFullPreview && (
        <Modal closeAllModal={() => setShowFullPreview(false)}>
          <PreviewModal
            content={policyData.description}
            comments={policyData.comments}
            playAudioButtonPressed={false}
            handleSetPlayAudioButton={() => null}
            policyId={policyData?.data?._id}
            userData={userData}
            refetchPolicy={() => null}
          />
        </Modal>
      )}
    </>
  );
};

export default AddYourVoice;
