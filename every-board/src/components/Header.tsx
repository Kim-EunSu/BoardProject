import styled from "styled-components";
import Image from "next/image";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [currentTitle, setCurrentTitle] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URL(location.href).searchParams;
    const category: string | null = urlParams.get("category");
    const endPoint = window.location.href
      .split("/")
      .splice(-1)
      .join("")
      .toUpperCase();

    category !== null ? setCurrentTitle(category) : setCurrentTitle(endPoint);
  }, []);

  return (
    <Top>
      <Left>
        <Image
          src={"/logo.svg"}
          width={45}
          height={45}
          alt="logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        />
        <Title>{currentTitle}</Title>
      </Left>
      <Avatar />
    </Top>
  );
};

const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2.5rem 0 1.875rem;
  width: 350px;

  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1080px) {
    width: 980px;
  }
  @media (min-width: 1440px) {
    width: 1200px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1.75rem;

  @media (min-width: 1080px) {
    font-size: 2.25rem;
  }
`;

export default Header;
