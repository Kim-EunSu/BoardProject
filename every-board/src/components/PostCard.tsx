"use client";
import styled from "styled-components";
import UserInfo from "./detail_PostCard/UserInfo";
import Content from "./detail_PostCard/Content";
import UserAction from "./detail_PostCard/UserAction";
import CommentInput from "./detail_PostCard/CommentInput";
import Link from "next/link";
import type { ContentDetail, SearchKeyword } from "@/utils/type";

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

interface Props {
  detail?: boolean;
  data: ContentDetail | SearchKeyword | undefined | void;
  onClick?: () => void;
}

const PostCard = (props: Props) => {
  const { data } = props;
  return (
    <Article>
      <UserInfo userId={data?.userId} createdAt={data?.createdAt} />
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <Content
          detail={props.detail}
          content={data?.content}
          title={data?.title}
          category={data?.category}
          contentImages={data?.contentImages}
        />
      </Link>
      <UserAction
        comment={false}
        like={data?.contentHeartCount}
        userId={data?.userId}
        contentId={data?.contentId}
      />
      <CommentInput />
    </Article>
  );
};

export default PostCard;
