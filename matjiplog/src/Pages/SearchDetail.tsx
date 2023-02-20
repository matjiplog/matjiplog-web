import NotFound from "../Components/Common/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchDetail() {
  const location = useLocation();
  console.log(location);
  //state로 정보 보낼시 url로만 입력했을때 오류
  const state = location.state;

  useEffect(() => {
    if(state === null){
      //개별통신
      
      //개별통신해서 성공안되면 notfound
    }
    //널이 아니면 state정보 사용
  }, [])
  
  return(
    <>
      {state === null ? <NotFound></NotFound> :
      <div>{state.info.id}
      
      </div>
      }
      
    </>
  );
}

export default SearchDetail;