"use client";

// Layout 컴포넌트
import Footer from "../../components/Footer";
import styled from "styled-components";


interface LayoutProps {
  children: React.ReactNode;
  headerText?: string;
}

const Wrapper = styled.div`
  padding: 0 5rem;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        {children}
        <Footer />
        <div id="portal" />
      </Wrapper>
    </>
  );
}
