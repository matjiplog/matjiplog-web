import { reviewType } from "../../Container/TabContainer";
import ReviewItem from "../ReviewItem/ReviewItem";
import { ReviewSeeMore } from "../ReviewItem/style";
import { ReviewWrap } from "./style";

function TabReview( {
  reviewList,
  nextId,
  seeMoreClick
} : {
  reviewList: reviewType[],
  nextId:number,
  seeMoreClick : () => void
})  {
  return(
    <ReviewWrap>
    {reviewList.slice(0,nextId).map((value : reviewType, index) : JSX.Element =>{
        return <ReviewItem item={value} key={index}></ReviewItem>
    })}
    {reviewList.length > nextId && <ReviewSeeMore onClick={seeMoreClick}>리뷰 더보기</ReviewSeeMore>}
  </ReviewWrap>
  );
}

export default TabReview;