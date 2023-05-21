"use client";
import PostCard from "@/components/PostCard";
import { styled } from "styled-components";

const Dashboard = () => {
  return (
    <Main>
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
