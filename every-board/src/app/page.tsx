"use client";
import Header from "@/components/home/Header";
import Category from "@/components/Category";
import HotTopic from "@/components/home/HotTopic";
import SearchBar from "@/components/home/SearchBar";
import PhotoLine from "@/components/home/PhotoLine";
import Footer from "@/components/Footer";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
`;

const Article = styled.article`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 715px;
  }
  @media (min-width: 1080px) {
    width: 1000px;
  }
  @media (min-width: 1440px) {
    width: 1330px;
  }
`;

const Home = (): JSX.Element => {
  return (
    <HomeWrapper>
      <Header />
      <Category home="home" />
      <SearchBar />
      <Article>
        <HotTopic /> <HotTopic /> <HotTopic />
      </Article>
      <PhotoLine />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
