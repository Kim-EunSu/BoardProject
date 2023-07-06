// "use client";

// import styled from "styled-components";
// import UserInfo from "./detail_PostCard/UserInfo";
// import Content from "./detail_PostCard/Content";
// import UserAction from "./detail_PostCard/UserAction";
// import CommentInput from "./detail_PostCard/CommentInput";
// import Link from "next/link";
// import { useEffect } from "react";
// import axios from "axios";
// import { useRouter, useSearchParams } from "next/navigation";

// interface Props {
//   detail?: boolean;
//   onClick?: () => void;
// }

// const PostCard = (props: Props) => {
//   return (
//     <Article>
//       <UserInfo />
//       <Link
//         href="board/detail"
//         style={{ textDecoration: "none", color: "#000000" }}
//       >
//         <Content detail={props.detail} />
//       </Link>
//       <UserAction comment={false} />
//       <CommentInput />
//     </Article>
//   );
// };

// const Article = styled.article`
//   width: 350px;
//   height: fit-content;
//   display: flex;
//   flex-direction: column;
//   margin: 0 auto;
//   gap: 20px;
//   background: linear-gradient(128.67deg, #ffffff 23.76%, #f7faff 133.63%);
//   box-shadow: 1px 2px 20px rgba(18, 61, 101, 0.05),
//     inset -18.4px -13.8px 184px rgba(255, 255, 255, 0.18);
//   border-radius: 18px;

//   @media (min-width: 768px) {
//     width: 680px;
//     gap: 30px;
//   }

//   @media (min-width: 1080px) {
//     width: 980px;
//   }

//   @media (min-width: 1440px) {
//     width: 1200px;
//   }
// `;
// export default PostCard;

"use client";

import styled from "styled-components";
import UserInfo from "./detail_PostCard/UserInfo";
import Content from "./detail_PostCard/Content";
import UserAction from "./detail_PostCard/UserAction";
import CommentInput from "./detail_PostCard/CommentInput";
import Link from "next/link";

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
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
        {/* postData에서 특정 정보만 props로 내려주고싶을때 */}
        <Content title={postData?.title} content={postData?.content} />
      </Link>
      <UserAction comment={false} />
      <CommentInput />
    </Article>
  );
};

export default PostCard;
