import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

type Props = {
  image?: string | null;
};

//size를 따로 명시하지 않으면 기본적으로 large사이즈
export default function Avatar({ image }: Props) {
  return (
    <AvatarWrap>
      <Image
        src={"/frame.png"}
        alt="프로필 사진"
        width={40}
        height={40}
        style={{ borderRadius: "50px" }}
      />
      <span>일이삼사오육칠팔구십</span>
    </AvatarWrap>
  );
}

const AvatarWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  max-width: 150px;
  padding: 8px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  gap: 6px;

  white-space: normal;
  //PostCard 콘텐츠 5줄만 보이기
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
