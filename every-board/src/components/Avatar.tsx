// import Image from "next/image";
// import Link from "next/link";
// import styled from "styled-components";

// type Props = {
//   image?: string | null;
// };

// //size를 따로 명시하지 않으면 기본적으로 large사이즈
// export default function Avatar({ image }: Props) {
//   return (
// <Link
//   href="/board/myprofile"
//   style={{ textDecoration: "none", color: "#000000", cursor: "pointer" }}
// >
//       <AvatarWrap>
//         <Image
//           src={"/frame.png"}
//           alt="프로필 사진"
//           width={40}
//           height={40}
//           style={{ borderRadius: "50px" }}
//         />
//         <NickName>지쳐있는멜모</NickName>
//       </AvatarWrap>
//     </Link>
//   );
// }

// const AvatarWrap = styled.span`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: fit-content;
//   height: fit-content;
//   max-width: 240px;
//   padding: 2px;
//   border-radius: 50px;
//   background-color: white;
//   gap: 6px;
//   box-shadow: 1px 2px 20px rgba(18, 61, 101, 0.05),
//     inset -18.4px -13.8px 184px rgba(255, 255, 255, 0.18);
//   @media (min-width: 1080px) {
//     padding: 6px;
//   }
// `;

// //닉네임 10글자 이상은 ...처리
// const NickName = styled.span`
//   display: none;
//   @media (min-width: 1080px) {
//     display: inline;
//     padding: 0 5px;
//     max-width: 173px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }
// `;

import Link from "next/link";
import styled, { css } from "styled-components";

type AvatarSize = "small" | "medium" | "large";

type Props = {
  image?: string | null;
  size?: AvatarSize;
};

const getImageSize = (size: AvatarSize) => {
  switch (size) {
    case "small":
      return { width: 40, height: 40 };
    case "medium":
      return { width: 80, height: 80 };
    case "large":
      return { width: 120, height: 120 };
    default:
      return { width: 40, height: 40 };
  }
};

//styled-components를 동적으로 사용하기!
const getSizeStyles = (size: AvatarSize) => {
  const imageSize = getImageSize(size);

  return css`
    width: ${imageSize.width}px;
    height: ${imageSize.height}px;
  `;
};

const Container = styled.div<{ size: AvatarSize }>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ size }) => getSizeStyles(size)}
`;

const ImageWrapper = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  padding: 0.1rem;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 9999px;
`;

//size을 따로 명시하지 않으면 기본 사이즈는 small
export default function Avatar({ image, size = "small" }: Props) {
  return (
    <Link
      href="/board/myprofile"
      style={{ textDecoration: "none", color: "#000000", cursor: "pointer" }}
    >
      <Container size={size}>
        <ImageWrapper>
          <StyledImage
            src={image ?? undefined}
            alt="user profile"
            referrerPolicy="no-referrer"
          />
        </ImageWrapper>
      </Container>
    </Link>
  );
}
