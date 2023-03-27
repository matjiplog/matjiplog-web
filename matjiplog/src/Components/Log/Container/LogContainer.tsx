import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { axiosLogCommentCreate, axiosPublicLogList } from "../../../Services/log-service";
import { requestCommentDto, logDto } from "../../../types/logDto";
import { EmptyCard } from "../../Common/EmptyCard";
import DropDown from "../Presentational/DropDown/DropDown";
import LogCard from "../Presentational/LogCard/LogCard";
import LogSearch from "../Presentational/LogSearch/LogSearch";
import { SearchForm } from "../Presentational/LogSearch/style";
import { LogGrid, Section } from "./style";

function LogContainer() {
  const queryClient = useQueryClient();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(0);
  const { data: logList , error, isLoading } = useQuery(["loglist", page], () => axiosPublicLogList(page),
  { refetchOnWindowFocus: true , keepPreviousData: true });
  
  const [keyword, setKeword] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [dropdown , setDropdown] = useState<boolean>(false);
  const items : string[] = [ "전체", "지역" , "맛집이름"];
  const [category, setCategory] = useState<string>(items[0]);
  
  //로그 좋아요 or 좋아요 취소
  const EventLogLikeChange = () =>{

  }

   // 로그 신고
  const EventDotItemClick = (index: number) =>{
   
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
        queryClient.invalidateQueries('loglist');
      } 
    });
  };

  const EventCategoryClick = () =>{
    setDropdown(!dropdown);
  }
  const EventDropdownItemClick = (index : number) => {
    setCategory(items[index]);
    setDropdown(!dropdown);
  }

  //댓글 input창
  const onChangeComment = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    console.log(comment);
  }, [comment]);

  // 검색 keyword창
  const onChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeword(e.target.value);
    console.log(keyword);
  }, [keyword]);
  
  // useEffect(() => {
  //   async function handleScroll() {
  //     const element = scrollRef.current;
  //     if (element && element.scrollTop + element.clientHeight >= element.scrollHeight) {
  //       const response = await axios.get<Data[]>('/api/data');
  //       const newData = response.data;
  //       setData((prevData) => [...prevData, ...newData]);
  //     }
  //   }
  //   const element = scrollRef.current;
  //   element?.addEventListener('scroll', handleScroll);
  //   return () => element?.removeEventListener('scroll', handleScroll);
  // }, []);

  if(logList)
  return(
    <Section ref={scrollRef}>
      <SearchForm>
        <DropDown items={items} category={category} dropdown={dropdown} EventCategoryClick={EventCategoryClick} EventDropdownItemClick={EventDropdownItemClick}></DropDown>
        <LogSearch keyword={keyword} onChangehandler={onChangeKeyword} ></LogSearch>
      </SearchForm>
      <LogGrid>
        {logList.map((value : logDto): JSX.Element =>{
          return <LogCard 
            cardInfo={value} key={`${value.logSequence}-${value.userSequence}`} 
            comment={comment}
            onChangeComment={onChangeComment}
            EventCommentCreate={EventCommentCreate}
          ></LogCard>
        })}
        {EmptyCard(logList, "375")}
      </LogGrid>
    </Section>
  );
  return <div>error</div>
}

export default LogContainer;