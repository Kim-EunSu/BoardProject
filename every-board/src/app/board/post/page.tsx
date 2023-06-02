"use client";

import styled from "styled-components";
import Header from "@/components/Header";
import { useState, useRef } from "react";
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

const Catagory = styled.button<{ isActive: boolean }>`
  position: absolute;
  top: 40px;
  right: 15px;
  max-width: 150px;
  font-weight: bold;
  padding: 0.3rem 2rem;
  border-radius: 4px;
  background: transparent;
  border: 2px solid #5429ff;
  color: ${({ isActive }) => (isActive ? "#ffff" : "#5429ff")};
  background: ${({ isActive }) => (isActive ? "#5429ff" : "transparent")};
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
  //category버튼
  const [isActive, setIsActive] = useState(false);

  //취소하기&작성하기 버튼
  const [inputBtn, setInputBtn] = useState<string>("");

  const handleInputButton = (buttonName: string) => {
    setInputBtn(buttonName);
  };

  const router = useRouter();

  //전체의 input관리
  const [inputs, setInputs] = useState({
    category: "",
    title: "",
    content: "",
    filename: "",
  });

  //비구조할당을 통해 값 추출
  const { category, title, content, filename } = inputs;

  //카테고리modal 클릭 유무를 저장할 state
  const [showModal, setShowModal] = useState<boolean>(false);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존 input객체 복사
      [name]: value,
    });
  };

  const saveBoard = async () => {
    await axios.post(`//localhost:3001/board/post`, inputs).then(res => {
      alert("등록됨");
      router.push("/");
    });
  };

  const backBoard = () => {
    router.push("/");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputs);
  };

  //카테고리 modal의 on/off
  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowModal(!showModal);
    setIsActive(!isActive);
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
      const reader = new FileReader();

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
        <FormWrapper onSubmit={handleSubmit}>
          <FormWrap>
            <Label>카테코리</Label>
            <Input
              name="category"
              value={category}
              onChange={onChange}
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
              onChange={onChange}
              placeholder="제목을 입력하세요."
            />
          </FormWrap>
          <FormWrap>
            <Label>내용</Label>
            <Textarea
              name="content"
              value={content}
              onChange={onChange}
              placeholder="내용을 입력하세요."
            />
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
                name="filename"
                type="file"
                ref={fileRef}
                onChange={handleFileOnChange}
              />
            </FilleWrapper>
          </FormWrap>
          <InputBtnWrap>
            <InputBtn
              isSelected={inputBtn === "취소"}
              onClick={() => {
                handleInputButton("취소");
                backBoard();
              }}
            >
              취소하기
            </InputBtn>

            <InputBtn
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
