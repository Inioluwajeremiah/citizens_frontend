import React, { useMemo, useState } from "react";
import cloudicon from "../../assets/icons/cloudicon.svg";
import closeicon from "../../assets/icons/closeicon.svg";
import { useUploadFileMutation } from "../../redux/apiSlice/uploadFileApi";
import Modal from "../../components/Modal";
import SuccessAlert from "../../components/SuccessAlert";

interface UploadImageModalProp {
  handleShowUploadImageModal: () => void;
  getImageUrl: (url: string) => void;
}

// useMemo(()=> {

// })
const UploadImageModal = ({
  handleShowUploadImageModal,
  getImageUrl,
}: UploadImageModalProp) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadFile, { isLoading }] = useUploadFileMutation();
  const [showSucessModal, setShowSucessModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showParentModal, setShowParentModal] = useState(false);

  if (!showModal) {
    return null;
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSelectImage = () => {
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) fileInput.click();
  };

  const handleUploadImage = async () => {
    console.log("selectedFile ===> ", selectedFile);
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile); // Must match the field name "image" in backend
      try {
        const { imageUrl } = await uploadFile(formData).unwrap();
        getImageUrl(imageUrl);
        setShowSucessModal(true);
        setTimeout(() => {
          setShowSucessModal(false);
          setShowModal(false);
          setShowParentModal(false);
          handleCloseAllModal();
        }, 2000);

        console.log("res imageUrl ===> ", imageUrl);
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
  };

  const handleCloseAllModal = () => {
    setShowSucessModal(false);
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm w-screen h-screen bg-black/30 z-10">
      <div className="relative w-[80%] md:w-[65%] lg:w-[45%] max-h-[80%] h-fit flex flex-col justify-center items-center mt-10 mx-auto">
        <div className="relative w-full mx-auto flex flex-col items-start justify-start  bg-white p-4 md:p-6 lg:px-20 lg:py-20 overflow-y-scroll">
          {/*  title */}
          <h3 className="w-full text-blackColor text-xl md:text-2xl lg:text-[28px] font-semibold text-center ">
            Upload Image
          </h3>

          <div className="bg-[#ECFBF9] border-2 border-dashed border-[#0A6A69] my-10 px-10 py-20  w-full flex flex-col items-center justify-center">
            {preview ? (
              <div className="preview mt-4">
                <img
                  src={preview}
                  alt="Selected preview"
                  className="w-40 h-40 object-cover rounded-md border"
                />
              </div>
            ) : (
              <img src={cloudicon} alt="cloud image icon" />
            )}

            <input
              id="file-input"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <div className="flex flex-row items-center justify-center mt-8">
              <p className="text-base text-blackColor font-semibold">
                Drag & drop files or{" "}
                <span
                  aria-label="button"
                  className="text-base font-semibold text-primaryColor cursor-pointer"
                  onClick={handleSelectImage}
                >
                  Browse
                </span>
              </p>
            </div>
            <p className="tex-xs text-[#676767] mt-6">
              Supported formates: JPEG, PNG
            </p>
          </div>

          {/* upload image */}
          <button
            disabled={preview ? false : true}
            className={`w-full mx-auto ${
              preview ? "bg-primaryColor" : "bg-[#0A6A69A3]"
            }`}
            onClick={handleUploadImage}
          >
            <p className="text-white font-semibold text-base py-4">
              {isLoading ? "Loading..." : "Upload"}
            </p>
          </button>

          {/* close icon */}
          <button
            className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-400"
            onClick={handleShowUploadImageModal}
          >
            <img
              src={closeicon}
              alt="close upload image modal"
              className="justify-center mx-auto"
            />
          </button>
        </div>
      </div>

      {showSucessModal && (
        <Modal closeAllModal={handleCloseAllModal}>
          <SuccessAlert message="Image upload successful!" />
        </Modal>
      )}
    </div>
  );
};

export default UploadImageModal;
