import { SearchIcon } from "../../../../styles/icons";
import { useBtnWithEnter } from "../useBtnWithEnter";
import { LogInputSearch, IconDiv } from "./style";

function LogSearch( {
  category,
  keyword,
  onChangehandler,
  EventKeywordSearchLog,
} : {
  category : string,
  keyword : string,
  onChangehandler : React.ChangeEventHandler<HTMLInputElement>,
  EventKeywordSearchLog : (e: React.MouseEvent<HTMLDivElement>) => void;
} ) {
  const { buttonRef, handleKeyDownLogSearch} = useBtnWithEnter(EventKeywordSearchLog)
  
  return(
    <>
      <LogInputSearch 
        name="keyword" 
        value={keyword}
        type="search" 
        placeholder="키워드로 검색해보세요"
        onChange={onChangehandler}
        onKeyDown={(e) => handleKeyDownLogSearch(e)}
        disabled={category==="없음"}
      ></LogInputSearch>
      <IconDiv 
        ref={buttonRef}
        onClick={EventKeywordSearchLog}>
        <SearchIcon size={28}></SearchIcon>
      </IconDiv>
    </>
    
  );
}


export default LogSearch;