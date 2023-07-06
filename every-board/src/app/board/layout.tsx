"use client";

// Layout 컴포넌트
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  headerText?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 5rem;

  @media (max-width: 350px) {
    padding: 0rem;
  }

  @media (max-width: 680px) {
    padding: 0 1rem;
  }
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        <Header />
        {children}
        <div id="portal" />
        <Footer />
      </Wrapper>
    </>
  );
}
