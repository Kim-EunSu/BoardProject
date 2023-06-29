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

const Input = styled.input``;

const Button = styled.button``;

type FormValues = {
  errors: string;
  newPassword: string;
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
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    try {
      const response = await axios.patch(
        `http://localhost:3001/auth/password?authCode=${authCode}`,
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

  return (
    <div>
      <h1>비밀번호 재설정하기</h1>
      {authCode ? (
        <>
          <p>Auth code: {authCode}</p>
          {/* 여기에 비밀번호 재설정 양식을 추가하세요 */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button onClick={handleSubmit(onSubmit)}>변경완료</Button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
