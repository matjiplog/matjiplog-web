import { 
  Category,
  DropBar,
  DropBarDiv,
  DropItem,
  DropItems,
  HasTag,
  HasTagItem,
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchInputAndHastag, } from "../../styles/common/searchBar";
import { showLogStore } from "../../stores/mylog/store";

interface propsType {
  visible : string;
}

function MyLogSearchBar({visible} : propsType) {
  const { mapShow, setMapShow} = showLogStore();
  const dropBarMenu: string[] = ["전체", "지역", "맛집이름"];
  const hasTagMenu: string[] = ["맛집", "대구", "삽겹살", "고기", "내돈내산"];

  return(
    <>
      <DropBarDiv visibled={visible}>
        <Category>Category</Category>
        <DropBar>{dropBarMenu[0]}</DropBar>
        <DropItems>
          {dropBarMenu.map((value: string, index: number): JSX.Element => {
            return <DropItem key={index}>{value}</DropItem>;
          })}
        </DropItems>
      </DropBarDiv>
      <SearchInputAndHastag visibled={visible}>
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
    </>
  );
}

export default MyLogSearchBar;