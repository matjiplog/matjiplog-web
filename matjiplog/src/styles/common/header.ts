import styled from "styled-components";
import { TbMenu2 } from "react-icons/tb";

export const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8em 0 0em;

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

      & :hover {
        background-color: #ff6701;
        button {
          color: white;
        }
      }
    }

    .loginDiv {
      width: 100%;
      text-align: center;
      display: none;
      border-radius: 5px;

      & .loginBtn {
        padding: 1.2em;
      }

      &:hover {
        background-color: #ff6701;
        .loginBtn {
          color: white;
          transform: scale(1.2);
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
  cursor: pointer;
`;

export const Gnv = styled.ul`
  display: flex;
  align-items: center;
`;

export const GnvItem = styled.li`
  padding: 4em 6em 4em 6em;
  border-radius: 5px;

  &:hover {
    button {
      transform: scale(1.2);
      color: #ff6701;
    }
  }
  .nowLocation {
    color: #ff6701;
  }
  .location {
    color: black;
  }
`;

export const GnvBtn = styled.button``;

export const LoginDiv = styled.div``;

export const LoginBtn = styled.button`
  color: black;

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
