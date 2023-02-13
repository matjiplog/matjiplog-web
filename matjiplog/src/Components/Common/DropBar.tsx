import { DropBarDiv, Category, DropBarTitle, DropItems, DropItem } from "../../styles/common/dropBar";
import { useDropBar, useDropBarTypes } from "../../Hooks/useDropBar";

export function DropBar({ title, DropMenu }: DropBarProps): JSX.Element {
  const { dropBar, menu, toggleDropbar, listClick }: useDropBarTypes = useDropBar(title);
  
  return (
    <DropBarDiv>
      <Category>Filter</Category>
      <DropBarTitle onClick={toggleDropbar}>{menu}</DropBarTitle>
      {dropBar && 
        <DropItems>
          {DropMenu.map((value: string, index: number): JSX.Element => {
            return <DropItem key={index} onClick={listClick} className={menu === value ? "select" : ""}>{value}</DropItem>
          })}
        </DropItems>}
    </DropBarDiv>
  );
}

export interface DropBarProps {
  title: string;
  DropMenu: string[];
}
