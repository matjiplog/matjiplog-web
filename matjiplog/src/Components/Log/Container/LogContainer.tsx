import { useCallback, useEffect, useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { axiosLogCommentCreate } from "../../../Services/log-service";
import { logData, requestCommentDto } from "../../../types/logDto";
import { EmptyCard } from "../../Common/EmptyCard";
import DropDown from "../Presentational/DropDown/DropDown";
import LogCard from "../Presentational/LogCard/LogCard";
import LogSearch from "../Presentational/LogSearch/LogSearch";
import { SearchForm } from "../Presentational/LogSearch/style";
import { LogGrid, Section } from "./style";
import { useSelectList } from "../Presentational/useSelectList";
import LodingSpinner from "../../Common/Loding";
import { useLogList } from "../useLogList";
import { axiosUserInfo } from "../../../Services/user-service";

function LogContainer() {
  const queryClient = useQueryClient();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [comment, setComment] = useState<string>("");

  const items : string[] = [ "없음", "제목", "지역" , "맛집이름"];
  const [dropdown , setDropdown] = useState<boolean>(false); 
  const [category, setCategory] = useState<string>(items[0]); // 현재 선택된 카테고리
  
  const [select, setSelect] = useState<string>("없음"); // 쿼리를 고르기 위한 state
  const [searchKeyWord, setSearchKeyWord] = useState<string>("");

  // const [isEnable, setIsEnable] = useState<boolean>(true);

  const { query , page, setPage, keyword, setKeword } = useSelectList(select);
  const { logList, initList, firstList, addList, commentModifyList } = useLogList();

  useEffect(()=>{
    if(category === "없음"){
      initList();
      setSearchKeyWord("");
      setKeword("");
      setIndex(0);
      setPage(0);
    }
  },[category, select])

  //키워드로 검색
  const EventLogKeywordSearch = () =>{
    setKeword(searchKeyWord);
    if(searchKeyWord === "") return alert("키워드를 입력해주세요");
    else {
      switch(category) {
        case "제목" :
          // contentList.refetch();
          setSelect("제목");
          break;
        case "지역" :
          // addressList.refetch();
          setSelect("지역");
          break;
        case "맛집이름" :
          // nameList.refetch();
          setSelect("맛집이름");
          break;
      }
      initList();
      setPage(0);
      setIndex(0);
      // setIsEnable(true);
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
    setSearchKeyWord(e.target.value);
  }, [searchKeyWord]);

  // 카테고리 클릭시
  const EventCategoryClick = () =>{
    setDropdown(!dropdown);
  }
  
  // 드랍다운 아이템 클릭시
  const EventDropdownItemClick = (index : number) => {
    setCategory(items[index]);
    setDropdown(!dropdown);
    if(index === 0){
      setSelect("없음");
    }
  }

  /* 댓글 달기 */
  const EventCommentCreate = (logSequence : number, userSequence: number) =>{
    const logCommentData : requestCommentDto = {
      logSequence : logSequence,
      userSequence : userSequence,
      content : comment,
    }; 

    axiosLogCommentCreate(logCommentData).then(res =>{
      if(res.status == 200 && res.data.success == true) {
        console.log("성공");
        setComment("");

        commentModifyList(res.data);
        // filterList(res.data.commentSequence , res.data);
        // queryClient.invalidateQueries(["loglist"]).then(res => {
        //   console.log(res);
        //   // setSelect(category);
        //   // setIsEnable(true);  
        
        // });
        
      } 
    });
  };

  //댓글 input창
  const onChangeComment = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }, [comment]);

  useEffect(() => {
    async function handleScroll() {
      const element = scrollRef.current;
      if (element && element.scrollTop + element.clientHeight >= element.scrollHeight) {
        console.log("in");
        setPage(page+1);
        
      }
      
    }
    const element = scrollRef.current;
    console.log(element?.scrollTop);
      console.log(element?.clientHeight);
      console.log(element?.scrollHeight);
    element?.addEventListener('scroll', handleScroll);
    return () => element?.removeEventListener('scroll', handleScroll);
  }, [scrollRef]);

  // const [logList, setLogList] = useState<logData[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() =>{
    console.log(query.data);
    if(query.data){
      if(page === index){
        firstList(query.data.data);
      }
      else{
        addList(query.data.data);
        setIndex(index+1);
      }
    }
  },[query.data]);

  useEffect(() =>{
    console.log(logList);
  },[logList])

  useEffect(() =>{
    console.log(page);
  },[page])

  // // 더보기 클릭시 페이지 +1
  const EventSeeMoreLog = () =>{
  //   setPage(page+1);
  };

  return(
    <Section >
      <SearchForm>
        <DropDown items={items} category={category} dropdown={dropdown} EventCategoryClick={EventCategoryClick} EventDropdownItemClick={EventDropdownItemClick}></DropDown>
        <LogSearch category={category} keyword={searchKeyWord} onChangehandler={onChangeKeyword} EventKeywordSearchLog={EventLogKeywordSearch}></LogSearch>
      </SearchForm>
      <LogGrid ref={scrollRef}>
        {
          logList.map((value : logData): JSX.Element =>{
          return <LogCard 
            cardInfo={value} key={`${value.logSequence}-${value.userSequence}`} 
            comment={comment}
            onChangeComment={onChangeComment}
            EventCommentCreate={EventCommentCreate}
          ></LogCard>
          })
        }
        {/* {EmptyCard(query?.data.data, "375")} */}
      </LogGrid>
      { query && query.isLoading && <LodingSpinner/>}
      { query && !query.isLoading && logList.length === 0 && <div>검색결과가 업습니다</div>}
      { ( query.data && query.data.totalPages > 1 && page < query.data.totalPages-1) &&
          <div onClick={EventSeeMoreLog}   style={{ borderTop:"1px solid #b4b4b4", paddingTop: "20px",marginTop : "50px",  height: "30px",fontSize: "17px", fontWeight: "bold", textAlign: "center", cursor: "pointer"}}>로그 더보기</div>
      }
      {/* <div style={{ width: "100%", height : "200px" , fontSize : "16px"}}>해당 검색 결과가 존재 하지 않습니다.</div> */}
    </Section>
  );
}

export default LogContainer;