import { MenuType } from "./MatjipTabMenu";
import styled from "styled-components";
function MenuItem({
  item,
} : { 
  item: MenuType;
}):JSX.Element {

  return(
    <Wrap>
      <MenuContent>
        <MenuImg imgurl={item.menuImg}></MenuImg>
        <MenuInfo>
          <MenuName>{item.menuName}</MenuName>
          <MenuPrice>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</MenuPrice>
        </MenuInfo>
      </MenuContent>
    </Wrap>
  );
}

const MenuName = styled.div`
  
`;

const MenuPrice = styled.div`
  color: #ff6701;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-around;
  margin-left: 10px;
  font-size: 13px;
  font-weight: 700;
`;

const MenuImg = styled.div< {imgurl: string} >`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.imgurl});
  background-repeat : no-repeat;
  background-size : cover;
`;

const MenuContent = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  border : 1px solid rgb(219,219,219);
  border-radius: 5px;
  padding: 20px 10px 20px 10px;
`;

export default MenuItem;
