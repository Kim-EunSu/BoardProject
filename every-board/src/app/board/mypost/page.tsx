"use client";

import PostCard from "@/components/PostCard";
import styled from "styled-components";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

const Mypost = () => {
  return (
    <Main>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Main>
  );
};

export default Mypost;
