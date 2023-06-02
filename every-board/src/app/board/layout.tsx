"use client";

// Layout 컴포넌트
import Footer from "../../components/Footer";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
  headerText?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}
