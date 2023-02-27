import { DropBarDiv, Category, DropBarTitle, DropItems, DropItem } from "../../styles/common/dropBar";
import { useDropBar } from "../../Hooks/useDropBar";

import { dropBarProps } from '../../types/props/dropBar';
import { useDropBarResult } from '../../types/hook/dropBar';

export function DropBar({ title, DropMenu }: dropBarProps): JSX.Element {
  const { dropBarShow, dropBarMenu, toggleDropBar, listClick }: useDropBarResult = useDropBar(title);
  
  return (
    <DropBarDiv>
      <Category>Filter</Category>
      <DropBarTitle onClick={toggleDropBar}>{dropBarMenu}</DropBarTitle>
      {dropBarShow && 
        <DropItems>
          {DropMenu.map((value: string, index: number): JSX.Element => {
            return <DropItem key={index} onClick={listClick} className={dropBarMenu === value ? "select" : ""}>{value}</DropItem>
          })}
        </DropItems>}
    </DropBarDiv>
  );
}

