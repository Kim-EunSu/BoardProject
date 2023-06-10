"use client";

import PostCard from "@/components/PostCard";
import Loading from "@/components/Loading";
import styled from "styled-components";
import { useGetCategoryContent } from "@/utils/api";
import type { ContentDetail } from "@/utils/type";

const Dashboard = () => {
  // 상단 URL 쿼리로부터 contentId 가져오기
  const urlParams = new URL(location.href).searchParams;
  const category: string | null = urlParams.get("category");
  const { data, isLoading, isError } = useGetCategoryContent(category);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Main>
      {data &&
        data.map((el: ContentDetail, index: number) => {
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
