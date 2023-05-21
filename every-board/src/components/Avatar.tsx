import Image from "next/image";
import { styled } from "styled-components";

type AvatarSize = "small" | "large";

type Props = {
  image?: string | null;
  size?: AvatarSize;
};

//size를 따로 명시하지 않으면 기본적으로 large사이즈
export default function Avatar({ image, size = "large" }: Props) {
  return (
    <>
      <Image src={"/profile.svg"} alt="user profile" />
    </>
  );
}

function ContainerSize(size: AvatarSize): string {
  switch (size) {
    case "small":
      return "width:2.5rem height:2.5rem";
    case "large":
      return "width:4rem height:4rem";
  }
}
