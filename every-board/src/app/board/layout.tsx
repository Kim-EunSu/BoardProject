"use client";

import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Wrapper = styled.div`
  padding: 0 3rem 2rem;
  background-color: #efe9ff;
`;

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function layout(props: Props) {
  return (
    <>
      <Wrapper>
        {props.children}
        <Footer />
      </Wrapper>
    </>
  );
}
