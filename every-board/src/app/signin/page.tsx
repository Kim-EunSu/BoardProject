"use client";

import styled from "styled-components";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import ModalPortal from "@/components/ui/ModalPortal";
import PasswordModal from "@/components/Modal/PasswordModal";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 35%;
  min-width: 530px;
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin-left: 8px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label`
  color: #344054;
  font-size: 1rem;
  margin-bottom: 8px;
`;

const Input = styled.input`
  position: relative;
  border-radius: 8px;
  padding: 10px 14px;
  border-width: 1px;
  border-style: solid;
  border-color: #d0d5dd;
`;

const PWButton = styled.div`
  position: absolute;
  top: 38px;
  right: 20px;
`;

const ErrorText = styled.span`
  margin: 5px;
  font-size: 0.8rem;
  color: #fc0374;
`;

const Remember = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
`;

const Rem1 = styled.p<{ checked: boolean }>`
  margin: 0;
  color: ${props => (props.checked ? "#5429FF" : "344054")};
`;
const Rem2 = styled.p`
  margin: 0;
  color: #fc0374;
`;

const ModalTitle = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 22px;
  font-weight: 500;
  color: #63637f;
  background: white;
  border-bottom: 5px solid #cacacb;
  border-radius: 13px 13px 0 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
  color: #344054;
  cursor: pointer;
  background-color: white;
  border: 1px solid #d0d5dd;
`;

const SubmitWrap = styled.div`
  text-align: center;
`;

const Submit = styled.span`
  color: #344054;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`;

const Icon = styled.div`
  svg {
    display: flex;
    margin-right: 8px;
    font-size: 1.5rem;
  }
`;

const Right = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

type FormValues = {
  errors: string;
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  //로그인하면 넘어가는 data
  const onSubmit = async (data: FormValues) => {
    console.log(data);

    await fetch("https://every-board.shop/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async res => {
        if (res.ok) {
          router.push("/");
          const ACCESS_TOKEN: string | null = res.headers.get("Authorization");
          const REFRESH_TOKEN: string | null = res.headers.get("Refresh");

          const clonedRes = res.clone();
          const responseData = await clonedRes.json();
          const USER_ID = responseData.userId;

          if (ACCESS_TOKEN)
            sessionStorage.setItem("Authorization", ACCESS_TOKEN);
          if (REFRESH_TOKEN) sessionStorage.setItem("Refresh", REFRESH_TOKEN);
          if (USER_ID) sessionStorage.setItem("userId", USER_ID);

          console.log("User ID:", responseData.userId);

          console.log("Authorization:", res.headers.get("Authorization"));
          console.log("Refresh:", res.headers.get("Refresh"));
        } else {
          throw new Error("회원가입 정보를 확인하세요.");
        }
      })
      .catch(err => console.log(err));
  };

  //checkbox
  const [ischecked, setIsChecked] = useState<boolean>(false);

  //password
  const [ShowPassword, setShowPassword] = useState<boolean>(false);

  //passwrod의 toggle기능
  const togglePassword = () => {
    setShowPassword(!ShowPassword);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <Wrapper>
        <Left>
          <TitleWrap>
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt="logo"
              priority
            />
            <Title>모두의 게시판</Title>
          </TitleWrap>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormWrap>
              <Label>Email</Label>
              <Input
                placeholder="test@example.com"
                {...register("email", {
                  required: "이메일을 입력해주세요.",
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              <ErrorText>{errors.email && errors.email.message}</ErrorText>
            </FormWrap>
            <FormWrap>
              <Label>Password</Label>
              <Input
                type={ShowPassword ? "text" : "password"}
                placeholder="●●●●●●●●"
                {...register("password", {
                  required: "비밀번호를 입력해주세요.",
                  minLength: {
                    value: 8,
                    message: "최소 8자 이상의 비밀번호를 입력해주세요.",
                  },
                })}
              />
              <PWButton onClick={togglePassword}>
                {ShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </PWButton>
              <ErrorText>
                {errors.password && errors.password.message}
              </ErrorText>
            </FormWrap>
            <FormWrap>
              <Remember>
                <Rem1 checked={ischecked}>
                  <Checkbox checked={ischecked} onChange={onChange} />
                  Remember me
                </Rem1>
                <Rem2 onClick={() => setOpenModal(true)}>비밀번호 찾기</Rem2>
                {openModal && (
                  <ModalPortal>
                    <PasswordModal onClose={() => setOpenModal(false)}>
                      <ModalTitle>비밀번호 찾기</ModalTitle>
                    </PasswordModal>
                  </ModalPortal>
                )}
              </Remember>
            </FormWrap>
            <Button
              style={{
                color: "white",
                backgroundColor: "#5429FF",
                border: "none",
                fontWeight: "bold",
              }}
              onClick={handleSubmit(onSubmit)}
            >
              로그인
            </Button>
            <Button>
              <Icon>
                <FcGoogle />
              </Icon>
              Sign in with Google
            </Button>
            <SubmitWrap>
              <Submit>계정이 없으신가요?</Submit>
              <Submit
                onClick={() => router.push("/signup")}
                style={{ color: "#fc0374", fontWeight: "bold" }}
              >
                회원가입
              </Submit>
            </SubmitWrap>
          </Form>
        </Left>
        <Right>
          <Image src={"/frame.png"} width={400} height={500} alt="frame" />
        </Right>
      </Wrapper>
    </>
  );
}
