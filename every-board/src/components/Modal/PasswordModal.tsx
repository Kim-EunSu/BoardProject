import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 550px;
  width: 450px;
  top: 50%;
  left: 50%;
  border-radius: 18px;
  background: white;
  border: 5px solid #cacacb;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const ProfilWrapper = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CloseIcon = styled.button`
  top: 8px;
  right: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  background-color: transparent;

  svg {
    color: #63637f;
    font-size: 2rem;
  }
`;

const InputWrapper = styled.div`
  gap: 15px;
  display: flex;
  color: #63637f;
  padding-top: 10px;
  flex-direction: column;
`;

const InputTitle = styled.label``;

const PassWordInput = styled.input`
  width: 350px;
  padding: 10px 10px 10px 5px;
  border: none;
  border-bottom: 2px solid #63637f;
  outline: none;
`;

const InputMessage = styled.p`
  font-size: 16px;

  &:last-child {
    color: #715ae6;
    margin-top: 7px;
    font-size: 12px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
`;

const InputBtn = styled.button`
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  background: #63637f;
`;

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function PasswordModal({ onClose, children }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handlePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmission = async () => {
    try {
      const response = await axios.post(
        "https://every-board.shop/auth/password",
        { email },
      );

      if (response.status === 200) {
        alert("인증번호가 전송되었습니다.");
        router.push("/auth/password");
      } else {
        alert("이메일 전송에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (err) {
      console.log(err);
      alert("이메일 전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <Wrapper>
      {children}
      <CloseIcon onClick={() => onClose()}>
        <AiOutlineCloseCircle />
      </CloseIcon>
      <ProfilWrapper>
        <InputWrapper>
          <InputMessage>가입한 이메일 주소를 입력해주세요.</InputMessage>
          <InputMessage>
            비밀번호 재설정을 위한 이메일을 보내드리겠습니다.
          </InputMessage>
          <InputWrap>
            <InputTitle>E-mail</InputTitle>
            <PassWordInput
              onChange={handlePW}
              name="email"
              value={email}
              type="text"
              placeholder="test@naver.com"
            />
            <InputMessage>대소문자를 구분하여 입력해주세요.</InputMessage>
          </InputWrap>

          <InputBtn onClick={handleEmailSubmission}>확인</InputBtn>
        </InputWrapper>
      </ProfilWrapper>
    </Wrapper>
  );
}
