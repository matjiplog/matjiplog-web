import styled from "styled-components";
import MenuItem from "./MenuItem";


export interface MenuType {
  menuName: string;
  menuImg: string;
  price: string;
}

function MatjipTabMenu() {
  const menuList : MenuType[] = [
    { 
      menuName : "돈까스1",
      menuImg : "/assets/images/loginPicture.png",
      price : "10000",
    },
    { 
      menuName : "돈까스2",
      menuImg : "/assets/images/loginPicture.png",
      price : "10000",
    },
    { 
      menuName : "돈까스3",
      menuImg : "/assets/images/loginPicture.png",
      price : "10000",
    },
    { 
      menuName : "돈까스1",
      menuImg : "/assets/images/loginPicture.png",
      price : "10000",
    },
    { 
      menuName : "돈까스2",
      menuImg : "/assets/images/loginPicture.png",
      price : "10000",
    },
    { 
      menuName : "돈까스3",
      menuImg : "/assets/images/loginPicture.png",
      price : "10000",
    },
  ]
  return(
    <MenuWrap>
      {menuList.map((value : MenuType, index) : JSX.Element =>{
          return <MenuItem item={value} key={index}></MenuItem>
      })}
    </MenuWrap>
  );
}

const MenuWrap = styled.div`
  margin : 20px 0px 20px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
`;
export default MatjipTabMenu;