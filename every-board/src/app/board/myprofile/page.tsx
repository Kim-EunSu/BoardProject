"use client";

import Header from "@/components/Header";
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
  padding: 19px 5rem;
  border-radius: 18px;
  background-color: white;
  justify-content: space-around;
`;

const Post = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 1.25rem 3rem 1.25rem 1rem;
  box-shadow: 1px 1px 5px 1px #e2e2e2;
`;

const Icon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 18px;
  background-color: #f4f7fe;
`;

const SubWrapper = styled.div`
  border-radius: 20px;
`;

const Subtitle = styled.h4`
  color: #a3aed0;
  margin-bottom: 10px;
`;

const Amount = styled.h3`
  font-size: 1.5rem;
  color: #2b3674;
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 18px;
  background-color: white;
  padding: 20px 5rem 100px;
  margin-bottom: 100px;
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
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>My Post</Subtitle>
              <Amount>24</Amount>
            </SubWrapper>
          </Post>
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>My Post</Subtitle>
              <Amount>24</Amount>
            </SubWrapper>
          </Post>
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>My Post</Subtitle>
              <Amount>24</Amount>
            </SubWrapper>
          </Post>
        </Section2>
        <Section3>
          <Alarm>8개알림</Alarm>
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>사용자님이 좋아요를 눌렀습니다.</Subtitle>
              <Amount>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Amount>
            </SubWrapper>
          </Post>{" "}
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>사용자님이 좋아요를 눌렀습니다.</Subtitle>
              <Amount>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Amount>
            </SubWrapper>
          </Post>
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>사용자님이 좋아요를 눌렀습니다.</Subtitle>
              <Amount>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Amount>
            </SubWrapper>
          </Post>
          <Post>
            <Icon></Icon>
            <SubWrapper>
              <Subtitle>사용자님이 좋아요를 눌렀습니다.</Subtitle>
              <Amount>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Amount>
            </SubWrapper>
          </Post>
        </Section3>
      </Wrapper>
    </>
  );
}
