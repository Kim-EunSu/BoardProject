"use client";
import React from "react";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  gap: 3px;
`;

const ContentWrapper = styled.div`
  color: var(--primary);
  font-weight: 600;
  display: flex;
  gap: 20px;
  margin: 10px;

  div {
    display: flex;
    gap: 20px;
    span {
      cursor: pointer;
    }
  }

  .github {
    display: none;
    @media (min-width: 1080px) {
      color: #323c47;
      font-weight: 400;
      display: flex;
      gap: 20px;
    }
  }

  .every-board {
    text-decoration: none;
  }
  .every-board:visited {
    color: var(--primary);
  }

  .link {
    text-decoration: none;
  }
  .link:visited {
    color: #323c47;
  }
`;

export default function Footer() {
  const scrollToTop = () => window.scrollTo(0, 0);
  return (
    <Wrapper>
      <Image
        src={"/logo.svg"}
        width={30}
        height={30}
        alt="footer로고"
        onClick={scrollToTop}
        style={{ cursor: "pointer" }}
      />
      <ContentWrapper>
        <div>
          <span onClick={scrollToTop}>모두의 게시판</span>
          <Link
            href="https://github.com/orgs/Every-Board/repositories"
            className="every-board"
          >
            Github
          </Link>
        </div>
        <div className="github">
          <Link href="https://github.com/z1nun" className="link">
            z1nun
          </Link>
          <Link href="https://github.com/Kim-EunSu" className="link">
            Kim-EunSu
          </Link>
          <Link href="https://github.com/Kangharyeom" className="link">
            Kangharyeom
          </Link>
          <Link href="https://github.com/eehres" className="link">
            eehres
          </Link>
          <Link href="https://github.com/Choiyu330" className="link">
            Yujin_Choi
          </Link>
          <span style={{ color: "#FC0374" }}>since, 2023.05</span>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}
