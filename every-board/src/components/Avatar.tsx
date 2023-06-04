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
        <NickName>일이삼사오육칠팔</NickName>
      </AvatarWrap>
    </Link>
  );
}

const AvatarWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 170px;
  padding: 8px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  gap: 6px;
`;

//닉네임 7글자 이상은 ...처리
const NickName = styled.span`
  padding: 0 5px;
  max-width: 108px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
