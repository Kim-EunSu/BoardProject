"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import { useState, useRef } from "react";
import Category from "@/components/Category";

const Wrapper = styled.div`
  padding: 1rem 3rem;
  border-radius: 18px;
  background-color: white;
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

const Box1 = styled.div`
  display: flex;
  align-items: center;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

const FormWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;

  &:first-child {
    position: relative;
  }
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

interface BtnProps {
  isactive?: boolean;
}

const Catagory = styled.button<BtnProps>`
  position: absolute;
  top: 40px;
  right: 15px;
  max-width: 150px;
  font-weight: bold;
  padding: 0.3rem 2rem;
  color: #5429ff;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #5429ff;
  color: ${({ isactive }) => (isactive ? "#5429ff" : "#ffff")};
  background: ${({ isactive }) => (isactive ? "transparent" : "#5429ff")};
`;

const CategoryWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const inputCommonStyle = {
  borderRadius: "8px",
  padding: "10px 14px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#E9EFF4",
};

const Input = styled.input`
  ${inputCommonStyle}
`;

const Textarea = styled.textarea`
  ${inputCommonStyle}
  resize: none;
  min-height: 8rem;
`;

const FilleWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
  flex-direction: column;
`;

const FileInput = styled.input`
  display: block !important;
  ${inputCommonStyle}
  border: 1px dashed #5429ff;
  padding: 1rem 3rem;

  &::placeholder {
    color: #5429ff;
    text-align: center;
  }
`;

const FileBtnWrapper = styled.div`
  position: relative;
`;

const FileBtn = styled.button`
  top: 18px;
  position: absolute;
  right: 20px;
  font-size: 1rem;
  color: #fc0374;
  border: transparent;
  background: transparent;
  text-decoration: underline;

  &:first-child {
    margin-right: 80px;
  }
`;

export default function page() {
  //카테고리modal 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState<boolean>(false);

  //카테고리 modal의 on/off
  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const categoryInput = useRef<HTMLInputElement>(null);

  //사용자가 불러온 파일의 정보를 넣는값
  const [file, setFile] = useState<File | undefined>();

  //사용자가 불러온 파일의 URL
  const [previewURL, setPreviewURL] = useState("");

  //preview는 img태그가 들어갈 곳
  const [preview, setPreview] = useState("");

  //input클릭버튼을 발생시키기위해 생성
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //input을 통해 파일 업로드시(length의길이가 1일때) 업로드를 취소할 경우 에러가 발생하므로 이와같이 해결
    if (file?.length === 0) {
      return;
    }
    //EventTarget오류 유형에 files속성이 없다고 오류가 뜨기 때문에 if부분 필수
    if (e.target.files != null) {
      const file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = e => {
        const target = e.target as FileReader;
        const result = target.result;
        setPreviewURL(result as string);

        if (result) {
          setPreview(result as string);
        }
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleFileButton = (e: React.MouseEvent) => {
    e.preventDefault();
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleFileDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (fileRef.current) {
      fileRef.current.value = "";
    }
    setPreview("");
    setPreviewURL("");
  };

  return (
    <>
      <Header title="PostWriting" />
      <Wrapper>
        <Box1>
          <Avatar></Avatar>
          <Name>사용자</Name>
        </Box1>
        <FormWrapper>
          <FormWrap>
            <Label>카테코리</Label>
            <Input ref={categoryInput} placeholder="카테고리를 선택하세요." />
            <Catagory onClick={toggleModal}>카테고리</Catagory>
            <CategoryWrap>{showModal && <Category></Category>}</CategoryWrap>
          </FormWrap>
          <FormWrap>
            <Label>제목</Label>
            <Input placeholder="제목을 입력하세요." />
          </FormWrap>
          <FormWrap>
            <Label>내용</Label>
            <Textarea placeholder="내용을 입력하세요." />
          </FormWrap>
          <FormWrap>
            <Label>파일 추가</Label>
            <FilleWrapper>
              {preview && (
                <FileBtnWrapper>
                  <FileBtn onClick={handleFileButton}>수정하기</FileBtn>
                  <FileBtn onClick={handleFileDelete}>삭제하기</FileBtn>
                </FileBtnWrapper>
              )}
              <FileInput
                type="file"
                ref={fileRef}
                onChange={handleFileOnChange}
              />
            </FilleWrapper>
          </FormWrap>
        </FormWrapper>
      </Wrapper>
    </>
  );
}
