"use client";
import styled from "styled-components";
import ButtonLayout from "../ButtonLayout";
import Avatar from "../Avatar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const HeaderLayout = styled.head`
  width: 100%;
  height: 320px;
  background-color: #5e66f6;
  border-radius: var(--border-radius-header);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 40px;
  }
  @media (min-width: 1080px) {
    padding: 0 100px;
  }
  @media (min-width: 1440px) {
    padding: 0 250px;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto 0;
  gap: 20px;
  h1 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    text-align: start;
    align-items: flex-start;
    padding-top: 0;

    h1 {
      min-width: 350px;
      font-size: 1.625rem;
    }
    h4 {
      min-width: 351px;
    }
  }
  @media (min-width: 1080px) {
    h1 {
      min-width: 472px;
      font-size: 2.25rem;
    }
  }
`;

const ImageArea = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const AvatarArea = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Header = (): JSX.Element => {
  const router = useRouter();
  const [isLogin, setLogin] = useState<boolean>(false);
  return (
    <HeaderLayout>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      <TextArea>
        <h1>
          당신의 커뮤니티를 연결하는 공간,
          <br />
          모두의 게시판
        </h1>
        <h4>
          모두의 게시판은 사람들이 서로 소통하고
          <br /> 정보를 공유할 수 있는 공간으로,
          <br />
          다양한 주제에 대해 자유롭게 의견을 나눌 수 있도록 하는
          <br /> 커뮤니티 플랫폼입니다.
        </h4>
        {isLogin ? (
          <ButtonLayout
            text="글 작성 하러가기"
            width="250px"
            height="40px"
            color="var(--pink)"
            background="#ffffff"
            fontSize="1.125rem"
            radius="50px"
            border="none"
            onClick={() => router.push("/board/post")}
          />
        ) : (
          <ButtonLayout
            text="로그인 하러가기"
            width="250px"
            height="40px"
            color="var(--pink)"
            background="#ffffff"
            fontSize="1.125rem"
            radius="50px"
            border="none"
            onClick={() => router.push("/signin")}
          />
        )}
      </TextArea>
      <ImageArea>
        <Image
          src={"/headerImg.svg"}
          width={500}
          height={320}
          alt="headerImage"
        />
      </ImageArea>

      <AvatarArea>
        {isLogin ? (
          <Avatar />
        ) : (
          // 로그인 기능 구현되면 지울 부분
          <ButtonLayout
            text="임시 : 로그인 상태로바꾸기"
            width="fit-content"
            height="40px"
            color="var(--pink)" // Pass the CSS variable value as a string
            background="#ffffff"
            fontSize="0.9rem"
            radius="50px"
            padding="10px"
            border="none"
            onClick={() => {
              setLogin(true);
            }}
          />
        )}
      </AvatarArea>
    </HeaderLayout>
  );
};

export default Header;
