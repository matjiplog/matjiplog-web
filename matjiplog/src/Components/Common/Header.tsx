import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';

import { HeaderSection, LoginDiv, LoginBtn, LogoImg, Gnv, GnvItem, GnvBtn, MenuBar } from "../../styles/common/header";

import { navigateController, returnType } from '../../services/navigateController';

function Header(): JSX.Element {
  const navigate = useNavigate();
  const path: string = useLocation().pathname;
  const { locationHref }: returnType = navigateController(navigate);
  const [navShow, setNavShow] = useState<boolean>(false);
  
  const toggleNavShow = () => { setNavShow(!navShow); }

  return (
    <HeaderSection>
      <LogoImg onClick={locationHref} src="/assets/common/mainLogo.png"/>
      <Gnv className={navShow ? "gnv showNav" : "gnv"}>
        <GnvItem>
          <GnvBtn className={path === "/search" ? "nowLocation" : "location"} onClick={locationHref}>맛집 찾기</GnvBtn>
        </GnvItem>
        <GnvItem>
          <GnvBtn className={path === "/log" ? "nowLocation" : "location"} onClick={locationHref}>로그</GnvBtn>
        </GnvItem>
        <GnvItem>
          <GnvBtn className={path === "/mylog" || path === "/createMyLog" ? "nowLocation" : "location"} onClick={locationHref}>나만의 맛집</GnvBtn>
        </GnvItem>
      </Gnv>
      <LoginDiv className={navShow ? "loginDiv showNav" : "loginDiv"}>
        <LoginBtn className="loginBtn" onClick={locationHref}>로그인</LoginBtn>
      </LoginDiv>
      <MenuBar size={40} className="menubar" onClick={toggleNavShow}/>
    </HeaderSection>
  );
}

export default Header;

// 로그인 상태 확인하고 로그인 or 로그아웃 뷰
// 로그인 확인 안되면 나만의 맛집 이용 불가 후 로그인 페이지로 라우팅
