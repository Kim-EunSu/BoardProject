import { BiSearch } from "react-icons/bi";
import ButtonLayout from "../ButtonLayout";
import styled from "styled-components";

const SearchBar = (): JSX.Element => {
  return (
    <SearchBarLayout>
      <BiSearch size="30px" color="var(--primary)" />
      <input placeholder="검색어를 입력하세요."></input>
      <ButtonLayout
        width="58px"
        height="28px"
        text="검색"
        color="#ffffff"
        background="var(--primary)"
        radius="50px"
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
