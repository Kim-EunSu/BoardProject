"use client";

import PostCard from "@/components/PostCard";
import Header from "@/components/Header";
import { styled } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  // const Navigation = () => {
  //   const router = useRouter();
  //   router.push("/board/detail");
  // };
  return (
    <Main>
      <Header title="자유게시판" />
      {/* <PostCard onClick={() => router.push("/board/detail")} /> */}
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <PostCard />
      </Link>
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <PostCard />
      </Link>
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <PostCard />
      </Link>
      <Link
        href="board/detail"
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <PostCard />
      </Link>
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
