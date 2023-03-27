import React from "react";
import { MenuCategory } from "../LogSearch/style";
import { Content, ItemDiv } from "./style";

interface DropDownType {
  items : string[],
  category : string,
  dropdown: boolean,
  EventCategoryClick : (e: React.MouseEvent<HTMLDivElement>) => void;
  EventDropdownItemClick : (index: number) => void;
}

function DropDown({ items, category, dropdown, EventCategoryClick, EventDropdownItemClick } : DropDownType) : JSX.Element {
  return(
    <>
      <MenuCategory onClick={EventCategoryClick}>{category}</MenuCategory>
      {dropdown && <Content>
        {items.map((value : string, index: number) : JSX.Element => {
          return <ItemDiv key={index} onClick={() => EventDropdownItemClick(index)}>{value}</ItemDiv>
        })}
      </Content>}
    </>
  );
}

export default DropDown;