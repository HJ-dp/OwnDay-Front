import React from "react";
import { useForm } from "react-hook-form";
import { FormContainer, FormTitle } from "../../styles/styles";
import styled from "styled-components";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 로그인 요청을 보내야 함
  };

  return (
    <FormContainer>
      <FormTitle>SignUp</FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userid">아이디</label>
          <input
            id="userid"
            type="text"
            {...register("userid", { required: "필수 입력" })}
          />
          {errors?.userid && <span>{errors.userid.message}</span>}
        </div>
        <div>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "필수 입력" })}
          />
          {errors?.username && <span>{errors.username.message}</span>}
        </div>
        <div>
          <label htmlFor="usernickname">닉네임</label>
          <input
            id="usernickname"
            type="text"
            {...register("usernickname", { required: "필수 입력" })}
          />
          {errors?.usernickname && <span>{errors.usernickname.message}</span>}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "필수 입력" })}
          />
          {errors?.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor="password">비밀번호 확인</label>
          <input
            id="passwordcheck"
            type="password"
            {...register("passwordcheck", { required: "필수 입력" })}
          />
          {errors?.passwordcheck && <span>{errors.passwordcheck.message}</span>}
        </div>
        <div>
          <SignUpButton type="submit">회원가입</SignUpButton>
        </div>
      </form>
    </FormContainer>
  );
}

export default LoginForm;

const SignUpButton = styled.button`
  color: white;
  background-color: #3d5afe;
  border: none;
  width: 100%;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
`;
