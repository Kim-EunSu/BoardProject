"use client";

// Layout 컴포넌트
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  headerText?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
