import styled from "styled-components";
import Image from "next/image";
import Avatar from "../Avatar";

const Reply = () => {
  return (
    <CommentInputWrap>
      <Avatar size="verysmall" />
      <Input>
        <input placeholder="댓글을 입력해주세요." />
      </Input>
      <Submit>
        <Image src={"/send.svg"} width={15} height={15} alt="보내기" />
      </Submit>
    </CommentInputWrap>
  );
};

const CommentInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 1080px) {
    width: 900px;
  }
  @media (min-width: 1440px) {
    width: 1100px;
  }
`;

const Input = styled.span`
  width: 245px;
  height: 38px;
  @media (min-width: 768px) {
    width: 520px;
  }
  @media (min-width: 1080px) {
    width: 820px;
  }
  @media (min-width: 1440px) {
    width: 1020px;
  }
  input {
    width: inherit;
    height: inherit;
    background: #ffffff;
    border: 2px solid #e9eff4;
    border-radius: 5.77775px;
    padding: 0 10px;
  }
  input:focus {
    outline: none;
  }
`;

const Submit = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: var(--primary);
  border-radius: 50px;
`;

export default Reply;
