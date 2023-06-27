import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Avatar from "./Avatar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 600px;
  width: 500px;
  top: 50%;
  left: 50%;
  border-radius: 18px;
  background: #5429ff;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const CloseIcon = styled.button`
  border: none;
  background-color: transparent;

  svg {
    top: 0;
    right: 0;
    position: absolute;
    color: #5429ff;
    font-size: 3.2rem;
    padding: 10px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const UploadWrapper = styled.div`
  padding: 10px;
  color: #5429ff;
  background-color: white;
`;

const UploadImage = styled.label`
  cursor: pointer;
  font-size: 20px;
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

const DeleteImage = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #5429ff;
  background-color: white;
`;

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ProfileModal({ onClose, children }: Props) {
  return (
    <Wrapper>
      <CloseIcon onClick={() => onClose()}>
        <AiOutlineCloseCircle />
      </CloseIcon>
      {children}
      <Avatar size="large" />
      <InputWrapper>
        <UploadWrapper>
          <UploadImage htmlFor="upload">사진 올리기</UploadImage>
          <Input type="file" id="upload" />
        </UploadWrapper>

        <DeleteImage>사진 삭제하기</DeleteImage>
      </InputWrapper>
    </Wrapper>
  );
}
