import React from "react";
import { Link } from "react-router-dom";
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
      <FormTitle>Login</FormTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userid">아이디</label>
          <input
            id="userid"
            type="text"
            {...register("userid", { required: "아이디 필수 입력" })}
          />
          {errors?.userid && <span>{errors.userid.message}</span>}
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: "비밀번호 필수 입력" })}
          />
          {errors?.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <Button>
            <Link to="/signup">회원가입</Link>
          </Button>
          <LoginButton type="submit">로그인</LoginButton>
        </div>
      </form>
    </FormContainer>
  );
}

export default LoginForm;

const Button = styled.button`
  border: none;
  width: 48%;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #d9d9d9;
  color: white;

  a {
    color: white;
    text-decoration: none;
    display: block;
  }
`;

const LoginButton = styled(Button)`
  background-color: #3d5afe;
`;
