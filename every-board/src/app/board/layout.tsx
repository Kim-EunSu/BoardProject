"use client";

import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Wrapper = styled.div`
  background-color: RGBA(239, 233, 255, 30%);
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
