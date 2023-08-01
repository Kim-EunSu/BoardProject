"use client";
import styled from "styled-components";
import UserInfo from "./detail_PostCard/UserInfo";
import Content from "./detail_PostCard/Content";
import UserAction from "./detail_PostCard/UserAction";
import CommentInput from "./detail_PostCard/CommentInput";
import Link from "next/link";
<<<<<<< HEAD
<<<<<<< HEAD
import type { ContentDetail, SearchKeyword } from "@/utils/type";
<<<<<<< HEAD
=======
>>>>>>> upstream/EunSu
=======
import type { ContentDetail, SearchKeyword } from "@/utils/type";
>>>>>>> upstream/EunSu
=======
import axios from "axios";
>>>>>>> upstream/EunSu

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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> upstream/EunSu
=======
type IComment = {
  comment: string;
  commentId: number;
  contentId: number;
  createdAt: string;
  modifiedAt: string;
  nickName: string;
  title: string;
  userId: number;
};

type UserProfileImage = {
  userImageId: number;
  userId: number;
  userImgUrl: string;
};

type ContentImage = {
  contentId: number;
  contentImageId: number;
  contentImgUrl: string;
};

type IPost = {
  category: string;
  //commenets수정하였습니다!
  comments: IComment[];
  content: string;
  contentHeartCount: number;
  contentId: number;
  contentImages: ContentImage[];
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  profileUrl: UserProfileImage[];
  title: string;
  userId: number;
  viewCount: number;
};

>>>>>>> upstream/EunSu
interface Props {
  detail?: boolean;
  //data에 IPost | null추가
  data: IPost | null | ContentDetail | SearchKeyword | undefined | void;
  onClick?: () => void;
}

const PostCard = (props: Props) => {
  const { data } = props;

  console.log(data);

  return (
    <Article>
      <UserInfo userId={data?.userId} createdAt={data?.createdAt} />
<<<<<<< HEAD
=======
//postData를 props로 받아오면 해당 type들도 가져와야함
type ContentImage = {
  contentId: number;
  contentImageId: number;
  contentImgUrl: string;
};

type IPost = {
  category: string;
  comments: any[];
  content: string;
  contentHeartCount: number;
  contentId: number;
  contentImages: ContentImage[];
  createdAt: string;
  modifiedAt: string;
  nickname: string;
  profileUrl: { [key: string]: any }[];
  title: string;
  userId: number;
  viewCount: number;
};

type Props = {
  postData: IPost | null; // postData 추가
};

const PostCard = (props: Props) => {
  const { postData } = props;

  return (
    <Article>
      {/* postData를 아예 통째로 내려주고싶을때 */}
      <UserInfo postData={postData} />
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* postData에서 특정 정보만 props로 내려주고싶을때 */}
>>>>>>> upstream/EunSu
        <Content
          detail={props.detail}
          content={data?.content}
          title={data?.title}
          category={data?.category}
          contentImages={data?.contentImages}
        />
      </Link>
      <UserAction
        comment={data?.comments}
        like={data?.contentHeartCount}
        userId={data?.userId}
        contentId={data?.contentId}
      />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        {/* postData에서 특정 정보만 props로 내려주고싶을때 */}
        <Content
          category={postData?.category}
          title={postData?.title}
          content={postData?.content}
        />
      </Link>
      <UserAction comment={false} />
>>>>>>> upstream/EunSu
=======
>>>>>>> upstream/EunSu
      <CommentInput />
=======
      <CommentInput comments={data?.comments} />
>>>>>>> upstream/EunSu
=======
      {/* CommentInput에 contentId전달 */}
      <CommentInput contentId={data?.contentId} />
>>>>>>> upstream/EunSu
    </Article>
  );
};

export default PostCard;
