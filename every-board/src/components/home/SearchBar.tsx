import { BiSearch } from "react-icons/bi";
import ButtonLayout from "../ButtonLayout";
import styled from "styled-components";
import { useState } from "react";
import { useGetKeyword } from "@/utils/api";
import { useRouter } from "next/navigation";

const SearchBar = (): JSX.Element => {
  const route = useRouter();
  const [keyword, setKeyword] = useState<string>("");

  const handleKeywordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    console.log(event.target.value);
    setKeyword(event.target.value);
  };

  const sendKeyword = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    route.push(`board/result?keyword=${keyword}`);
  };
  return (
    <SearchBarLayout>
      <BiSearch size="30px" color="var(--primary)" />
      <form onSubmit={sendKeyword}>
        <input
          placeholder="검색어를 입력하세요."
          onChange={handleKeywordChange}
        ></input>
      </form>
      <ButtonLayout
        width="58px"
        height="28px"
        text="검색"
        color="#ffffff"
        background="var(--primary)"
        radius="50px"
        border="none"
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
  width: 330px;
  height: 51px;

  background: #ffffff;
  box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 653px;
    height: 51px;
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
