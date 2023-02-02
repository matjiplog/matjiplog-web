import styled from "styled-components";
import { TbMenu2 } from "react-icons/tb";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10em 0 0;

  @media screen and (min-width: 700px) {
    .menubar {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    .gnv {
      display: none;
    }
  }
`;
export const LogoImg = styled.img`
  padding: 2em 0 0 0;
`;

export const LoginBtn = styled.button`
  &:hover {
    color: #ff6701;
    transform: scale(1.2);
  }
`;
export const Gnv = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const GnvItem = styled.li`
  padding: 4em;
`;
export const GnvBtn = styled.button`
  &:hover {
    color: #ff6701;
    transform: scale(1.2);
  }
`;
export const MenuBar = styled(TbMenu2)`
  height: 100%;
  color: #ff6701;
`;
