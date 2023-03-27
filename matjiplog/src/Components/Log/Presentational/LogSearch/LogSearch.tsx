import { SearchIcon } from "../../../../styles/icons";
import { LogInputSearch, IconDiv } from "./style";

function LogSearch( {
  keyword,
  onChangehandler
} : {
  keyword : string,
  onChangehandler : React.ChangeEventHandler<HTMLInputElement>
} ) {

  return(
    <>
      <LogInputSearch 
        name="keyword" 
        value={keyword}
        type="search" 
        placeholder="키워드로 검색해보세요"
        onChange={onChangehandler}
      ></LogInputSearch>
      <IconDiv>
        <SearchIcon size={28}></SearchIcon>
      </IconDiv>
    </>
    
  );
}


export default LogSearch;