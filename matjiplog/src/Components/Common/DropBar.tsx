import {
  DropBarDiv,
  Category,
  DropBarTitle,
  DropItems,
  DropItem,
} from "../../styles/common/dropBar";

export function DropBar({
  category,
  title,
  DropMenu,
  dropBarState,
  dropBarClick,
}: DropBarProps): JSX.Element {
  return (
    <DropBarDiv>
      <Category>{category}</Category>
      <DropBarTitle onClick={dropBarClick}>{title}</DropBarTitle>
      {dropBarState && (
        <DropItems>
          {DropMenu.map((value: string, index: number): JSX.Element => {
            return <DropItem key={index}>{value}</DropItem>;
          })}
        </DropItems>
      )}
    </DropBarDiv>
  );
}

export interface DropBarProps {
  category: string;
  title: string;
  DropMenu: string[];
  dropBarState: boolean;
  dropBarClick: () => void;
}
