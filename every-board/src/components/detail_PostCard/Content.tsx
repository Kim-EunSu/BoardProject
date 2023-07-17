import styled from "styled-components";
import ButtonLayout from "../ButtonLayout";
<<<<<<< HEAD
<<<<<<< HEAD
import { ContentImage } from "@/utils/type";
import Image from "next/image";
=======
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu

const ContentWrap = styled.div`
  width: 320px;
  min-height: 100%;
  height: fit-content;
  padding: 20px 10px;
  margin: 0 auto;
  gap: 10px;

  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 2px solid #e9eff4;
  border-radius: 5.77775px;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  span {
    white-space: normal;
    //PostCard 콘텐츠 5줄만 보이기
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .detail {
    display: flex;
  }

  @media (min-width: 768px) {
    width: 600px;
    div {
      gap: 30px;
    }
  }
  @media (min-width: 1080px) {
    width: 900px;
  }
  @media (min-width: 1440px) {
    width: 1100px;
  }
`;

<<<<<<< HEAD
<<<<<<< HEAD
interface Props {
  detail?: boolean;
  onClick?: () => void;
  //undefined 넣어도 되는지 공부하기
  //undefined 안넣으면 Type 오류 발생, 상위 컴포넌트에서 전달 받는 prop이 undefined 일 수 있기 때문,
  //해결방법 찾아보기
  category: string | undefined;
  title: string | undefined;
  content: string | undefined;
  contentImages: ContentImage[] | undefined;
}

const Content = (props: Props) => {
  const { category, title, content, contentImages } = props;
  return (
    <ContentWrap>
      <ButtonLayout
        text={category}
=======
=======
>>>>>>> upstream/EunSu
//Props 인터페이스에서 title과 content는 string 타입으로 정의되어 있기 때문에, undefined 값을 전달할 수 없기에 이와같이 해결
interface Props {
  category: string | undefined;
  title: string | undefined;
  content: string | undefined;
  detail?: boolean;
  onClick?: () => void;
}

const Content = (props: Props) => {
  return (
    <ContentWrap>
      <ButtonLayout
<<<<<<< HEAD
        text="자유게시판"
>>>>>>> upstream/EunSu
=======
        text={props.category}
<<<<<<< HEAD
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu
        width="fit-content"
        height="fit-content"
        padding="5px 10px"
        color="#ffffff"
        background="var(--primary)"
        border="none"
        radius="35px"
      />
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <h4>{title}</h4>
        <span className={props.detail ? "detail" : ""}>{content}</span>
        {contentImages &&
          contentImages.map(image => (
            <Image
              key={image.contentImageId}
              src={`https://backendcontentimage.s3.ap-northeast-2.amazonaws.com/${image.contentImgUrl}`}
              alt="Content Image"
              width={500} // 필요에 따라 조정하세요
              height={300} // 필요에 따라 조정하세요
            />
          ))}
=======
        <h4>{props.title} </h4>
        <span className={props.detail ? "detail" : ""}>{props.content}</span>
>>>>>>> upstream/EunSu
=======
        <h4>{props.title} </h4>
        <span className={props.detail ? "detail" : ""}>{props.content}</span>
>>>>>>> upstream/EunSu
      </div>
    </ContentWrap>
  );
};

export default Content;
