"use client";

import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin: 0 20px;

  &:first-child {
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Image src={"/logo.svg"} width={20} height={20} alt="footer로고" />
        <ContentWrapper>
          <Content>모두의 게시판</Content>
          <Content>Github</Content>
          <Content>z1nun</Content>
          <Content>Kim-EunSu</Content>
          <Content>Kangharyeom</Content>
          <Content>eehres </Content>
          <Content>Yujin_Choi </Content>
          <Content style={{ color: "#FC0374" }}>since, 2023.05 </Content>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
