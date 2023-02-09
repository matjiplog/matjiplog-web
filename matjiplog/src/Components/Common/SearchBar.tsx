import {
  HasTag,
  HasTagItem,
  SearchBarDiv,
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchInputAndHastag,
} from "../../styles/common/searchBar";

import { DropBar } from "./DropBar";

import {
  searchDropbarStore,
  searchDropbarTypes,
} from "../../stores/home/dropbar";

function SearchBar() {
  const dropBarMenu: string[] = ["전체", "지역", "맛집이름"];
  const hasTagMenu: string[] = ["맛집", "대구", "삽겹살", "고기", "내돈내산"];
  const { dropBar, menu, toggleDropbar, initDropbar }: searchDropbarTypes =
    searchDropbarStore();

  return (
    <SearchBarDiv>
      <DropBar
        category="filter"
        title={menu}
        DropMenu={dropBarMenu}
        dropBarState={dropBar}
        dropBarClick={toggleDropbar}
      ></DropBar>
      <SearchInputAndHastag>
        <SearchForm>
          <SearchInput placeholder="검색어 입력..."></SearchInput>
          <SearchIcon size={30}></SearchIcon>
        </SearchForm>
        <HasTag>
          {hasTagMenu.map((value: string, index: number): JSX.Element => {
            return <HasTagItem key={index}>{value}</HasTagItem>;
          })}
        </HasTag>
      </SearchInputAndHastag>
    </SearchBarDiv>
  );
}

export default SearchBar;
