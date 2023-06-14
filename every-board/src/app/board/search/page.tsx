"use client";

import PostCard from "@/components/PostCard";
import SearchBar from "@/components/home/SearchBar";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/components/ErrorPage";
import NoResut from "@/components/NoResult";
import styled from "styled-components";
import { useGetKeyword } from "@/utils/api";
import type { ContentDetail, SearchKeyword } from "@/utils/type";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  // 상단 URL 쿼리로부터 contentId 가져오기
  const params = useSearchParams();
  const query: string | null | undefined = params?.get("keyword");
  const [keyword, setkeyword] = useState<string | null | undefined>("");
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
        <NoResut item={keyword} />
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

export default Search;
