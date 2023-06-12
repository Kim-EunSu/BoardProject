import { BiSearch } from "react-icons/bi";
import ButtonLayout from "../ButtonLayout";
import styled from "styled-components";
import { KeyboardEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetKeyword } from "@/utils/api";

const SearchBar = (): JSX.Element => {
  const route = useRouter();
  const [isKeyword, setKeyword] = useState<string>("");

  //검색창의 결과값을 isKeyword 상태에 저장
  const handleKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setKeyword(event.target.value);
  };

  //엔터 첬을 때 이벤트
  const keyup: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === "Enter") {
      route.push(`board/search?keyword=${isKeyword}`);
    }
  };

  //검색 버튼 눌렀을 때 이벤트
  const buttonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    route.push(`board/search?keyword=${isKeyword}`);
  };

  return (
    <SearchBarLayout>
      <BiSearch size="30px" color="var(--primary)" />
      <input
        placeholder="검색어를 입력하세요."
        onChange={handleKeywordChange}
        onKeyUp={keyup}
      />

      <ButtonLayout
        width="58px"
        height="28px"
        text="검색"
        color="#ffffff"
        background="var(--primary)"
        radius="50px"
        border="none"
        onClick={buttonClick}
      />
    </SearchBarLayout>
  );
};

const SearchBarLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0px 15px;
  width: 350px;
  height: 51px;

  background: #ffffff;
  box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 680px;
  }

  input {
    border: none;
    width: 250px;
    height: 51px;

    @media (min-width: 768px) {
      width: 653px;
    }
  }
`;

export default SearchBar;
