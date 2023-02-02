import {
  HeaderSection,
  LoginBtn,
  LogoImg,
  Gnv,
  GnvItem,
  GnvBtn,
  MenuBar,
} from "../../styles/common/header";

function Header(): JSX.Element {
  return (
    <HeaderSection>
      <LogoImg src="assets/common/mainLogo.png"></LogoImg>
      <Gnv className="gnv">
        <GnvItem>
          <GnvBtn>맛집 찾기</GnvBtn>
        </GnvItem>
        <GnvItem>
          <GnvBtn>로그</GnvBtn>
        </GnvItem>
        <GnvItem>
          <GnvBtn>나만의 맛집</GnvBtn>
        </GnvItem>
      </Gnv>
      <LoginBtn>로그인</LoginBtn>
      <MenuBar size={50} className="menubar"></MenuBar>
    </HeaderSection>
  );
}

export default Header;
