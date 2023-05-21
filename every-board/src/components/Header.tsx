// Header 컴포넌트
import styled from "styled-components";
import Image from "next/image";

// Head부분은 잘몰라서 주석처리 해놨습니다.
// import Head from "next/head";
import { useRouter } from "next/navigation";

// const Head = styled.header``;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: red;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 6px;
  border-radius: 50%;
  background-color: #5429ff;
`;

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter();
  return (
    <Top>
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
        <Avatar></Avatar>
        사용자
      </Right>
    </Top>
  );
}
