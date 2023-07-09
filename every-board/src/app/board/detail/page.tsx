// import styled from "styled-components";
// import PostCard from "@/components/PostCard";
// import LoadingPage from "@/components/LoadingPage";
// import ErrorPage from "@/components/ErrorPage";
// import { useSearchParams } from "next/navigation";
// import { useGetDetailContent } from "@/utils/api";

// const Dashboard = () => {
//   // 상단 URL 쿼리로부터 contentId 가져오기
//   const params = useSearchParams();
//   const contentId: string | null | undefined = params?.get("contentId");
//   const { data, isLoading, isError } = useGetDetailContent(contentId);
//   if (isLoading) {
//     return <LoadingPage />;
//   }
//   if (isError) {
//     return <ErrorPage />;
//   }

//   return (
//     <Main>
//       <PostCard detail={true} data={data} />
//     </Main>
//   );
// };

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 20px;
//   min-height: 100vh;
//   height: fit-content;
// `;

// export default Dashboard;

import React from "react";

export default function page() {
  return <div>page</div>;
}
