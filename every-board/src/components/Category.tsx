"use client";

import styled from "styled-components";
import ButtonLayout from "./ButtonLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  post?: string;
  home?: string;
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
  const { post, home, fn } = props;
  const [isPost, setPost] = useState<string | undefined>(home);
  const router = useRouter();
  useEffect(() => {
    if (post) return setPost(post);
  }, []);
  const categories = [
    "자유게시판",
    "뷰티",
    "직장",
    "팝업",
    "반려동물",
    "취미",
    "다이어트",
    "맛집",
    "SNS",
    "인테리어",
    "여행",
    "연예인",
    "건강",
    "코인",
    "운동",
    "케이팝",
    "IT",
    "제태크",
    "가전제품",
    "부동산",
    "게임",
    "중고물품",
    "사건사고",
    "자동차",
    "해외",
    "주식",
    "자유게시판",
    "연애",
    "패션",
  ];

  return (
    <Nav>
      <ul>
        {categories.map((el, index) => {
          return (
            <li key={index}>
              {home ? (
                <ButtonLayout
                  text={`${el}`}
                  width="75px"
                  height="28px"
                  radius="8px"
                  color="var(--primary)"
                  background="#EFE9FF50"
                  fontSize="0.75rem"
                  border="none"
                  onClick={() => router.push(`/board?category=${el}`)}
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
