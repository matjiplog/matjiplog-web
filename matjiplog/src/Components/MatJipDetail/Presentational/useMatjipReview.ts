import { useState } from "react";
import { axiosLogSearchMatjipName } from "../../../Services/log-service";
import { responseLogDto } from "../../../types/logDto";

export const useMatjipReview = () => {
  const [Mpage, setMpage ] = useState<number>(0);
  const [reviewList , setReviewList] = useState<responseLogDto>({totalPages : 0, totalElements : 0, data : []});
  
  const initReviewData = async (keyword: string, page: number) =>{
    await axiosLogSearchMatjipName(keyword, page).then( res => {
      if(reviewList.data.length === 0) setReviewList(res)
    }
  );
    
    // if(reviewList?.totalElements === 0) return setReviewList(data.logData);
    // if(Mpage != page) {
    //   setMpage(page);
    //   setReviewList((prev) => [...prev?.data, ...data.logData]);
    // }
  }

  return {reviewList, initReviewData};
}

