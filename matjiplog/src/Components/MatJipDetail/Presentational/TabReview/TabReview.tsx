import { logData, responseLogDto } from "../../../../types/logDto";
import { matjipDto } from "../../../../types/matjipDto";
import ReviewItem from "../ReviewItem/ReviewItem";
import { ReviewSeeMore } from "../ReviewItem/style";
import { ReviewWrap } from "./style";

function TabReview( {
  matjipData,
} : {
  matjipData: matjipDto,
})  {
  return(
    <ReviewWrap>
    {matjipData.logs.map((value : logData, index:number) : JSX.Element =>{
        return <ReviewItem key={index} item={value} matjipname={matjipData.name} ></ReviewItem>
    })}
  </ReviewWrap>
  );
}
// {reviewList.data.slice(0,20).map((value : logData, index:number) : JSX.Element =>{
export default TabReview;