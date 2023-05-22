"use client";

// Layout 컴포넌트
import Footer from "../../components/Footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
