import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState, useRef } from "react";
import { useAvatar } from "../../context/AvatarContext";
import axios from "axios";

const Wrapper = styled.div`
  gap: 15px;
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
  position: absolute;
  background-color: transparent;

  svg {
    color: #5429ff;
    font-size: 2rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const UploadWrapper = styled.div`
  padding: 12px;
  color: #5429ff;
  border-radius: 7px;
  background-color: white;
`;

const UploadImage = styled.label`
  cursor: pointer;
  font-size: 16px;
`;

const Input = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

const DeleteImage = styled.button`
  border: none;
  padding: 12px;
  cursor: pointer;
  font-size: 16px;
  color: #5429ff;
  border-radius: 7px;
  background-color: white;
`;

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ProfileModal({ onClose, children }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const { setAvatarImage } = useAvatar();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      //파일 사이즈 제한 (2MB)
      const maxFileSize = 2 * 1024 * 1024;
      if (file.size > maxFileSize) {
        alert(
          "파일 크기가 2MB를 초고하였습니다. 더 작은 사이즈의 이미지를 선택해주세요.",
        );
        return;
      }

      const reader = new FileReader();

      reader.onload = async e => {
        const result = e.target?.result as string;
        setImage(result);
        setAvatarImage(result); // Update the global avatarImage
        await uploadImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const DeleteImageFile = () => {
    setImage(null);
    setAvatarImage(null);
  };

  const userId = sessionStorage.getItem("userId");
  const Access_Token = sessionStorage.getItem("Authorization");

  //원래 코드
  // const uploadImage = async () => {
  //   if (
  //     inputFileRef.current &&
  //     inputFileRef.current.files &&
  //     inputFileRef.current.files[0]
  //   ) {
  //     const formData = new FormData();
  //     formData.append("data", JSON.stringify({ userId: Number(userId) || 0 }));
  //     formData.append(
  //       "ProfileUrl",
  //       inputFileRef.current.files[0],
  //       inputFileRef.current.files[0].name,
  //     );

  //     try {
  //       const response = await axios.post(
  //         `https://every-board.shop/user/${userId}/profile`,
  //         formData,
  //         {
  //           headers: {
  //             Authorization: Access_Token,
  //           },
  //         },
  //       );

  //       if (response.status === 200) {
  //         const data = response.data;
  //         console.log(data);
  //       } else {
  //         console.error("Error:", response.statusText);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const uploadImage = async () => {
    if (
      inputFileRef.current &&
      inputFileRef.current.files &&
      inputFileRef.current.files[0]
    ) {
      const formData = new FormData();

      //type을 지정하지 않을 경우 500error발생
      formData.append(
        "data",
        new Blob([JSON.stringify({ userId: Number(userId) })], {
          type: "application/json",
        }),
      );

      formData.append(
        "ProfileUrl",
        inputFileRef.current.files[0],
        inputFileRef.current.files[0].name,
      );

      try {
        await axios.post(
          `https://every-board.shop/user/${userId}/profile`,
          formData,
          {
            headers: {
              //하렴님 여기 부분은 없어도 500error가 생기지 않습니다!
              // "Content-Type": "multipart/form-data",
              Authorization: Access_Token,
            },
          },
        );
      } catch (err: any) {
        console.log(err);
        alert("Error: " + err.message); // 수정된 코드
      }
    }
  };

  return (
    <Wrapper>
      {children}
      <CloseIcon onClick={() => onClose()}>
        <AiOutlineCloseCircle />
      </CloseIcon>
      <ProfilWrapper>
        <Avatar size="large" image={image} />
        <InputWrapper>
          <UploadWrapper>
            <UploadImage htmlFor="upload">사진 올리기</UploadImage>
            <Input
              type="file"
              id="upload"
              ref={inputFileRef}
              onChange={handleFileChange}
            />
          </UploadWrapper>
          <DeleteImage onClick={DeleteImageFile}>사진 삭제하기</DeleteImage>
        </InputWrapper>
      </ProfilWrapper>
    </Wrapper>
  );
}
