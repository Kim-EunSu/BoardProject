"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useParams } from "next/navigation";
import axios from "axios";
import styled from "styled-components";
import PostCard from "@/components/PostCard";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-height: 100vh;
  height: fit-content;
`;

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

export default function page() {
  //const [post, setPost] = useState<IPost[]>([]);
  //초기값을 변경한 이유
  //=>아직 데이터가 로드되지 않았음을 의미하기 위해, 빈배열로 설정해두면 데이터를 불러오는 중임에도 불구하고 이미 데이터를 불러온것처럼 해석할 수 있기에
  const [post, setPost] = useState<IPost | null>(null);

  const pathname = usePathname();
  console.log(pathname); //  board/detail/34

  const params = useParams();
  console.log(params); // {contentId: '34'}

  const contentId = params ? params.contentId : null;
  console.log(contentId); //34를 가져옴

  useEffect(() => {
    axios
      .get(`https://every-board.shop/contents/${contentId}`)
      .then(function (res) {
        setPost(res.data);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <Main>
      <PostCard postData={post} />
    </Main>
  );
}
