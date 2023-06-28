//원본
// import styled from "styled-components";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import Avatar from "./Avatar";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   height: 600px;
//   width: 500px;
//   top: 50%;
//   left: 50%;
//   border-radius: 18px;
//   background: #5429ff;
//   transform: translate(-50%, -50%);
//   z-index: 100;
// `;

// const CloseIcon = styled.button`
//   border: none;
//   background-color: transparent;

//   svg {
//     top: 0;
//     right: 0;
//     position: absolute;
//     color: #5429ff;
//     font-size: 3.2rem;
//     padding: 10px;
//   }
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   gap: 15px;
// `;

// const UploadWrapper = styled.div`
//   padding: 10px;
//   color: #5429ff;
//   background-color: white;
// `;

// const UploadImage = styled.label`
//   cursor: pointer;
//   font-size: 20px;
// `;

// const Input = styled.input`
//   width: 0;
//   height: 0;
//   opacity: 0;
// `;

// const DeleteImage = styled.button`
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   font-size: 20px;
//   color: #5429ff;
//   background-color: white;
// `;

// type Props = {
//   children: React.ReactNode;
//   onClose: () => void;
// };

// export default function ProfileModal({ onClose, children }: Props) {
//   return (
//     <Wrapper>
//       <CloseIcon onClick={() => onClose()}>
//         <AiOutlineCloseCircle />
//       </CloseIcon>
//       {children}
//       <Avatar size="large" />
//       <InputWrapper>
//         <UploadWrapper>
//           <UploadImage htmlFor="upload">사진 올리기</UploadImage>
//           <Input type="file" id="upload" />
//         </UploadWrapper>

//         <DeleteImage>사진 삭제하기</DeleteImage>
//       </InputWrapper>
//     </Wrapper>
//   );
// }

//적용1
// import styled from "styled-components";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import Avatar from "./Avatar";
// import { useState } from "react";
// import axios from "axios";

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   position: absolute;
//   height: 600px;
//   width: 500px;
//   top: 50%;
//   left: 50%;
//   border-radius: 18px;
//   background: #5429ff;
//   transform: translate(-50%, -50%);
//   z-index: 100;
// `;

// const CloseIcon = styled.button`
//   border: none;
//   background-color: transparent;

//   svg {
//     top: 0;
//     right: 0;
//     position: absolute;
//     color: #5429ff;
//     font-size: 3.2rem;
//     padding: 10px;
//   }
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   gap: 15px;
// `;

// const UploadWrapper = styled.div`
//   padding: 10px;
//   color: #5429ff;
//   background-color: white;
// `;

// const UploadImage = styled.label`
//   cursor: pointer;
//   font-size: 20px;
// `;

// const Input = styled.input`
//   width: 0;
//   height: 0;
//   opacity: 0;
// `;

// const DeleteImage = styled.button`
//   border: none;
//   padding: 10px;
//   cursor: pointer;
//   font-size: 20px;
//   color: #5429ff;
//   background-color: white;
// `;

// type Props = {
//   children: React.ReactNode;
//   onClose: () => void;
// };

// export default function ProfileModal({ onClose, children }: Props) {
//   const [idEdit, setIsEdit] = useState<boolean>(false);

//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [previewSource, setPreviewSource] = useState<string | null>(null);

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files || e.target.files.length === 0) return;

//     const file = e.target.files[0];

//     if (file) {
//       setSelectedFile(file);
//       previewFile(file);
//     }
//   };

//   const previewFile = (file: File) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       if (typeof reader.result === "string") {
//         setPreviewSource(reader.result);
//       }
//     };
//   };

//   const handleImageUpload = async () => {
//     if (!selectedFile) return;

//     const userId = sessionStorage.getItem("userId");
//     const Access_Token = sessionStorage.getItem("Authorization");

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: Access_Token,
//       },
//     };

//     try {
//       const response = await axios.post(
//         `https://every-board.shop/user/${userId}/profile`,
//         formData,
//         config,
//       );
//       setIsEdit(false);
//       alert("이미지 업로드 성공");
//     } catch (error) {
//       console.error("이미지 업로드 실패: ", error);
//       alert("이미지 업로드 실패");
//     }
//   };

//   return (
//     <Wrapper>
//       <CloseIcon onClick={() => onClose()}>
//         <AiOutlineCloseCircle />
//       </CloseIcon>
//       {children}
//       <Avatar size="large" />
//       <InputWrapper>
//         <UploadWrapper>
//           <UploadImage htmlFor="upload">사진 올리기</UploadImage>
//           <Input type="file" id="upload" onChange={handleFileSelect} />
//         </UploadWrapper>

//         <DeleteImage>사진 삭제하기</DeleteImage>
//         <button onClick={handleImageUpload}>수정 완료</button>
//       </InputWrapper>
//     </Wrapper>
//   );
// }

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
      formData.append("data", JSON.stringify({ userId: Number(userId) || 0 }));
      formData.append(
        "ProfileUrl",
        inputFileRef.current.files[0],
        inputFileRef.current.files[0].name,
      );

      try {
        await fetch(`https://every-board.shop/user/${userId}/profile`, {
          method: "POST",
          headers: {
            Authorization: Access_Token || "",
          },
          body: formData,
        })
          .then(res => {
            if (res.ok === true) {
              return res.json();
            }
            throw new Error("에러 발생!");
          })
          .catch(error => {
            alert(error);
            console.log(error);
          })
          .then(data => {
            console.log(data);
          });

        // const response = await axios.post(
        //   `https://every-board.shop/user/${userId}/profile`,
        //   formData,
        //   {
        //     headers: {
        //       Authorization: Access_Token,
        //     },
        //   },
        // );

        // if (response.status === 200) {
        //   const data = response.data;
        //   console.log(data);
        // } else {
        //   console.error("Error:", response.statusText);
        // }
      } catch (err) {
        console.log(err);
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
