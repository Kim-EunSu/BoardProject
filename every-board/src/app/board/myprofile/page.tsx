"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
`;

const Section1 = styled.div`
  display: flex;
  align-items: center;
  border-radius: 18px;
  padding: 1.5rem 3.75rem;
  background-color: white;
  justify-content: space-between;

  @media (max-width: 350px) {
    padding: 1.5rem 0.75rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  background-color: #5429ff;
`;

const Name = styled.p`
  font-size: 1.5rem;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 25px;
  border: 2px solid #5429ff;
`;

const Edit = styled.div`
  color: #5429ff;
  font-weight: bold;
  font-size: 0.875rem;
`;

const Section2 = styled.div`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 18px;
  padding: 20px 5rem;
  background-color: white;
  justify-content: space-between;

  @media (max-width: 1080px) {
    padding: 20px 3rem;
  }

  @media (max-width: 680px) {
    padding: 20px 1rem;
  }

  @media (max-width: 350px) {
    padding: 20px 0rem;
  }
`;

const TopWrapper = styled.div`
  width: 250px;
  display: flex;
  gap: 10px;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px #e2e2e2;

  @media (max-width: 350px) {
    margin: 10px;
    padding: 0.5rem;
    flex-direction: column;
  }
`;

const Icon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #f4f7fe;
`;

const TopWrap = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 350px) {
    align-items: center;
  }
`;

const Toptitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: #a3aed0;
`;

const TopContent = styled.h3`
  font-size: 1.5rem;
  color: #2b3674;

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 1rem;
  align-items: center;
  flex-direction: row;
  border-radius: 20px;
  box-shadow: 1px 1px 5px 1px #e2e2e2;
`;

const BottomWrap = styled.div``;

const BottomTitle = styled.h4`
  color: #a3aed0;
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 10px;
  @media (max-width: 350px) {
    font-size: 0.5rem;
  }
`;
const BottomContent = styled.p`
  color: #343e4c;
  font-weight: 600;
  font-size: 1.2rem;

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 18px;
  background-color: white;
  padding: 20px 5rem 100px;
  margin-bottom: 100px;

  @media (max-width: 350px) {
    padding: 20px;
  }
`;

const Alarm = styled.p``;

export default function page() {
  return (
    <>
      <Wrapper>
        <Section1>
          <Left>
            <Avatar></Avatar>
            <Name>사용자</Name>
          </Left>
          <Right>
            <Edit>회원정보 수정</Edit>
          </Right>
        </Section1>
        <Section2>
          <TopWrapper>
            <Icon></Icon>
            <TopWrap>
              <Toptitle>My Post</Toptitle>
              <TopContent>24</TopContent>
            </TopWrap>
          </TopWrapper>
          <TopWrapper>
            <Icon></Icon>
            <TopWrap>
              <Toptitle>My Scrap</Toptitle>
              <TopContent>78</TopContent>
            </TopWrap>
          </TopWrapper>
          <TopWrapper>
            <Icon></Icon>
            <TopWrap>
              <Toptitle>Views</Toptitle>
              <TopContent>7,302</TopContent>
            </TopWrap>
          </TopWrapper>
        </Section2>
        <Section3>
          <Alarm>8개알림</Alarm>
          <BottomWrapper>
            <Icon></Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 좋아요를 눌렀습니다.</BottomTitle>
              <BottomContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </BottomContent>
            </BottomWrap>
          </BottomWrapper>
          <BottomWrapper>
            <Icon></Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 좋아요를 눌렀습니다.</BottomTitle>
              <BottomContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </BottomContent>
            </BottomWrap>
          </BottomWrapper>
          <BottomWrapper>
            <Icon></Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 좋아요를 눌렀습니다.</BottomTitle>
              <BottomContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </BottomContent>
            </BottomWrap>
          </BottomWrapper>
          <BottomWrapper>
            <Icon></Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 좋아요를 눌렀습니다.</BottomTitle>
              <BottomContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </BottomContent>
            </BottomWrap>
          </BottomWrapper>
        </Section3>
      </Wrapper>
    </>
  );
}
