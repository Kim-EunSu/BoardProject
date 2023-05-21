"use client";
import styled from "styled-components";
import UserInfo from "./PostCard/UserInfo";
import Content from "./PostCard/Content";
import UserAction from "./PostCard/UserAction";
import CommentInput from "./PostCard/CommentInput";

const PostCard = () => {
  return (
    <Article>
      <UserInfo />
      <Content />
      <UserAction comment={false} />
      <CommentInput />
    </Article>
  );
};

const Article = styled.article`
  width: 350px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
  background: linear-gradient(128.67deg, #ffffff 23.76%, #f7faff 133.63%);
  box-shadow: 1px 2px 20px rgba(18, 61, 101, 0.05),
    inset -18.4px -13.8px 184px rgba(255, 255, 255, 0.18);
  border-radius: 18px;

  @media (min-width: 768px) {
    width: 680px;
    gap: 30px;
  }

  @media (min-width: 1080px) {
    width: 980px;
  }

  @media (min-width: 1440px) {
    width: 1200px;
  }
`;
export default PostCard;
