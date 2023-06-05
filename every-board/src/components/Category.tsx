"use client";

import styled from "styled-components";
import ButtonLayout from "./ButtonLayout";

const Category = () => {
  const categories = [
    "자유게시판",
    "IT",
    "스포츠",
    "인테리어",
    "자동차",
    "투자",
    "직장",
    "음식",
    "게임",
    "닌테도",
    "비트코인",
    "여행",
    "주식",
    "맛집",
    "제주도",
    "일본",
    "해외여행",
    "사건사고",
    "프론트엔드",
    "백엔드",
    "자바",
    "타입스크립트",
    "리액트",
    "테마파크",
    "조명",
    "의자",
    "컴퓨터",
    "노트북",
  ];

  return (
    <Nav>
      <ul>
        {categories.map((el, index) => {
          return (
            <li key={index}>
              <ButtonLayout
                text={`${el}`}
                width="75px"
                height="28px"
                radius="8px"
                color="var(--primary)"
                background="#EFE9FF50"
                fontSize="0.75rem"
                border="none"
                router={`/board?category=${el}`}
              />
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Category;

const Nav = styled.nav`
  width: 350px;
  background-color: #ffffff;
  border-radius: 8px;
  height: fit-content;

  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1080px) {
    width: 980px;
  }
  @media (min-width: 1440px) {
    width: 1200px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
    gap: 8px;
    list-style: none;
    padding: 12px;
  }
`;
