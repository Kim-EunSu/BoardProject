"use client";
import styled from "styled-components";
import ButtonLayout from "../ButtonLayout";
import Image from "next/image";
import headerImg from "@/assets/headerImg.svg";
import { useRouter } from "next/navigation";

const Header = (): JSX.Element => {
  const router = useRouter();
  return (
    <HeaderLayout>
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
        <ButtonLayout
          text="로그인 하러가기"
          width="250px"
          height="40px"
          color="var(--pink)" // Pass the CSS variable value as a string
          backgroundcolor="#ffffff"
          fontSize="1.125rem"
          onClick={() => {
            router.push("/signin");
          }}
        />
      </TextArea>
      <ImageArea>
        <Image src={headerImg} width={500} height={320} alt="headerImage" />
      </ImageArea>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  width: 100%;
  height: 320px;
  background-color: var(--primary);
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
  padding-top: 100px;
  gap: 20px;
  h1 {
    font-size: 1.25rem;
  }
  h4 {
    display: none;
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
      display: block;
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

export default Header;
