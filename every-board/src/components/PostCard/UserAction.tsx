import Image from "next/image";
import Comment from "./Comment";
import Reply from "./Reply";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { styled } from "styled-components";

const UserAction = ({
  comment,
  reply,
}: {
  comment?: boolean;
  reply?: boolean;
}) => {
  const [isLikeClick, setLike] = useState<Boolean>(false);
  const [isCommentClick, setComment] = useState<boolean>(false);
  return (
    <UserActionContainer className={comment ? "comment" : ""}>
      <UserActionWrap>
        <span
          onClick={() => setLike(!isLikeClick)}
          className={reply ? "reply" : ""}
        >
          {isLikeClick ? (
            <span style={{ color: "var(--pink)" }}>
              <AiFillHeart size={15} />
              <span>좋아요</span>
              <span>248</span>
            </span>
          ) : (
            <span>
              <AiFillHeart size={15} />
              <span>좋아요</span>
              <span>248</span>
            </span>
          )}
        </span>
        {reply ? null : (
          <span onClick={() => setComment(!isCommentClick)}>
            {isCommentClick ? (
              <span style={{ color: "#3742FF" }}>
                <BiCommentDetail size={15} />
                <span>댓글</span>
                <span>21</span>
              </span>
            ) : (
              <span>
                <BiCommentDetail size={15} />
                <span>댓글</span>
                <span>21</span>
              </span>
            )}
          </span>
        )}
      </UserActionWrap>
      {isCommentClick ? comment ? <Reply /> : <Comment /> : null}
      {isCommentClick ? comment ? <Reply /> : <Comment /> : null}
    </UserActionContainer>
  );
};

const UserActionContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  gap: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: #838a91;
  line-height: 14px;

  @media (min-width: 768px) {
    width: 600px;
    justify-content: flex-start;
  }
  @media (min-width: 1080px) {
    width: 900px;
  }
  @media (min-width: 1440px) {
    width: 1100px;
  }

  //댓글 좋아요, 댓글 버튼 위치 소폭 변경
  .comment,
  .reply {
    @media (min-width: 768px) {
      margin-left: 50px;
    }
  }
`;

const UserActionWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  span {
    display: flex;
    gap: 3px;
    cursor: pointer;
  }
`;

export default UserAction;
