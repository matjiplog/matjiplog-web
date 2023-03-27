import MenuItem from "../MenuItem/MenuItem";
import { MenuWrap } from "./style";

export interface MenuType {
  menuName: string;
  menuImg: string;
  price: string;
}

function TabMenu() {
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

export default TabMenu;