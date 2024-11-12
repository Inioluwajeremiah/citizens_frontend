import React, { useState } from "react";
import messageIcon from "../../assets/icons/messageicon.svg";
import TextReaderWithHighlight from "./TextReaderWithHighlight";
import { usePostCommentMutation } from "../../redux/apiSlice/policyApiSlice";
import { UserDataProps } from "../interfaces/UserInterface";

interface Comment {
  userId: string;
  comment: string;
  timestamp: string;
  _id: string;
}

interface PreviewModalProps {
  content: string;
  comments: Array<Comment>;
  playAudioButtonPressed: boolean;
  handleSetPlayAudioButton: () => void;
  policyId: string;
  userData: UserDataProps;
  refetchPolicy: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  content,
  comments,
  playAudioButtonPressed,
  handleSetPlayAudioButton,
  policyId,
  userData,
}) => {
  const [userComment, setUserComent] = useState("");
  const [postComment, { isLoading: postingComment }] = usePostCommentMutation();

  const handlePostComment = async () => {
    const res = await postComment({
      id: policyId,
      userId: userData._id,
      comment: userComment,
    });
    console.log("handlePostComment res ===> ", res);

    if (res.data) {
      setUserComent("");
      // refetchPolicy();
    }
  };

  console.log("comments at preview modal ====> ", comments);

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
            alt=""
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
        {comments.map((item, index) => (
          <div
            key={index}
            className="h-fit w-full flex flex-row items-start justify-between gap-x-4 max-h-24 mt-6 rounded-lg  "
          >
            {/* user logo */}

            <div className="relative rounded-full ">
              <img
                src={"/src/assets/images/avatar.png"}
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
            <div className="w-full flex flex-1 flex-col items-start  bg-[#EAF4F3] rounded-lg px-4 py-2 max-h-24 overflow-y-scroll">
              <div className="w-full flex flex-row items-start justify-between mt-2 ">
                <h6 className="text-blackColor font-bold text-sm lg:text-base">
                  {userData.username}
                </h6>
                <p className="text-xs lg:text-sm mt-2">
                  {new Date(item.timestamp).toLocaleDateString()}
                </p>
              </div>

              <p className="text-base mt-4 text-[#0B0F19]">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewModal;
