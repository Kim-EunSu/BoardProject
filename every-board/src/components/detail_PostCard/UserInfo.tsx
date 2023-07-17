import Image from "next/image";
import ButtonLayout from "../ButtonLayout";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styled from "styled-components";
import { useState } from "react";
import { useGetUserInfo } from "@/utils/api";
import { useCreatedAtFormat } from "@/utils/customHooks";

const UserInfoWrap = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px 0;

  @media (min-width: 768px) {
    width: 600px;
  }
<<<<<<< HEAD
<<<<<<< HEAD
  @media (min-width: 1080px) {
    width: 900px;
  }
=======
=======
>>>>>>> upstream/EunSu

  @media (min-width: 1080px) {
    width: 900px;
  }

<<<<<<< HEAD
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu
  @media (min-width: 1440px) {
    width: 1100px;
  }

  .star {
    width: 18px;
    height: 18px;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextArea = styled.span`
  display: flex;
  flex-direction: column;
  .nickname {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/EunSu
interface Props {
  userId: number | undefined | null;
  createdAt: string | undefined;
}

const UserInfo = (props: Props) => {
  const { userId, createdAt } = props;
  const [isscrap, setScrap] = useState<boolean>(false);
  const { data } = useGetUserInfo(userId);
  const formattedCreatedAt = useCreatedAtFormat(createdAt);
<<<<<<< HEAD
=======
type ContentImage = {
  contentId: number;
  contentImageId: number;
  contentImgUrl: string;
};

type IPost = {
  category: string;
  comments: any[];
  content: string;
  contentHeartCount: number;
  contentId: number;
  contentImages: ContentImage[];
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  profileUrl: { [key: string]: any }[];
  title: string;
  userId: number;
  viewCount: number;
};

type Props = {
  postData: IPost | null;
};

const UserInfo = (props: Props) => {
  const [isscrap, setScrap] = useState<boolean>(false);

  const { postData } = props;
>>>>>>> upstream/EunSu

  //날짜변환
  const formatDate = (datestring: string | undefined) => {
    if (!datestring) return "";
    const date = new Date(datestring);
    const Year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDay().toString().padStart(2, "0");

    return `${Year}-${month}-${day}`;
  };
=======
>>>>>>> upstream/EunSu

  return (
    <UserInfoWrap>
      <User>
        <Image
          src={"/frame.png"}
          width={40}
          height={40}
          alt="프로필 사진"
          style={{ borderRadius: "50px" }}
        />
        <TextArea>
<<<<<<< HEAD
<<<<<<< HEAD
          <span className="nickname">{data?.nickname}</span>
          <span>{formattedCreatedAt}</span>
=======
          <span className="nickname">{postData?.nickname}</span>
<<<<<<< HEAD
          <span>{postData?.createdAt}</span>
>>>>>>> upstream/EunSu
=======
          <span>{formatDate(postData?.createdAt)}</span>
>>>>>>> upstream/EunSu
=======
          <span className="nickname">{data?.nickname}</span>
          <span>{formattedCreatedAt}</span>
>>>>>>> upstream/EunSu
        </TextArea>
      </User>
      <div onClick={() => setScrap(!isscrap)}>
        {isscrap ? (
          <ButtonLayout
            text={[<AiOutlineStar key="stars" className="star" />, "스크랩"]}
            width="65px"
            height="30px"
            color="var(--primary)"
            background="#ffffff"
            border="solid 2px var(--primary)"
            radius="4px"
          />
        ) : (
          <ButtonLayout
            text={[<AiFillStar key="fill-stars" className="star" />, "스크랩"]}
            width="65px"
            height="30px"
            color="#ffffff"
            background="var(--primary)"
            border="solid 2px var(--primary)"
            radius="4px"
          />
        )}
      </div>
    </UserInfoWrap>
  );
};

export default UserInfo;
