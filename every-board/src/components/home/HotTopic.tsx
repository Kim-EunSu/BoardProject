"use client";

import styled from "styled-components";

const HotTopic = () => {
  const topics = [
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
    "오늘의 화제의글1",
  ];

  return (
    <Article>
      <div>
        <h4>🚀 Today Hot Topics</h4>
        <ol>
          {topics.map((el, index) => {
            return <li key={index}>{el}</li>;
          })}
        </ol>
      </div>
    </Article>
  );
};

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
      padding: 8px 0;
      border-bottom: 1px solid #e8e9ff;
    }
  }
`;
export default HotTopic;
