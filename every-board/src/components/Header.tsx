"use client";

import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: red;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: #5429ff;
`;

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Top>
      <Left>
        <Image src={"/logo.svg"} width={70} height={70} alt="logo" />
        <Title>My {title}</Title>
      </Left>
      <Right>
        <Avatar></Avatar>
        사용자
      </Right>
    </Top>
  );
}
