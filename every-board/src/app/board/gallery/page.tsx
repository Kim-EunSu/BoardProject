"use client";

import styled from "styled-components";
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
  flex-wrap: wrap;
  border-radius: 10px;
  width: 330px;
  height: 250px;
  overflow: hidden;
  height: 100%;
  gap: 20px;
  margin: 0 auto;
  img {
    border-radius: 10px;
  }
  @media (min-width: 768px) {
    width: 715px;
    height: 150px;
    width: 680px;
    gap: 10px;
    img {
      width: 171.25px;
      height: 150px;
      width: 220px;
      height: 200px;
    }
  }
  @media (min-width: 1080px) {
    width: 1000px;
    /* height: 180px; */
    height: auto;
    width: 980px;
    img {
      width: 242.5px;
      width: 235px;
      height: 180px;
    }
  }
  @media (min-width: 1440px) {
    width: 1330px;
    height: 220px;
    width: 1200px;
    gap: 20px;
    img {
      width: 317.5px;
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
};
export default Gallery;
