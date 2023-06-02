"use client";

import DetailCard from "@/components/PostCard";
import Header from "@/components/Header";
import { styled } from "styled-components";
import PostCard from "@/components/PostCard";

const Dashboard = () => {
  return (
    <Main>
      <Header title="자유게시판" />
      <PostCard detail={true} />
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 20px;
`;

export default Dashboard;
