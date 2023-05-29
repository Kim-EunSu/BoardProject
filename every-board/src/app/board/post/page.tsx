"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Category from "@/components/Category";

const Wrapper = styled.div``;

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

const Catagory = styled.button<{ isActive: boolean }>`
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
  color: ${({ isActive }) => (isActive ? "#5429ff" : "#ffff")};
  background: ${({ isActive }) => (isActive ? "transparent" : "#5429ff")};
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
  borderColor: "#d0d5dd",
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
  border: 1px dotted #5429ff;
  padding: 1rem 3rem;

  &::placeholder {
    color: #5429ff;
    text-align: center;
  }
`;

const FileBtn = styled.button``;

const ImageBox = styled.div``;

interface FileType {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  path: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export default function page() {
  //카테고리modal 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState(false);

  //카테고리 값 저장
  const [category, setCategory] = useState("");

  const categoryInput = useRef<HTMLInputElement>(null);

  //input창에 값을 넣어야하는데 실패함
  // const handleCategory = (value: string) => {
  //   setCategory(value);
  // };

  const handleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setShowModal(!showModal);
    }
  };

  //업로드하려는 파일 정보
  const [file, setFile] = useState<FileType[]>([]);

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();

  const fileObjects = acceptedFiles.map((file: File) => {
    const formData = new FormData();
    formData.append("assets", file, file.name);
    console.log(file);
  });

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
            <Input
              ref={categoryInput}
              placeholder="카테고리를 선택하세요."
              defaultValue={category}
            />
            <Catagory isActive={!showModal} onClick={handleModal}>
              카테고리
            </Catagory>
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
            <FilleWrapper {...getRootProps()}>
              <FileInput {...getInputProps()} />
              {/* <p>Drag 'n' drop some files here, or click to select files</p> */}
            </FilleWrapper>
          </FormWrap>
        </FormWrapper>
      </Wrapper>
    </>
  );
}
