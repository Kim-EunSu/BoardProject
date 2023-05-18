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
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
    "일본",
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
  height: fit-content;
  margin: 40px auto;

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
    gap: 8px;
    list-style: none;
    padding: 12px;
    margin: 0 auto;
  }
`;
