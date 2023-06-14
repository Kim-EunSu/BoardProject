"use client";

import PostCard from "@/components/PostCard";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
import Category from "@/components/Category";
import NoResut from "@/components/NoResult";
import styled from "styled-components";
import { useGetCategoryContent } from "@/utils/api";
import { useSearchParams } from "next/navigation";
import type { ContentDetail } from "@/utils/type";

const Dashboard = () => {
  // 상단 URL 쿼리로부터 contentId 가져오기
  const params = useSearchParams();
  const category: string | null | undefined = params?.get("category");
  const { data, isLoading, isError } = useGetCategoryContent(category);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }

  return (
    <Main>
      <Category route="board" />
      {data && data.length > 0 ? (
        data.map((el: ContentDetail, index: number) => {
          return <PostCard key={index} data={el} />;
        })
      ) : (
        <NoResut item={category} />
      )}
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  min-height: 100vh;
`;

const NoResult = styled.div`
  span {
    font-weight: 700;
  }
`;

export default Dashboard;
