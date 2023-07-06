"use client";

import axios from "axios";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { useGetImg, useGetDetailContent } from "@/utils/api";
import Image from "next/image";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 40px;
`;

const PhotoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  width: 330px;
  height: 100%;
  gap: 20px;
  margin: 0 auto;

  img {
    border-radius: 10px;
    background-color: #eee;
    width: 330px;
    height: 250px;
  }

  @media (min-width: 768px) {
    width: 680px;
    gap: 10px;
    img {
      width: 220px;
      height: 200px;
    }
  }

  @media (min-width: 1080px) {
    width: 980px;
    img {
      width: 235px;
      height: 180px;
    }
  }

  @media (min-width: 1440px) {
    width: 1200px;
    gap: 20px;
    img {
      width: 285px;
      height: 220px;
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Gallery = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetImg();
  const [contentId, setContentId] = useState<number>();
  const detail = useGetDetailContent(contentId);

  if (isLoading) return <LoadingPage />;
  if (isError) return <ErrorPage />;

  // useEffect(() => {
  //   data?.forEach(el => {
  //     setContentId(el.contentId);
  //   });
  // }, [data]);

  return (
    <Section>
      <PhotoWrap>
        {data?.map(el => {
          return (
            <ContentWrap
              onClick={() => {
                router.push(`board/detail?contentId=${el.contentId}`);
              }}
              style={{ cursor: "pointer" }}
            >
              <Image
                key={el.contentImages[0]?.contentImageId}
                src={`https://backendcontentimage.s3.ap-northeast-2.amazonaws.com/${el.contentImages[0]?.contentImgUrl}`}
                width={500}
                height={500}
                alt="이미지"
              />
              <div>
                <span>{detail.data?.title}</span>
              </div>
            </ContentWrap>
          );
        })}
      </PhotoWrap>
    </Section>
  );
=======
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(2, minmax(200px, auto));
  grid-auto-rows: minmax(300px, auto);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(200px, auto));
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, minmax(200px, auto));
  }
`;

const Wrap = styled.div`
  border: 2px solid red;
`;

const IImg = styled.div`
  height: 160px;
  background: #dbdbdb;
`;

const BottomWrap = styled.div``;

const Title = styled.span``;

const Category = styled.span``;

const Time = styled.span`
  display: flex;
  padding: 0.7rem;
  justify-content: flex-end;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type IContent = {
  category: string;
  content: string;
  contentHeartCount: number;
  contentId: number;
  //contentImages: any[]; // contentImages의 구조에 따라서 타입을 세부적으로 정의해주세요.
  contentImages: Array<{
    contentId: number;
    contentImageId: number;
    contentImgUrl: string;
  }>;
  createdAt: string;
  modifiedAt: string;
  title: string;
  userId: number;
  viewCount: number;
>>>>>>> upstream/EunSu
};

export default function page() {
  const [contents, setContents] = useState<IContent[]>([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://every-board.shop/contents?size=100", {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(function (res) {
        setContents(res.data.contentResponseDto);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      {contents &&
        contents.map((content, index) => (
          <Wrap key={index}>
            <img
              src={`https://every-board.shop/?size=100/${content.contentImages[0].contentImgUrl}`}
              alt={content.title}
            />
            <BottomWrap>
              <Time>{content.createdAt.toString().slice(0, 10)}</Time>
              <Bottom>
                <Title>{content.title}</Title>
                <Category>{content.category}</Category>
              </Bottom>
            </BottomWrap>
          </Wrap>
        ))}
    </Wrapper>
  );
}

//`/board?category=${el}`

{
  /* <img
              src={content.contentImages[0].contentImgUrl}
              alt={content.title}
            /> */
}
