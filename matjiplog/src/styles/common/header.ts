import styled from "styled-components";
import { TbMenu2 } from "react-icons/tb";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8em 0 0em;
  background: #263343;

  @media screen and (min-width: 700px) {
    .menubar {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    & {
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
    }

    .gnv {
      flex-direction: column;
      width: 100%;
      align-items: center;
      display: none;

      & li {
        width: 100%;
        text-align: center;
      }
    }

    .loginDiv {
      width: 100%;
      text-align: center;
      border-radius: 5px;
      display: none;

      &:hover {
        background: #ff6701;
        color: white;
        .loginBtn {
          transform: scale(1.2);
        }
      }

      & .loginBtn {
        padding: 1.2em;

        &:hover {
          color: white;
        }
      }
    }

    .showNav {
      display: block;
    }
  }
`;

export const LogoImg = styled.img`
  padding: 2em 0 0 0;
`;

export const Gnv = styled.ul`
  display: flex;
  align-items: center;
`;

export const GnvItem = styled.li`
  padding: 4em 6em 4em 6em;
  border-radius: 5px;

  &:hover {
    background: #ff6701;
    button {
      color: white;
      transform: scale(1.2);
    }
  }
  .nowLocation {
    color: #ff6701;
  }
  .location {
    color: white;
  }
`;

export const GnvBtn = styled.button``;

export const LoginDiv = styled.div``;

export const LoginBtn = styled.button`
  color: white;

  &:hover {
    transform: scale(1.2);
    color: #ff6701;
  }
`;

export const MenuBar = styled(TbMenu2)`
  color: #ff6701;
  position: absolute;
  right: 5em;
  top: 4.5em;
  cursor: Pointer;
`;
