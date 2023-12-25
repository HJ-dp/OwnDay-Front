import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-menu-box">
            <Link className="logo" to="/">
              Own Day
            </Link>
          </div>
          <div className="header-menu-box"></div>
          <div className="header-login-box">
            <Link to="/login">로그인</Link>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/signup">회원가입</Link>
          </div>
          <div className="menuBtn">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/cotton/50/menu.png"
              alt="menu"
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.main`
  .header-container {
    background-color: #304ffe;
    height: 44px;
    display: flex;
    align-items: center;
    color: black;
  }

  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .logo {
    text-shadow: 1px 1px 1px;
    font-size: 17px;
  }

  .menuBtn {
    display: none;
  }

  .header-login-box,
  .header-menu-box {
    display: flex;
    gap: 1em;
  }

  .header-login-box a:hover,
  .header-menu-box a:hover {
    transform: scale(1.1);
  }

a {color: #fff; text-decoration: none; outline: none}

  @media (max-width: 768px) {
    .header-login-box,
    .header-menu-box {
      display: none;
    }

    .menuBtn {
      display: block;
    }
  }

  @media (max-width: 1200px) {
    .header-wrapper {
      padding: 0 10vw;
    }
  }
`;
