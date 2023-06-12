"use client";

import styled from "styled-components";
import ButtonLayout from "./ButtonLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  route?: string;
  fn?: Function;
}

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

const Category = (props: Props) => {
  const { route, fn } = props;
  const [isPost, setPost] = useState<string | undefined>(route);
  const router = useRouter();
  useEffect(() => {
    if (route === "post") return setPost(route);
  }, []);
  const categories = [
    "자유게시판",
    "게임",
    "연애",
    "여행",
    "맛집",
    "패션",
    "연예인",
    "인테리어",
    "주식",
    "코인",
    "취미",
    "자동차",
    "운동",
    "취업/직장",
    "사건/사고",
    "건강",
    "IT",
    "팝업",
    "SNS",
    "반려동물",
    "다이어트",
    "K-POP",
    "가전제품",
    "중고물품",
    "해외",
    "부동산",
    "제태크",
    "뷰티",
  ];

  return (
    <Nav>
      <ul>
        {categories.map((el, index) => {
          return (
            <li key={index}>
              {route === "home" || route === "board" ? (
                <ButtonLayout
                  text={`${el}`}
                  width="75px"
                  height="28px"
                  radius="8px"
                  color="var(--primary)"
                  background="#EFE9FF50"
                  fontSize="0.75rem"
                  border="none"
                  onClick={() => {
                    router.push(`/board?category=${el}`);
                  }}
                />
              ) : (
                <ButtonLayout
                  text={`${el}`}
                  width="75px"
                  height="28px"
                  radius="8px"
                  color="var(--primary)"
                  background="#EFE9FF50"
                  fontSize="0.75rem"
                  border="none"
                  onClick={() => {
                    fn ? fn(el) : undefined;
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Category;
