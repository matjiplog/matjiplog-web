import {
  DropBarDiv,
  Category,
  DropBarTitle,
  DropItems,
  DropItem,
} from "../../styles/common/dropBar";

import {
  HasTags,
  HasTagItem,
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchInputAndHastag,
} from "../../styles/common/searchBar";
import { showLogStore } from "../../stores/mylog/store";
import { useDropBar } from "../../Hooks/useDropBar";
import { useDropBarResult } from '../../types/hook/dropBar';

interface propsType {
  visible : string;
}

function MyLogSearchBar({visible} : propsType) {
  const dropBarMenuArr: string[] = ["전체", "지역", "맛집이름"];
  const hasTagMenu: string[] = ["맛집", "대구", "삽겹살", "고기", "내돈내산"];
  const { dropBarShow, dropBarMenu, toggleDropBar, listClick }: useDropBarResult = useDropBar(dropBarMenuArr[0]);

  return(
    <>
      <DropBarDiv visibled={visible}>
        <Category>category</Category>
        <DropBarTitle onClick={toggleDropBar}>{dropBarMenu}</DropBarTitle>
        {dropBarShow && (
          <DropItems>
            {dropBarMenuArr.map((value: string, index: number): JSX.Element => {
              return <DropItem key={index}>{value}</DropItem>;
            })}
          </DropItems>
        )}
      </DropBarDiv>
      <SearchInputAndHastag visibled={visible}>
        <SearchForm>
          <SearchInput placeholder="검색어 입력..."></SearchInput>
          <SearchIcon size={30}></SearchIcon>
        </SearchForm>
        <HasTags>
          {hasTagMenu.map((value: string, index: number): JSX.Element => {
            return <HasTagItem key={index}>{value}</HasTagItem>;
          })}
        </HasTags>
      </SearchInputAndHastag>
    </>
  );
}

export default MyLogSearchBar;