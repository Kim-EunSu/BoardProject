import Link from "next/link";
import styled, { css } from "styled-components";
import { useAvatar } from "@/context/AvatarContext";

type AvatarSize = "small" | "medium" | "large";

type Props = {
  image?: string | null;
  size?: AvatarSize;
};

// StyledImage 스타일 컴포넌트를 사용하여 일반 img 태그를 사용하고 있기에
// src를 통해 이미지를 전달할 때, string 타입만 허용
// => 현재 이부분에서는  Next.js의 이미지 최적화 기능을 사용하지 않고 일반 img 태그를 사용하며,
// => 이미지 경로를 string 으로 지정하여 코드의 일관성을 유지
const defaultprofile = "/defaultprofile.png";

const getImageSize = (size: AvatarSize) => {
  switch (size) {
    case "small":
      return { width: 50, height: 50 };
    case "medium":
      return { width: 70, height: 70 };
    case "large":
      return { width: 140, height: 140 };
    default:
      return { width: 50, height: 50 };
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
  background: #fc0374;
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  const { avatarImage } = useAvatar();
  return (
    <Link
      href="/board/myprofile"
      style={{ textDecoration: "none", color: "#000000", cursor: "pointer" }}
    >
      <Container size={size}>
        <ImageWrapper>
          <StyledImage
            src={avatarImage ? avatarImage : defaultprofile}
            alt="user profile"
            referrerPolicy="no-referrer"
          />
        </ImageWrapper>
      </Container>
    </Link>
  );
}
