import styled from "styled-components";
import ButtonLayout from "@/components/ButtonLayout";
import { useRouter } from "next/navigation";

const PhotoLine = () => {
  const router = useRouter();
  const photo = [1, 2, 3, 4];
  return (
    <Section>
      <TitleWrap>
        <h4>🚀 HIT 갤러리</h4>
        <ButtonLayout
          width="58px"
          height="28px"
          radius="25px"
          background="var(--primary)"
          color=" #ffffff"
          text="더보기"
          border="none"
          onClick={() => {
            router.push("/gallery");
          }}
        ></ButtonLayout>
      </TitleWrap>
      <PhotoWrap>
        {photo.map((el, index) => {
          return (
            <div key={index}>
              <img></img>
            </div>
          );
        })}
      </PhotoWrap>
    </Section>
  );
};
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
  height: 250px;
  overflow: hidden;

  img {
    border-radius: 10px;
    background-color: #eee;
    width: 330px;
    height: 250px;
  }

  @media (min-width: 768px) {
    width: 715px;
    height: 150px;
    gap: 10px;
    img {
      width: 171.25px;
      height: 150px;
    }
  }

  @media (min-width: 1080px) {
    width: 1000px;
    height: 180px;
    img {
      width: 242.5px;
      height: 180px;
    }
  }

  @media (min-width: 1440px) {
    width: 1330px;
    height: 220px;
    gap: 20px;
    img {
      width: 317.5px;
      height: 220px;
    }
  }
`;

export default PhotoLine;
