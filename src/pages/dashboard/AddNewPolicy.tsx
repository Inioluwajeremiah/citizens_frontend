// import { Editor } from "@tinymce/tinymce-react";

import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import SuccessAlert from "../../components/SuccessAlert";
import { useCreatePolicyMutation } from "../../redux/apiSlice/policyApiSlice";
import UploadImageModal from "./UploadImageModal";
import imageicon from "../../assets/icons/image.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { decryptWithRSA } from "../../utils/subtlecrypto";
import { UserDataProps } from "../../components/interfaces/UserInterface";

const AddNewPolicy = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const [userData, setUserData] = useState<UserDataProps>({});
  const [errorIndex, setErrorIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [associatedPolicy, setAssociatePolicy] = useState("");
  const [demand, setDemand] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showUploadImageModal, setShowUploadImageModal] = useState(false);
  const [showSucessModal, setShowSucessModal] = useState(false);

  const [createPolicy, { isLoading }] = useCreatePolicyMutation();

  const validData = title && category && description && imageUrl;

  const getImageUrl = (imageurl: string) => {
    console.log("policy image url ===> ", imageurl);

    setImageUrl(imageurl);
  };

  const handleSubmit = async () => {
    try {
      if (!title) {
        setErrorIndex(1);
      } else if (!category) {
        setErrorIndex(2);
      } else if (!imageUrl) {
        setErrorIndex(3);
      } else if (!description) {
        setErrorIndex(4);
      } else {
        const res = await createPolicy({
          userId: userData?._id || "",
          title: title,
          demand: demand,
          associatedPolicy: associatedPolicy,
          category: category,
          description: description,
          imageUrl: imageUrl,
        });
        if (res.data) {
          setShowSucessModal(true);
          setTitle("");
          setCategory("");
          setDemand("");
          setAssociatePolicy("");
          setImageUrl("");
          setDescription("");
          setTimeout(() => {
            setShowSucessModal(false);
          }, 2000);
        }
      }

      //   console.log("response ===> ", res);
    } catch (error) {
      console.log("sign up catch error ==> ", error);
    }
  };

  const handleShowUploadImageModal = () => {
    setShowUploadImageModal(!showUploadImageModal);
  };

  const decryptData = async () => {
    const decryptedText = await decryptWithRSA(
      import.meta.env.VITE_PRIVATE_KEY,
      userInfo
    );
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

  useEffect(() => {
    decryptData();
  }, [userInfo]);

  return (
    <div className="py-10">
      {/* header 1 */}
      <header className="h-14 border-b mx-10">
        <h1 className="text-2xl text-blackColor  font-semibold ">
          Hello Admin
        </h1>
      </header>

      {/* header 2 */}
      <div className="border-b pb-4 mt-10  mb-6 mx-10">
        <h2 className="text-xl font-semibold tracking-[-0.4px] leading-7">
          Create New Policy
        </h2>
        <p className="text-black text-[13px]">Proposal Template</p>
      </div>

      {/* create policy form */}
      <div aria-label="form" className="w-[60%] mx-10 mt-10">
        <label htmlFor="username" className="text-sm ">
          1. Title
        </label>
        <input
          type="text"
          name="username"
          value={title}
          id="username"
          placeholder="Username"
          className={`mt-2 mb-6 border w-full p-4 outline-none focus:border-primaryColor text-sm bg-[#FCFCFD] ${
            errorIndex === 1 && "border-red-500"
          }`}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="email" className=" text-sm">
          2. Tag
        </label>
        <select
          className={`mt-2 mb-6 border w-full p-4  outline-none focus:border-primaryColor text-sm bg-[#FCFCFD] ${
            errorIndex === 2 && "border-red-500"
          }`}
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="education" className="py-1 text-sm">
            Education
          </option>
          <option value="category1" className="py-1 text-sm">
            category1
          </option>
          <option value="category1" className="py-1 text-sm">
            category1
          </option>
          <option value="category1" className="py-1 text-sm">
            category1
          </option>
          <option value="category1" className="py-1 text-sm">
            category1
          </option>
        </select>
        {/* 3. description */}
        <label htmlFor="password" className=" text-sm ">
          3. Demand
        </label>
        <input
          type="text"
          name="demand"
          value={title}
          id="demand"
          placeholder="Demand"
          className={`mt-2 mb-6 border w-full p-4 outline-none focus:border-primaryColor text-sm bg-[#FCFCFD] ${
            errorIndex === 2 && "border-red-500"
          }`}
          onChange={(e) => setDemand(e.target.value)}
        />
        <label htmlFor="password" className=" text-sm ">
          4. Policy
        </label>
        <input
          type="text"
          name="associatePolicy"
          value={title}
          id="associatePolicy"
          placeholder="Policy"
          className={`mt-2 mb-6 border w-full p-4 outline-none focus:border-primaryColor text-sm bg-[#FCFCFD] ${
            errorIndex === 3 && "border-red-500"
          }`}
          onChange={(e) => setAssociatePolicy(e.target.value)}
        />
        <label htmlFor="password" className=" text-sm ">
          5. Description
        </label>
        <textarea
          name="description"
          value={description}
          id="description"
          placeholder="Description"
          cols={8}
          rows={5}
          className={`mt-2 mb-6 border w-full p-4 outline-none focus:border-primaryColor text-sm bg-[#FCFCFD] ${
            errorIndex === 4 && "border-red-500"
          }`}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <p className="mt-2"></p> */}
        {/* <Editor
          apiKey="y96gd1h1ls6ru235q03dntkvp2d5vzj0r64jag037t9m4f1e"
          init={{
            plugins: [
              // Core editing features
              "anchor",
              "autolink",
              "charmap",
              "codesample",
              "emoticons",
              "image",
              "link",
              "lists",
              "media",
              "searchreplace",
              "table",
              "visualblocks",
              "wordcount",
              // Your account includes a free trial of TinyMCE premium features
              // Try the most popular premium features until Nov 21, 2024:
              "checklist",
              "mediaembed",
              "casechange",
              "export",
              "formatpainter",
              "pageembed",
              "a11ychecker",
              "tinymcespellchecker",
              "permanentpen",
              "powerpaste",
              "advtable",
              "advcode",
              "editimage",
              "advtemplate",
              "ai",
              "mentions",
              "tinycomments",
              "tableofcontents",
              "footnotes",
              "mergetags",
              "autocorrect",
              "typography",
              "inlinecss",
              "markdown",
              // Early access to document converters
              "importword",
              "exportword",
              "exportpdf",
            ],
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            exportpdf_converter_options: {
              format: "Letter",
              margin_top: "1in",
              margin_right: "1in",
              margin_bottom: "1in",
              margin_left: "1in",
            },
            exportword_converter_options: { document: { size: "Letter" } },
            importword_converter_options: {
              formatting: {
                styles: "inline",
                resets: "inline",
                defaults: "inline",
              },
            },
          }}
          initialValue=""
          onEditorChange={(e) => setDescription(e)}
        /> */}
        {/* <p className="mt-6"></p> */}
        <label htmlFor="password" className=" text-sm ">
          3. Add Image
        </label>{" "}
        <br />
        <button
          className={`w-full mt-2 border-2 border-dashed h-20 flex flex-row items-center justify-center ${
            imageUrl && "border-primaryColor"
          }`}
          onClick={handleShowUploadImageModal}
        >
          <img
            src={imageicon}
            alt="upload image icon"
            className="text-center"
          />
        </button>
        {/* submit button */}
        <button
          disabled={validData ? false : true}
          className={`flex mx-auto w-[40%] px-10 py-4 mt-10  " ${
            validData ? "bg-primaryColor" : "bg-[#0A6A69A3]"
          }`}
          onClick={handleSubmit}
        >
          <p className="text-sm font-semibold text-white text-center w-full">
            {isLoading ? "Loading..." : "Submit"}
          </p>
        </button>
      </div>

      {/* success alert modal */}
      {showSuccessDialog && (
        <Modal
          children={<SuccessAlert message="Policy added successfully" />}
          closeAllModal={() => setShowSuccessDialog(false)}
        />
      )}

      {/* show upload image  */}
      {showUploadImageModal && (
        <UploadImageModal
          handleShowUploadImageModal={handleShowUploadImageModal}
          getImageUrl={getImageUrl}
        />
      )}
      {/* success alert modal */}
      {showSucessModal && (
        <Modal
          closeAllModal={() => setShowSuccessDialog(false)}
          closeModal={showSucessModal}
        >
          <SuccessAlert message="Policy created successfully!" />
        </Modal>
      )}
    </div>
  );
};

export default AddNewPolicy;
