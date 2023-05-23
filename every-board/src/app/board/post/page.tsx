"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import { useState } from "react";

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
`;

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
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

const FileInput = styled.input`
  ${inputCommonStyle}
  border: 1px dotted #5429FF;
`;

export default function page() {
  //파일 추가
  const [imgfile, setImgFile] = useState<string>("");
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
            <Input placeholder="카테고리를 선택하세요." />
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
            <FileInput
              accept="image/*"
              placeholder="You can put files from your computer here"
            />
          </FormWrap>
        </FormWrapper>
      </Wrapper>
    </>
  );
}
