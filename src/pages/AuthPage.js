import styled from "styled-components";
import { useLocation } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import SignUpForm from "../components/auth/SignUpForm";

function AuthPage() {
  let { pathname } = useLocation();

  return (
    <>
      <Container>
        <Logo src="logo.png" />
        {pathname === "/login" && <LoginForm />}
        {pathname === "/signup" && <SignUpForm />}
      </Container>
    </>
  );
}

export default AuthPage;

const Logo = styled.img`
  width: 50%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
