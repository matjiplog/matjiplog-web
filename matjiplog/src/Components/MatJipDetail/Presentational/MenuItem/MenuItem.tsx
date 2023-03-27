
import styled from "styled-components";
import { MenuType } from "../TabMenu/TabMenu";
import { Wrap, MenuContent, MenuImg, MenuInfo, MenuPrice } from "./style";
function MenuItem({
  item,
} : { 
  item: MenuType;
}):JSX.Element {

  return(
    <Wrap>
      <MenuContent>
        <MenuImg url={item.menuImg}></MenuImg>
        <MenuInfo>
          <div>{item.menuName}</div>
          <MenuPrice>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</MenuPrice>
        </MenuInfo>
      </MenuContent>
    </Wrap>
  );
}

export default MenuItem;
