"use client";

import PostCard from "@/components/PostCard";
import SearchBar from "@/components/home/SearchBar";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
import styled from "styled-components";
import { useGetKeyword } from "@/utils/api";
import type { ContentDetail, SearchKeyword } from "@/utils/type";
import { useEffect, useState } from "react";

const Search = () => {
  // 상단 URL 쿼리로부터 contentId 가져오기
  const urlParams = new URL(location.href).searchParams;
  const query: string | null = urlParams.get("keyword");
  const [keyword, setkeyword] = useState<string | null>("");
  const { data, isLoading, isError, refetch } = useGetKeyword(keyword);

  useEffect(() => {
    setkeyword(query);
  }, [query]);

  if (isLoading) {
    return <LoadingPage />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <Main>
      <SearchBar />
      {data && data.length > 0 ? (
        data.map((el: ContentDetail | SearchKeyword, index: number) => {
          return <PostCard key={index} data={el} />;
        })
      ) : (
        <NoResult>
          <span>{keyword}</span>에 대한 검색결과가 없습니다.
        </NoResult>
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

export default Search;
