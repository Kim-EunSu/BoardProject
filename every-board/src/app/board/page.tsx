"use client";

import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Main>
      <Header title="자유게시판" />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
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
