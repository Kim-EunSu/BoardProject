import styled from "styled-components";
import ButtonLayout from "../ButtonLayout";

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
        text={props.category}
        width="fit-content"
        height="fit-content"
        padding="5px 10px"
        color="#ffffff"
        background="var(--primary)"
        border="none"
        radius="35px"
      />
      <div>
        <h4>{props.title} </h4>
        <span className={props.detail ? "detail" : ""}>{props.content}</span>
      </div>
    </ContentWrap>
  );
};

export default Content;
