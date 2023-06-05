import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  image?: string | null;
};

//size를 따로 명시하지 않으면 기본적으로 large사이즈
export default function Avatar({ image }: Props) {
  return (
    <Link
      href="/board/myprofile"
      style={{ textDecoration: "none", color: "#000000", cursor: "pointer" }}
    >
      <AvatarWrap>
        <Image
          src={"/frame.png"}
          alt="프로필 사진"
          width={40}
          height={40}
          style={{ borderRadius: "50px" }}
        />
        <NickName>지쳐있는멜모</NickName>
      </AvatarWrap>
    </Link>
  );
}

const AvatarWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  max-width: 240px;
  padding: 2px;
  border-radius: 50px;
  background-color: white;
  gap: 6px;
  box-shadow: 1px 2px 20px rgba(18, 61, 101, 0.05),
    inset -18.4px -13.8px 184px rgba(255, 255, 255, 0.18);
  @media (min-width: 1080px) {
    padding: 6px;
  }
`;

//닉네임 10글자 이상은 ...처리
const NickName = styled.span`
  display: none;
  @media (min-width: 1080px) {
    display: inline;
    padding: 0 5px;
    max-width: 173px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
