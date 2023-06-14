"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useGetHotTopic } from "@/utils/api";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

interface Props {
  title: string;
  sort: string;
}

interface Data {
  contentId: string;
  title: string;
}

const Article = styled.section`
  width: 320px;
  height: 540px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 225px;
  }
  @media (min-width: 1080px) {
    width: 320px;
  }
  @media (min-width: 1440px) {
    width: 430px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h4 {
    color: var(--primary);
  }

  ol {
    padding: 0 20px;
    li {
      padding: 12px 0;
      border-bottom: 1px solid #e8e9ff;
      cursor: pointer;
    }
  }
`;

const HotTopic = (props: Props) => {
  const { title, sort } = props;
  const router = useRouter();
  const { data, isLoading, isError } = useGetHotTopic(sort);

  if (isLoading) {
    // 데이터 로딩 중일 때의 처리
    return <LoadingPage />;
  }

  if (isError) {
    // 데이터 로딩 중 에러가 발생한 경우의 처리
    return <ErrorPage />;
  }

  return (
    <Article>
      <div>
        <h4>{title}</h4>
        <ol>
          {data
            ? data.map(el => {
                return (
                  <li
                    key={el.contentId}
                    onClick={() =>
                      router.push(`/board/detail?contentId=${el.contentId}`)
                    }
                  >
                    {el.title}
                  </li>
                );
              })
            : null}
        </ol>
      </div>
    </Article>
  );
};

export default HotTopic;
