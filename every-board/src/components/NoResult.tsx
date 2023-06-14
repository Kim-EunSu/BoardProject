import styled from "styled-components";
import Image from "next/image";

const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextArea = styled.div`
  font-size: 1.5rem;

  span {
    font-weight: 700;
    color: var(--pink);
  }
`;

interface Props {
  item?: string | null;
}

const NoResut = (props: Props) => {
  const { item } = props;
  return (
    <NoResult>
      <Image
        src={"/NoResults.png"}
        alt="검색결과 없음"
        width={400}
        height={400}
      />

      <TextArea>
        <span>{item}</span> 에대한 결과가 없습니다.
      </TextArea>
    </NoResult>
  );
};

export default NoResut;
