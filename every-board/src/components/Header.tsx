// Header 컴포넌트
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Right = styled.div``;

const Me = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter();
  return (
    <Head>
      <Left>
        <Image
          src={"/logo.svg"}
          width={45}
          height={45}
          alt="logo"
          onClick={() => {
            router.push("/");
          }}
          style={{ cursor: "pointer" }}
        />
        <Title>{title}</Title>
      </Left>
      <Right>
        <Me>사용자</Me>
      </Right>
    </Head>
  );
}
