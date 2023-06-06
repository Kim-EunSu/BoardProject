"use client";

import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Category from "@/components/Category";
import axios from "axios";

interface FormType {
  category?: string;
  title?: string;
  content?: string;
}

const Wrapper = styled.div`
  width: 350px;
  margin: 0 auto;
  border-radius: 18px;
  background-color: white;
  @media (min-width: 768px) {
    width: 680px;
  }
  @media (min-width: 1080px) {
    width: 980px;
  }
  @media (min-width: 1440px) {
    width: 1200px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 0 15px;
  gap: 25px;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 320px;
    height: auto;
    min-height: 45px;
    background: #ffffff;
    border: 1px solid #e9eff4;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      width: 650px;
    }
    @media (min-width: 1080px) {
      width: 950px;
    }
    @media (min-width: 1440px) {
      width: 1170px;
    }
    input {
      min-height: 45px;
      width: inherit;
      margin-left: 10px;
    }
  }

  Input {
    border: none;
    outline: none;
  }
`;

const CategoryWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -25px;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Catagory = styled.button<{ isactive: "true" | "false" }>`
  cursor: pointer;
  max-width: 150px;
  margin: 0 5px;
  width: 200px;
  height: 28.65px;
  font-size: 0.775rem;
  font-weight: bold;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #5429ff;
  color: ${({ isactive }) => (isactive === "true" ? "#ffff" : "#5429ff")};
  background: ${({ isactive }) =>
    isactive === "true" ? "#5429ff" : "transparent"};
`;

const inputCommonStyle = {
  borderRadius: "8px",
  padding: "10px 14px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#E9EFF4",
};

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

const page = () => {
  const router = useRouter();
  //전체의 input관리
  const [form, setForm] = useState<FormType>({
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
    await axios.post(`//localhost:3000/board/post`, form).then(res => {
      alert("등록됨");
      // router.push("/");
    });
  };

  const backBoard = () => {
    router.push("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setForm({ ...form, title: "", content: "" });
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

  //category 상태 끌어올리기
  const bringToCategoryState = (el: string) => {
    setForm(form => ({ ...form, category: el }));
    setShowModal(false);
  };

  return (
    <>
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit}>
          <FormWrap>
            <Label>카테코리</Label>
            <div>
              <input
                name="category"
                value={form.category}
                onChange={handleChange}
                ref={categoryInput}
                placeholder="카테고리를 선택하세요."
                readOnly
              />
              <Catagory isactive={"false"} onClick={toggleModal}>
                카테고리
              </Catagory>
            </div>
          </FormWrap>
          <CategoryWrap className="category">
            {showModal && <Category post="post" fn={bringToCategoryState} />}
          </CategoryWrap>
          <FormWrap>
            <Label>제목</Label>
            <div>
              <input
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="제목을 입력하세요."
              />
            </div>
          </FormWrap>
          <FormWrap>
            <Label>내용</Label>
            <div>
              <input
                name="content"
                value={content}
                onChange={handleChange}
                placeholder="내용을 입력하세요."
              />
            </div>
          </FormWrap>
          <FormWrap>
            <Label>파일 추가</Label>
            <ImageWrapper>
              {images.length > 0
                ? images.map((image, index) => (
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
                : null}
              {/* type을 설정하지 않으면 작성하기 버튼과 같이 작동하여 이미지 추가 버튼만 눌러도 form이 서버에 보내짐 */}
              <FileButton type="button" onClick={onAddHandler}>
                이미지 추가하기
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
};

export default page;
