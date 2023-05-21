import Image from "next/image";
import { styled } from "styled-components";
import UserAction from "./UserAction";

const Reply = () => {
  return (
    <CommentContainer>
      <CommentWrap>
        <Image
          src={"/frame.png"}
          width={35}
          height={35}
          alt="프로필 사진"
          style={{ borderRadius: "50px" }}
        />
        <TextArea>
          <span className="replayInfo">
            <span className="writer">강지넌</span>
            <span className="date">2023. 05.13</span>
          </span>
          <span className="content">
            <span
              style={{
                color: "var(--primary)",
                fontWeight: "600",
                padding: "0 10px 0 0",
              }}
            >
              @강지넌
            </span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </TextArea>
      </CommentWrap>
      <UserAction reply={true} />
    </CommentContainer>
  );
};
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentWrap = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    width: 550px;
  }
  @media (min-width: 1080px) {
    width: 850px;
  }
  @media (min-width: 1440px) {
    width: 1050px;
  }
`;

const TextArea = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 15px;
  gap: 20px;

  width: 275px;
  height: fit-content;
  background: #ffffff;
  border-radius: 18px;
  border: 1.5px solid #e9eff4;

  @media (min-width: 768px) {
    width: 555px;
  }
  @media (min-width: 1080px) {
    width: 855px;
  }
  @media (min-width: 1440px) {
    width: 1055px;
  }

  .replayInfo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .writer {
    font-weight: 700;
    font-size: 1rem;
    color: #000000;
  }

  .date {
    font-weight: 500;
    font-size: 0.875rem;
  }

  .content {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 140%;
    color: #343e4c;
  }
`;

export default Reply;
