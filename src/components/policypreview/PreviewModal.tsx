import React, { useState } from "react";
import messageIcon from "/messageicon.svg";
import TextReaderWithHighlight from "./TextReaderWithHighlight";
import {
  useGetCommentsOnPolicyQuery,
  usePostCommentMutation,
} from "../../redux/apiSlice/policyApiSlice";
import { UserDataProps } from "../interfaces/UserInterface";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
// import { useNavigate } from "react-router-dom";
import avatar from "/avatar.png";

interface PreviewModalProps {
  content: string;
  // comments: Array<Comment>;
  playAudioButtonPressed: boolean;
  handleSetPlayAudioButton: () => void;
  policyId: string;
  userData: UserDataProps;
  refetchPolicy: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  content,
  // comments,
  playAudioButtonPressed,
  handleSetPlayAudioButton,
  policyId,
  // userData,
}) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  // const navigate = useNavigate();
  const [userComment, setUserComent] = useState("");
  const [postComment, { isLoading: postingComment }] = usePostCommentMutation();
  const [errorMessage, setErrorMessage] = useState("");
  // const [showSucessModal, setShowSucessModal] = useState(false);

  const {
    data: comments,
    error,
    refetch,
    // isLoading: fetchingComments,
  } = useGetCommentsOnPolicyQuery({
    id: policyId,
    page: 1,
    limit: 11,
    search: "",
    category: "",
    createdAt: "",
  });
  const userId = userInfo ? JSON.parse(userInfo)._id : "";

  console.log("comments at preview modal ====> ", comments);
  console.log("comments error at preview modal ====> ", error);
  console.log("policyId at preview modal ====> ", policyId);

  // handle post comment
  const handlePostComment = async () => {
    if (!userComment) {
      setErrorMessage(
        "No comment has been added. Share your thoughts and join the conversation"
      );
      return;
    }
    try {
      const response = await postComment({
        policyId: policyId,
        userId: userId,
        comment: userComment,
      });
      console.log("handlePostComment res ===> ", response);

      if (response.data) {
        // setShowSucessModal(true);
        setUserComent("");
        setErrorMessage("");
        refetch();
        // setTimeout(() => {
        // setShowSucessModal(false);
        // navigate("/admin/signin", { replace: true });
        // refetch(); // refetch comments under this policy
        // }, 3700);
      }

      if ("error" in response && response.error) {
        let errorMessage = "An unexpected error occurred";
        // Check if it's a FetchBaseQueryError (API error)
        if (
          "data" in response.error &&
          typeof response.error.data === "object"
        ) {
          const errorData = response.error.data as { message?: string };
          errorMessage = errorData.message || errorMessage;
        }
        // Check if it's a SerializedError (Redux internal error)
        if ("message" in response.error) {
          errorMessage = response.error.message || errorMessage;
        }
        setErrorMessage(errorMessage);
      }
    } catch (error) {
      let errorMessage = "An unexpected error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }
      setErrorMessage(errorMessage);
    }
    // if (response.data) {
    //   setUserComent("");
    // }
  };

  return (
    <div className="relative w-full flex flex-col items-start justify-start  bg-white p-4 md:p-6 lg:px-10 lg:py-10 overflow-y-scroll">
      <TextReaderWithHighlight
        text={content}
        playAudioButtonPressed={playAudioButtonPressed}
        handleSetPlayAudioButton={handleSetPlayAudioButton}
      />

      {/* comment heading */}
      <h2 className="text-sm lg:text-base text-blackColor font-bold mt-6">
        Comments
      </h2>

      {errorMessage && (
        <p className="mt-2 text-sm text-red-500 italic">{errorMessage}</p>
      )}

      {/* comment box */}
      <div className="w-full flex flex-row items-center gap-x-2 lg:gap-x-4 mt-4">
        {/* <img src="" alt="" /> */}
        {/* user logo */}
        <div className="relative rounded-full border">
          <img
            src={"/src/assets/images/avatar.png"}
            alt="CitizensRep user image"
            className="h-[36px] w-[36px] md:h-[36px] md:w-[36px] lg:h-[42px] lg:w-[42px]"
          />
          <img
            src={messageIcon}
            alt="message icon"
            className="absolute bottom-1 right-0  h-4 w-4"
          />
        </div>
        {/* post comment */}
        <div className=" flex-1 flex flex-row gap-x-2 lg:gap-x-4 items-center justify-between border border-[#B4B7C9] rounded-md bg-[#F3F3F3] p-4 ">
          {/* comment text area a */}

          <textarea
            name="comment"
            id="comment"
            cols={30}
            rows={2}
            value={userComment}
            className="w-[75%] flex-1 text-base text-[#565973] font-semibold bg-[#F3F3F3] outline-none"
            onChange={(e) => setUserComent(e.target.value)}
          >
            Add a comment
          </textarea>
          {/* post button */}
          <button
            className="w-[25%] bg-primaryColor px-6 py-3 "
            onClick={handlePostComment}
          >
            <p className="text-white text-sm lg:text-base font-semibold">
              {postingComment ? "Loading..." : "Post"}
            </p>
          </button>
        </div>
      </div>

      {/* list comments */}
      <div className="flex w-full flex-col items-start justify-start mt-10">
        {comments?.map((item, index) => (
          <div
            key={index}
            className="h-fit w-full flex flex-row items-start justify-between gap-x-4 max-h-24 mt-6 rounded-lg  "
          >
            {/* user logo */}
            <div className="relative rounded-full ">
              <img
                src={avatar}
                alt="CitizensRep user image"
                className="h-[36px] w-[36px] md:h-[36px] md:w-[36px] lg:h-[42px] lg:w-[42px]"
              />
              <img
                src={messageIcon}
                alt=""
                className="absolute bottom-1 right-0  h-4 w-4"
              />
            </div>

            {/* title and date */}
            <div className="w-full flex flex-row items-start justify-between bg-[#EAF4F3] rounded-lg px-4 py-2 h-24 ">
              {/* <div className="w-full flex flex-row items-start justify-between gap-2 mt-2  "> */}

              <p className="max-w-[85%] h-full overflow-scroll text-wrap text-base text-[#0B0F19]">
                {item.comment}
              </p>
              <div className=" max-w-[15%] text-xs lg:text-sm">
                {new Date(item.createdAt).toLocaleDateString()}
              </div>
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewModal;
