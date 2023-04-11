import { logData, responseLogDto } from "../../../../types/logDto";
import { reviewType } from "../../Container/TabContainer";
import ReviewItem from "../ReviewItem/ReviewItem";
import { ReviewSeeMore } from "../ReviewItem/style";
import { ReviewWrap } from "./style";

function TabReview( {
  reviewList,
  page,
  seeMoreClick
} : {
  reviewList: responseLogDto,
  page:number,
  seeMoreClick : () => void
})  {
  console.log(reviewList);
  return(
    <ReviewWrap>
    {reviewList.data.slice(0,20).map((value : logData, index:number) : JSX.Element =>{
        return <ReviewItem key={index} item={value} ></ReviewItem>
    })}
    {reviewList.totalElements > 20 && <ReviewSeeMore onClick={seeMoreClick}>리뷰 더보기</ReviewSeeMore>}
  </ReviewWrap>
  );
}

export default TabReview;