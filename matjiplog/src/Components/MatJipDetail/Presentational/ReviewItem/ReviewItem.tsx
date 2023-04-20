
import { logData } from "../../../../types/logDto";
import { StarMake } from "../../../Common/StarMake";
import { Wrap, ReviewTop, UserDiv, UserImg, UserP, StarItem, ReviewContent } from "./style";

function ReviewItem({
  item,
  matjipname,
} : { 
  item: logData;
  matjipname: string,
}):JSX.Element {
  const starpoint = (item.ratingPortion + item.ratingService + item.ratingTaste)/3;
  return (
    <Wrap>
      <ReviewTop>
        <UserDiv>
          <UserImg url="/assets/images/loginPicture.png"></UserImg>
          <UserP>{item.user.nickname}</UserP>
        </UserDiv>
        <StarItem>
          <p style={{fontWeight:"bold", fontSize:"12px"}}>{starpoint.toFixed(1)}</p>
          {StarMake(starpoint, 20)}
        </StarItem>
      </ReviewTop>
      <ReviewContent>
        <div style={{fontWeight:"bold", fontSize:"12px"}}>{matjipname}</div>
        <div style={ {marginTop:"10px"} }>{item.content}</div>
        <div>{item.content}</div>
      </ReviewContent>
    </Wrap>
  )
}


export default ReviewItem;