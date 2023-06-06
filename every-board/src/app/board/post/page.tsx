"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Category from "@/components/Category";
import axios from "axios";

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

const Catagory = styled.button<{ isActive: Boolean }>`
  position: absolute;
  top: 40px;
  right: 15px;
  max-width: 150px;
  font-weight: bold;
  padding: 0.3rem 2rem;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #5429ff;

  color: ${props => (props.isActive ? "#ffff" : "#5429ff")};
  background: ${props => (props.isActive ? "#5429ff" : "transparent")};
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

const ImageWrapper = styled.div``;

const ImageWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ImageName = styled.p``;

const ImageThumbnail = styled.img`
  width: 5rem;
  height: 5rem;
  padding: 10px;
`;

const ImageDeleteBtn = styled.button`
  font-size: 1rem;
  color: #fc0374;
  font-weight: bold;
  border: transparent;
  background: transparent;
  text-decoration: underline;
`;

const FileInput = styled.input``;

const FileButton = styled.button`
  width: 100%;
  padding: 20px 0;
  color: #5429ff;
  border-radius: 8px;
  background: transparent;
  border: 1px solid #e9eff4;
`;

const InputBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 100px;
  &:first-child {
    margin-right: 20px;
  }
`;

const InputBtn = styled.button<{ isSelected: Boolean }>`
  max-width: 150px;
  font-weight: bold;
  padding: 0.3rem 2rem;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #5429ff;
  color: ${props => (props.isSelected ? "#ffff" : "#5429ff")};
  background: ${props => (props.isSelected ? "#5429ff" : "transparent")};

  &:first-child {
    margin-right: 20px;
  }
`;

export default function page() {
  //전체의 input관리
  const [form, setForm] = useState({
    category: "",
    title: "",
    content: "",
  });

  //비구조할당을 통해 값 추출
  const { category, title, content } = form;

  //카테고리modal 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState<boolean>(false);

  //category버튼
  const [isActive, setIsActive] = useState(false);

  //이미지 파일을 여러개 올리기위한 state
  const [images, setImages] = useState<File[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  //취소하기&작성하기 버튼
  const [inputBtn, setInputBtn] = useState<string>("");

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    //이미지파일 중 첫번째 파일 가져옴
    const files = e.target.files;
    if (!files) return;

    const newImages = Array.from(files);
    setImages([...images, ...newImages]);
  };

  const handleInputButton = (buttonName: string) => {
    setInputBtn(buttonName);
  };

  const router = useRouter();

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form, // 기존 form객체 복사
      [name]: value,
    });
  };

  const saveBoard = async () => {
    await axios.post(`//localhost:3001/board/post`, form).then(res => {
      alert("등록됨");
      // router.push("/");
    });
  };

  const backBoard = () => {
    // router.push("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setForm({
      category: "",
      title: "",
      content: "",
    });
    console.log(form);
  };

  const onDeleteHandler = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const onAddHandler = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  //카테고리 modal의 on/off
  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
    setIsActive(!isActive);
  };

  const categoryInput = useRef<HTMLInputElement>(null);

  return (
    <>
      <Wrapper>
        <Box1>
          <Avatar></Avatar>
          <Name>사용자</Name>
        </Box1>
        <FormWrapper onSubmit={handleSubmit}>
          <FormWrap>
            <Label>카테코리</Label>
            <Input
              name="category"
              value={category}
              onChange={handleChange}
              ref={categoryInput}
              placeholder="카테고리를 선택하세요."
            />
            <Catagory isActive={isActive} onClick={toggleModal}>
              카테고리
            </Catagory>
            <CategoryWrap>{showModal && <Category></Category>}</CategoryWrap>
          </FormWrap>
          <FormWrap>
            <Label>제목</Label>
            <Input
              name="title"
              value={title}
              onChange={handleChange}
              placeholder="제목을 입력하세요."
            />
          </FormWrap>
          <FormWrap>
            <Label>내용</Label>
            <Textarea
              name="content"
              value={content}
              onChange={handleChange}
              placeholder="내용을 입력하세요."
            />
          </FormWrap>
          <FormWrap>
            <Label>파일 추가</Label>
            <ImageWrapper>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index}>
                    <ImageWrap>
                      <ImageLeft>
                        <ImageThumbnail
                          src={URL.createObjectURL(image)}
                          alt={image.name}
                        ></ImageThumbnail>
                        <ImageName>{image.name}</ImageName>
                      </ImageLeft>
                      <ImageDeleteBtn onClick={() => onDeleteHandler(index)}>
                        삭제
                      </ImageDeleteBtn>
                    </ImageWrap>
                  </div>
                ))
              ) : (
                <ImageName>
                  파일업로드 칸을 눌러 이미지를 추가해주세요.
                </ImageName>
              )}
              {/* type을 설정하지 않으면 작성하기 버튼과 같이 작동하여 이미지 추가 버튼만 눌러도 form이 서버에 보내짐 */}
              <FileButton type="button" onClick={onAddHandler}>
                You can add files from your computer here file
              </FileButton>
              <FileInput
                name="file"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={onFileInputChange}
                style={{ display: "none" }}
              />
            </ImageWrapper>
          </FormWrap>
          <InputBtnWrap>
            <InputBtn
              type="submit"
              isSelected={inputBtn === "취소"}
              onClick={() => {
                handleInputButton("취소");
                backBoard();
              }}
            >
              취소하기
            </InputBtn>
            <InputBtn
              type="submit"
              isSelected={inputBtn === "작성"}
              onClick={() => {
                handleInputButton("작성");
                saveBoard();
              }}
            >
              작성하기
            </InputBtn>
          </InputBtnWrap>
        </FormWrapper>
      </Wrapper>
    </>
  );
}
