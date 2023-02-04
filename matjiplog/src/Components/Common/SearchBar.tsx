import {
  Category,
  DropBar,
  DropBarDiv,
  DropItem,
  DropItems,
  HasTag,
  HasTagItem,
  SearchBarDiv,
  SearchForm,
  SearchIcon,
  SearchInput,
  SearchInputAndHastag,
} from "../../styles/common/searchBar";

function SearchBar() {
  const dropBarMenu = ["전체", "지역", "맛집이름"];
  const hasTagMenu = ["맛집", "대구", "삽겹살", "고기", "내돈내산"];

  return (
    <SearchBarDiv>
      <DropBarDiv>
        <Category>Category</Category>
        <DropBar>{dropBarMenu[0]}</DropBar>
        <DropItems>
          {dropBarMenu.map((value: string, index: number): JSX.Element => {
            return <DropItem key={index}>{value}</DropItem>;
          })}
        </DropItems>
      </DropBarDiv>

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

// const [btn, setBtn] = useState(false);
//   const [selectName, setSelectName] = useState<String>(" - 선택하세요 - ")
//   const Select = () => {
//     setBtn(!btn);
//   }
//   const SelectItemClick = (name:String) => {
//     setSelectName(name);
//     setBtn(!btn);
//   }
{
  /* <DropDiv>
  <SelectBtn onClick={Select}> {selectName} </SelectBtn>
  {btn && <ItemUl>
    <li><SelectItem onClick={() => SelectItemClick("전체")}>전체</SelectItem></li>
    <li><SelectItem onClick={() => SelectItemClick("지역")}>지역</SelectItem></li>
    <li><SelectItem onClick={() => SelectItemClick("맛집이름")}>맛집이름</SelectItem></li>
  </ItemUl>}
</DropDiv> */
}
// const DropDiv = styled.div`
//   padding-right : 10px;
// `;

// const SelectItem = styled.div`
//   display : block;
//   color : rgb(37, 37, 37);
//   padding : 12px 20px;
//   &:hover{
//     background-color: rgb(226, 226, 226);
//   }
// `;
// const SelectBtn = styled.button`
//   background-color : #ffffff;
//   border : 1px solid rgb(94, 94, 94);
//   border-radius : 8px;
//   color : black;
//   padding : 12px;
//   width :100px;
//   text-align: center;
//   cursor : pointer;
//   font-size : 11px;
// `;

// const ItemUl = styled.ul`
//   position: relative;
//   width : 100px;
//   border-radius: 8px;
//   box-shadow: 2px 4px 7px 3px rgba(190, 190, 190, 0.6);
// `;

// const DropSelect = styled.select`
//   width: 100px;
//   border-radius: 8px;
//   padding: 10px 10px;
//   appearance: none;
// `;
// const SearchBarDiv = styled.div`
//   display: flex;
//   width: 100%;
//   padding : 20px 50px 20px 50px;
// `;

// const SearchBtn = styled.button`
//   background-color: white;
//   width: 40px;
//   border: none;
//   cursor: pointer;
//   text-align: center;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   border: none;
//   outline: none;
//   padding-left: 20px;
//   font-size: 11px;
// `;
// const SearchDiv = styled.div`
//   display: flex;
//   width: 100%;
//   height: 40px;
//   border : 1px solid rgb(94, 94, 94);
//   border-radius : 8px;
//   padding : 2px;
// `;

export default SearchBar;
