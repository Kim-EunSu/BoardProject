import styled from "styled-components";
import ButtonLayout from "@/components/ButtonLayout";
import { useRouter } from "next/navigation";
import { useGetDetailContent, useGetImg } from "@/utils/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiCommentDetail } from "react-icons/bi";
import { ContentDetail } from "@/utils/type";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TitleWrap = styled.div`
  color: #5429ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 30px;

  @media (min-width: 768px) {
    width: 715px;
  }
  @media (min-width: 1080px) {
    width: 1000px;
  }
  @media (min-width: 1440px) {
    width: 1330px;
  }
`;

const PhotoWrap = styled.div`
  display: flex;
  border-radius: 10px;
  width: 330px;
  overflow-x: hidden;

  img {
    border-radius: 10px;
    background-color: #eee;
    width: 330px;
    height: 250px;
  }
  @media (min-width: 768px) {
    width: 715px;
    gap: 10px;
    img {
      width: 171.25px;
      height: 150px;
    }
  }
  @media (min-width: 1080px) {
    width: 1000px;
    img {
      width: 242.5px;
      height: 180px;
    }
  }
  @media (min-width: 1440px) {
    width: 1330px;
    gap: 20px;
    img {
      width: 317.5px;
      height: 220px;
    }
  }
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  h5 {
    font-size: 1rem;
    font-weight: 400;
  }
  span {
    color: gray;
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
  }
`;

const PhotoLine = () => {
  const router = useRouter();
  const [contentId, setContentId] = useState<number>();
  // const { data, isLoading, isError } = useGetImg();
  const { data: detail } = useGetDetailContent(contentId);

  return (
    <Section>
      <TitleWrap>
        <h4>🚀 갤러리</h4>
        <ButtonLayout
          width="58px"
          height="28px"
          radius="25px"
          background="var(--primary)"
          color=" #ffffff"
          text="더보기"
          border="none"
          onClick={() => router.push("/board/gallery")}
        ></ButtonLayout>
      </TitleWrap>
      <PhotoWrap>
        {/* {data?.map(el => {
          return (
            <ContentWrap
              onClick={() => {
                router.push(`board/detail?contentId=${el.contentId}`);
              }}
              // onLoad={() => setContentId(el.contentId)}
              style={{ cursor: "pointer" }}
            >
              <Image
                key={el.contentImages[0]?.contentImageId}
                src={`https://backendcontentimage.s3.ap-northeast-2.amazonaws.com/${el.contentImages[0]?.contentImgUrl}`}
                width={500}
                height={500}
                alt="이미지"
              />
              <img></img>
              <TextWrap>
                <h5>제목입니당</h5>
                <span>
                  <BiCommentDetail size={15} />
                  <span>21</span>
                </span>
              </TextWrap>
            </ContentWrap>
          );
        })} */}
      </PhotoWrap>
    </Section>
  );
};

export default PhotoLine;
