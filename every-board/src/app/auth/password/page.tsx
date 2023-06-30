"use client";

import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { useRouter, useSearchParams } from "next/navigation";

//https://everyboard.shop/auth/password?authCode=YAQ6820

//https://everyboard.shop/auth/password?authCode=TLB10142

//usePathname은 현재 url을 확인할 수 있는 훅(쿼리스트링값 빼고)
// => https://everyboard.shop/auth/password까지

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 550px;
  width: 450px;
  top: 50%;
  left: 50%;
  border-radius: 18px;
  background: white;
  border: 5px solid #cacacb;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 22px;
  font-weight: 500;
  color: #63637f;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 5px solid #cacacb;
  border-radius: 13px 13px 0 0;
`;

const Atuh = styled.h3`
  margin: 40px 0;
  color: #fc0374;
`;

const InputWrapper = styled.div`
  gap: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const InuptWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #344054;
  font-size: 1rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border-radius: 8px;
  padding: 10px 14px;
  border-width: 1px;
  border-style: solid;
  border-color: #d0d5dd;
`;

const ErrorText = styled.span`
  margin: 5px;
  font-size: 0.8rem;
  color: #fc0374;
`;

const Button = styled.button`
  height: 30px;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 30px;
  border-radius: 8px;
  background: #63637f;
`;

type FormValues = {
  errors: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export default function page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  //url뒤에 authCode를 가져옴
  const authCode = searchParams?.get("authCode");
  console.log(authCode);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    //https://every-board.shop/auth/password?authCode=ABK7208
    //http://localhost:3001/

    //원본
    try {
      const response = await axios.patch(
        `https://every-board.shop/auth/password?authCode=${authCode}`,
        {
          newPassword: data.newPassword,
        },
      );

      console.log(response);

      if (response.status === 200) {
        alert("비밀번호가 정상적으로 변경되었습니다.");
        // 성공적으로 변경되면 다른 페이지로 이동하거나 필요한 작업을 수행하세요.
        router.push("/signin");
      } else {
        alert("비밀번호 변경에 실패했습니다. 다시 시도해 주세요.");
      }
    } catch (err) {
      console.log(err);
      alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  //     try {
  //       const authCoderesponse = await axios.post(
  //         `https://every-board.shop/auth/password?authCode=${authCode}`,
  //       );

  //       if (authCoderesponse.status === 200) {
  //         try {
  //           const updateResponse = await axios.patch(
  //             `https://every-board.shop/auth/password?authCode=${authCode}`,
  //             {
  //               newPassword: data.newPassword,
  //             },
  //           );

  //           if (updateResponse.status === 200) {
  //             alert("비밀번호가 정상적으로 변경되었습니다.");
  //             router.push("/signin");
  //           } else {
  //             alert("비밀번호 변경에 실패했습니다. 다시 시도해 주세요.");
  //           }
  //         } catch (updateErr) {
  //           console.log(updateErr);
  //           alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
  //         }
  //       } else {
  //         alert("비밀번호 변경에 실패했습니다. 다시 시도해 주세요.");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       alert("비밀번호 변경 중 오류가 발생했습니다. 다시 시도해 주세요.");
  //     }
  //   };

  return (
    <div>
      {authCode ? (
        <>
          <Wrapper>
            <Title>비밀번호 재설정하기</Title>
            <Atuh>Auth code: {authCode}</Atuh>
            {/* 여기에 비밀번호 재설정 양식을 추가하세요 */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputWrapper>
                <InuptWrap>
                  <Label>새 비밀번호</Label>
                  <Input
                    type={"password"}
                    placeholder="●●●●●●●●"
                    {...register("newPassword", {
                      required: "비밀번호를 입력해주세요.",
                      minLength: {
                        value: 8,
                        message: "최소 8자 이상의 비밀번호를 입력해주세요.",
                      },
                    })}
                  />
                  <ErrorText>
                    {errors.newPassword && errors.newPassword.message}
                  </ErrorText>
                </InuptWrap>
                <InuptWrap>
                  <Label>새 비밀번호확인</Label>
                  <Input
                    type={"password"}
                    placeholder="●●●●●●●●"
                    {...register("newPasswordConfirm", {
                      required: "비밀번호를 입력해주세요.",
                      minLength: {
                        value: 8,
                        message: "최소 8자 이상의 비밀번호를 입력해주세요.",
                      },
                    })}
                  />
                </InuptWrap>
                <Button type="button">변경완료</Button>
              </InputWrapper>
            </form>
          </Wrapper>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
