"use client";

import styled from "styled-components";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/EunSu
import { useGetImg, useGetDetailContent } from "@/utils/api";
import Image from "next/image";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> upstream/EunSu
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 40px;
  padding-bottom: 2.5rem;
`;

const PhotoWrap = styled.div`
<<<<<<< HEAD
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  width: 330px;
  height: 100%;
  gap: 20px;
  margin: 0 auto;

=======
  display: grid;
  grid-gap: 20px;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  gap: 20px;
>>>>>>> upstream/EunSu
  img {
    border-radius: 10px;
    background-color: #eee;
    width: 330px;
    height: 250px;
  }

<<<<<<< HEAD
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
=======
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 501px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1081px) and (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
>>>>>>> upstream/EunSu
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

type ImgData = {
  contentImageId: number;
  contentId: number;
  contentImgUrl: string;
};

type photoData = {
  contentId: number;
  userId: number;
  viewCount: number;
  contentHeartCount: number;
  title: string;
  content: string;
  contentImages: ImgData[];
  category: string;
  createdAt: string;
  modifiedAt: string;
};

const Gallery = () => {
  const router = useRouter();
  const [photodata, setPhotoData] = useState<photoData[]>([]);

  const sortedPhotoData = photodata
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  useEffect(() => {
    axios
      .get("https://every-board.shop/contents?size=100")
      .then(function (res) {
        setPhotoData(res.data.contentResponseDto);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <Section>
      <PhotoWrap>
        {sortedPhotoData.map((el, index) => (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`board/detail?contentId=${el.contentId}`);
            }}
          >
            <Image
              key={el.contentImages[0]?.contentImageId}
              src={`https://backendcontentimage.s3.ap-northeast-2.amazonaws.com/${el.contentImages[0]?.contentImgUrl}`}
              width={300}
              height={300}
              alt="이미지"
            />
          </div>
        ))}
      </PhotoWrap>
    </Section>
  );
=======
=======
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  gap: 40px;
`;

<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu
};

export default function page() {
  const [contents, setContents] = useState<IContent[]>([]);
=======
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
>>>>>>> upstream/EunSu

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
