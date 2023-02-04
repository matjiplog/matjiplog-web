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

import { navStore, navTypes } from "../../stores/home/store";
import { useNavLink, navLinkTypes } from "../../Hooks/useNavLink";

function Header(): JSX.Element {
  const location = useLocation();
  const { locationHref }: navLinkTypes = useNavLink();
  const { navShow, toggleShow }: navTypes = navStore();
  const path: string = location.pathname;

  return (
    <HeaderSection>
      <LogoImg src="assets/common/mainLogo.png"></LogoImg>
      <Gnv className={navShow ? "gnv showNav" : "gnv"}>
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
            className={path === "/mylog" ? "nowLocation" : "location"}
            onClick={locationHref}
          >
            나만의 맛집
          </GnvBtn>
        </GnvItem>
      </Gnv>
      <LoginDiv className={navShow ? "loginDiv showNav" : "loginDiv"}>
        <LoginBtn className="loginBtn" onClick={locationHref}>
          로그인
        </LoginBtn>
      </LoginDiv>
      <MenuBar size={40} className="menubar" onClick={toggleShow}></MenuBar>
    </HeaderSection>
  );
}

export default Header;

// 로그인 상태 확인하고 로그인 or 로그아웃 뷰
// 로그인 확인 안되면 나만의 맛집 이용 불가 후 로그인 페이지로 라우팅
