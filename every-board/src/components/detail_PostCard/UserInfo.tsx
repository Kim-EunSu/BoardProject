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

  @media (min-width: 1080px) {
    width: 900px;
  }

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

interface Props {
  userId: number | undefined | null;
  createdAt: string | undefined;
}

const UserInfo = (props: Props) => {
  const { userId, createdAt } = props;
  const [isscrap, setScrap] = useState<boolean>(false);
  const { data } = useGetUserInfo(userId);
  const formattedCreatedAt = useCreatedAtFormat(createdAt);

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
          <span className="nickname">{data?.nickname}</span>
          <span>{formattedCreatedAt}</span>
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
