"use client";

import styled from "styled-components";
import ButtonLayout from "../ButtonLayout";
import Avatar from "../Avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
<<<<<<< HEAD
import Head from "next/head";
=======
import axios from "axios";
>>>>>>> upstream/EunSu
=======
import axios from "axios";
>>>>>>> upstream/EunSu

const HeaderLayout = styled.header`
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
  display: flex;
  top: 20px;
  right: 20px;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
`;

const UserWrapper = styled.div`
  display: flex;
  width: 150px;
  height: 60px;
  padding: 10px;
  border-radius: 25px;
  background: white;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const UserNickname = styled.span`
  color: black;
  font-weight: 500;
`;

const Header = (): JSX.Element => {
  const router = useRouter();
  const [isLogin, setLogin] = useState<boolean>(false);
  const [Nickname, setNickname] = useState<string>("");

  //이부분이 있어야 로그인했을때 저장된 token을 가져와짐!
  useEffect(() => {
    const ACCESS_TOKEN = sessionStorage.getItem("Authorization");
    const USER_ID = sessionStorage.getItem("userId");

    if (ACCESS_TOKEN && USER_ID) {
      setLogin(true);
      axios
        .get(`https://every-board.shop/user/${USER_ID}/nickname`)
        .then(function (res) {
          setNickname(res.data.nickname);
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      setLogin(false);
      setNickname("");
    }
  }, []);

  //로그아웃할때 token삭제
  const handleLogout = () => {
    sessionStorage.removeItem("Authorization");
    setLogin(false);
    router.push("/");
  };

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
          <>
            <UserWrapper>
              <Avatar />
              <UserNickname>
                {Nickname && <span>{Nickname}</span>}님
              </UserNickname>
            </UserWrapper>
            <ButtonLayout
              text="로그아웃"
              width="100px"
              height="40px"
              color="var(--pink)"
              background="#ffffff"
              fontSize="1rem"
              radius="50px"
              border="none"
              onClick={handleLogout}
            ></ButtonLayout>
          </>
        ) : null}
      </AvatarArea>
    </HeaderLayout>
  );
};

export default Header;
