import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { axiosLogCommentCreate, axiosLogSearchContent, axiosLogSearchMatjipAddress, axiosLogSearchMatjipName, axiosPublicLogList } from "../../../Services/log-service";
import { logData, requestCommentDto } from "../../../types/logDto";
import DropDown from "../Presentational/DropDown/DropDown";
import LogCard from "../Presentational/LogCard/LogCard";
import LogSearch from "../Presentational/LogSearch/LogSearch";
import { SearchForm } from "../Presentational/LogSearch/style";
import { LogGrid, NonSearchDiv, Section } from "./style";
import LodingSpinner from "../../Common/Loding";
import { useLogList } from "../Presentational/useLogList";
import { useScrollObserver } from "../Presentational/useScrollObserver";

function LogContainer() {
  // const queryClient = useQueryClient();
  const gridRef = useRef<HTMLDivElement>(null); // Observer 그리드 아이템 추적할 ref
  const scrollRef = useRef<number>(0); //스크롤 지정을 위한 ref
  const [comment, setComment] = useState<string>(""); // 댓글

  const items : string[] = [ "전체", "제목", "지역" , "맛집이름"];
  const [dropdown , setDropdown] = useState<boolean>(false); 
  const [category, setCategory] = useState<string>(items[0]); // 현재 선택된 카테고리
  
  const [select, setSelect] = useState<"publicList" | "contentList" | "addressList" | "nameList">("publicList"); // 쿼리를 고르기 위한 state
  const [queryKeyWord, setqueryKeyWord] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [keyword, setKeword] = useState<string>("");

  const { logList, initList, firstList, addList, commentModifyList } = useLogList();
  const  { setLastItem } = useScrollObserver(() => {setPage(page+1);});

  const logQuery = {
    publicList : useQuery(["loglist", "전체", page], () => axiosPublicLogList(page),{
      enabled: select=="publicList",
      keepPreviousData: true 
    }), // 공개된 로그 조회  
    contentList : useQuery(["loglist", "제목", queryKeyWord, page], () => axiosLogSearchContent(queryKeyWord, page),{ 
      enabled: select=="contentList" && queryKeyWord!=="",
      keepPreviousData: true 
    }), // content로 로그 조회 
    addressList : useQuery(["loglist", "지역", queryKeyWord, page], () => axiosLogSearchMatjipAddress(queryKeyWord, page),{
      enabled: select=="addressList" && queryKeyWord!=="",
      keepPreviousData: true 
    }), // 주소로 로그 조회
    nameList : useQuery(["loglist", "맛집이름", queryKeyWord, page], () => axiosLogSearchMatjipName(queryKeyWord, page),{  
      enabled: select=="nameList" && queryKeyWord!=="",
      keepPreviousData: true
    }), // 맛집이름으로 로그 조회
  }
  const { data, isLoading, isError, error } = logQuery[select];
  
  useEffect(() =>{
    window.scrollTo(0, scrollRef.current);
    if(gridRef.current){
      const last = gridRef.current.lastElementChild as HTMLDivElement;
      setLastItem(last);
    }
  },[logList])
  
  useEffect(()=>{
    if(category === "전체"){
      setSelect("publicList");
      setPage(0);
      setKeword("");
      setqueryKeyWord("");
    }
  },[category, select])

  useEffect(() =>{
    if(!isLoading && data?.data){
      if(page === 0){
        firstList(data.data);
      }
      else{
        scrollRef.current = window.pageYOffset;
        addList(data.data);
      }
    }
  },[data]);

  //키워드로 검색
  const EventLogKeywordSearch = () =>{
    if(keyword === "") return  alert("키워드를 입력해주세요");
    else {
      setqueryKeyWord(keyword);
      switch(category) {
        case "제목" :
          logQuery.contentList.refetch();
          setSelect("contentList");
          break;
        case "지역" :
          logQuery.addressList.refetch();
          setSelect("addressList");
          break;
        case "맛집이름" :
          logQuery.nameList.refetch();
          setSelect("nameList");
          break;
      }
      initList();
      setPage(0);
    }
  };

  //로그 좋아요 or 좋아요 취소
  const EventLogLikeChange = () =>{

  };
   // 로그 신고
  const EventDotItemClick = (index: number) =>{
   
  };

  // 검색 keyword창
  const onChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeword(e.target.value);
  }, [keyword]);

  // 카테고리 클릭시
  const EventCategoryClick = () =>{
    setDropdown(!dropdown);
  }
  
  // 드랍다운 아이템 클릭시
  const EventDropdownItemClick = (index : number) => {
    setCategory(items[index]);
    setDropdown(!dropdown);
  }

  /* 댓글 달기 */
  const EventCommentCreate = (logSequence : number, userSequence: number) =>{
    const logCommentData : requestCommentDto = {
      logSequence : logSequence,
      userSequence : userSequence,
      content : comment,
    }; 

    axiosLogCommentCreate(logCommentData).then(res =>{
        setComment("");
        commentModifyList(res);
        // queryClient.invalidateQueries(["loglist"])
    });
  };

  //댓글 input창
  const onChangeComment = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }, [comment]);
  console.log("dd");
  return(
    <Section>
      <SearchForm>
        <DropDown items={items} category={category} dropdown={dropdown} EventCategoryClick={EventCategoryClick} EventDropdownItemClick={EventDropdownItemClick}></DropDown>
        <LogSearch category={category} keyword={keyword} onChangehandler={onChangeKeyword} EventKeywordSearchLog={EventLogKeywordSearch}></LogSearch>
      </SearchForm>
      {!isLoading && logList.length === 0  && <NonSearchDiv>검색결과가 없습니다. 다시 검색해주세요!</NonSearchDiv>}
      <LogGrid ref={gridRef}> 
      {
        logList.map((value : logData): JSX.Element =>{
          return <LogCard 
            key={`${value.logSequence}`} 
            cardInfo={value} 
            comment={comment}
            onChangeComment={onChangeComment}
            EventCommentCreate={EventCommentCreate}
          ></LogCard>
          })
      }
      </LogGrid>
      { isLoading && <><div style={{height:"200px"}}></div><LodingSpinner/></>}
    </Section>
  );
}

export default LogContainer;