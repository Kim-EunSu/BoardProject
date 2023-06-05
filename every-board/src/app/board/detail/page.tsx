"use client";

import DetailCard from "@/components/PostCard";
import Header from "@/components/Header";
import styled from "styled-components";
import PostCard from "@/components/PostCard";

const Dashboard = () => {
  return (
    <Main>
      <PostCard detail={true} />
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-height: 100vh;
  height: fit-content;
`;

export default Dashboard;
