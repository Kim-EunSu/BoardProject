"use client";

import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Wrapper = styled.div`
  padding: 0 3rem 2rem;
  background-color: #efe9ff;
`;

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}
