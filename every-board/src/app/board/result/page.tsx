"use client";

import PostCard from "@/components/PostCard";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
import styled from "styled-components";
import { useGetKeyword } from "@/utils/api";
import type { ContentDetail, SearchKeyword } from "@/utils/type";

const Dashboard = () => {
  // 상단 URL 쿼리로부터 contentId 가져오기
  const urlParams = new URL(location.href).searchParams;
  const keyword: string | null = urlParams.get("keyword");
  const { data, isLoading, isError } = useGetKeyword(keyword);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <Main>
      {data &&
        data.map((el: ContentDetail | SearchKeyword, index: number) => {
          return <PostCard key={index} data={el} />;
        })}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

export default Dashboard;
