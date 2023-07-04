"use client";

import styled from "styled-components";
import { BsGrid1X2Fill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdTag } from "react-icons/md";
import { useEffect, useState } from "react";
import ModalPortal from "@/components/ui/ModalPortal";
import ProfileModal from "@/components/Modal/ProfileModal";
import Avatar from "@/components/Avatar";
import axios from "axios";

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

const UserNickname = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
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
  display: flex;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: #f4f7fe;

  svg {
    height: 2rem;
    width: 2rem;
    color: #fc0374;
  }
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

const ModalTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 22px;
  font-weight: 500;
  color: #63637f;
  background: white;
  border-bottom: 5px solid #cacacb;
  border-radius: 13px 13px 0 0;
`;

//color를 지정하지 않으면 기본적으로 pink설정
export default function page() {
  //모달창
  const [openModal, setOpenModal] = useState(false);
  const [Nickname, setNickname] = useState<string>("");

  useEffect(() => {
    const USER_ID = sessionStorage.getItem("userId");
    axios
      .get(`https://every-board.shop/user/${USER_ID}/nickname`)
      .then(function (res) {
        setNickname(res.data.nickname);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <Section1>
          <Left>
            <Avatar size="medium" />
            <UserNickname>{Nickname && <span>{Nickname}</span>}님</UserNickname>
          </Left>
          <Right>
            <Edit onClick={() => setOpenModal(true)}>프로필 이미지 수정</Edit>
            {openModal && (
              <ModalPortal>
                <ProfileModal onClose={() => setOpenModal(false)}>
                  <ModalTitle>프로필 수정</ModalTitle>
                </ProfileModal>
              </ModalPortal>
            )}
          </Right>
        </Section1>
        <Section2>
          <TopWrapper>
            <Icon>
              <BsGrid1X2Fill color="#5429FF" />
            </Icon>
            <TopWrap>
              <Toptitle>My Post</Toptitle>
              <TopContent>24</TopContent>
            </TopWrap>
          </TopWrapper>
          <TopWrapper>
            <Icon>
              <BsBarChartFill color="#5429FF" />
            </Icon>
            <TopWrap>
              <Toptitle>My Scrap</Toptitle>
              <TopContent>78</TopContent>
            </TopWrap>
          </TopWrapper>
          <TopWrapper>
            <Icon>
              <BsPeopleFill color="#5429FF" />
            </Icon>
            <TopWrap>
              <Toptitle>Views</Toptitle>
              <TopContent>7,302</TopContent>
            </TopWrap>
          </TopWrapper>
        </Section2>
        <Section3>
          <Alarm>8개알림</Alarm>
          <BottomWrapper>
            <Icon>
              <AiFillHeart />
            </Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 좋아요를 눌렀습니다.</BottomTitle>
              <BottomContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </BottomContent>
            </BottomWrap>
          </BottomWrapper>
          <BottomWrapper>
            <Icon>
              <AiFillHeart />
            </Icon>
            <BottomWrap>
              <BottomTitle>
                사용자님이 ‘Lorem ipsum dolor sit amet ‘ 게시글에 댓글을
                달았습니다.
              </BottomTitle>
              <BottomContent>좋은 정보 감사합니다~! </BottomContent>
            </BottomWrap>
          </BottomWrapper>
          <BottomWrapper>
            <Icon>
              <BiMessageAltDetail />
            </Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 좋아요를 눌렀습니다.</BottomTitle>
              <BottomContent>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </BottomContent>
            </BottomWrap>
          </BottomWrapper>
          <BottomWrapper>
            <Icon>
              <MdTag />
            </Icon>
            <BottomWrap>
              <BottomTitle>사용자님이 나를 태그했습니다.</BottomTitle>
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
