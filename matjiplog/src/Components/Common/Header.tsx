import { useLocation } from "react-router-dom";

import {
  HeaderSection,
  LoginDiv,
  LoginBtn,
  LogoImg,
  Gnv,
  GnvItem,
  GnvBtn,
  MenuBar,
} from "../../styles/common/header";

import { useNavLink, navLinkTypes } from "../../Hooks/useNavLink";
import { useNav, useNavTypes } from "../../Hooks/useNav";

function Header(): JSX.Element {
  const location = useLocation();
  const path: string = location.pathname;
  const { locationHref }: navLinkTypes = useNavLink();
  const { nav, toggleNav }: useNavTypes = useNav();

  return (
    <HeaderSection>
      <LogoImg
        onClick={locationHref}
        src="assets/common/mainLogo.png"
      ></LogoImg>
      <Gnv className={nav ? "gnv showNav" : "gnv"}>
        <GnvItem>
          <GnvBtn
            className={path === "/search" ? "nowLocation" : "location"}
            onClick={locationHref}
          >
            맛집 찾기
          </GnvBtn>
        </GnvItem>
        <GnvItem>
          <GnvBtn
            className={path === "/log" ? "nowLocation" : "location"}
            onClick={locationHref}
          >
            로그
          </GnvBtn>
        </GnvItem>
        <GnvItem>
          <GnvBtn
            className={
              path === "/mylog" || path === "/createMyLog"
                ? "nowLocation"
                : "location"
            }
            onClick={locationHref}
          >
            나만의 맛집
          </GnvBtn>
        </GnvItem>
      </Gnv>
      <LoginDiv className={nav ? "loginDiv showNav" : "loginDiv"}>
        <LoginBtn className="loginBtn" onClick={locationHref}>
          로그인
        </LoginBtn>
      </LoginDiv>
      <MenuBar size={40} className="menubar" onClick={toggleNav}></MenuBar>
    </HeaderSection>
  );
}

export default Header;

// 로그인 상태 확인하고 로그인 or 로그아웃 뷰
// 로그인 확인 안되면 나만의 맛집 이용 불가 후 로그인 페이지로 라우팅
