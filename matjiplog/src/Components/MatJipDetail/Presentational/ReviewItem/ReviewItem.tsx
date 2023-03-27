import styled from "styled-components";
import { StarMake } from "../../../Common/StarMake";
import { reviewType } from "../../Container/TabContainer";
import { Wrap, ReviewTop, UserDiv, UserImg, UserP, StarItem, ReviewContent } from "./style";


function ReviewItem({
  item,
} : { 
  item: reviewType;
}):JSX.Element {
  const starpoint : number = (item.portion+item.service+item.taste)/3;
  return (
    <Wrap>
      <ReviewTop>
        <UserDiv>
          <UserImg url="/assets/images/loginPicture.png"></UserImg>
          <UserP>{item.username}</UserP>
        </UserDiv>
        <StarItem>
          <p style={{fontWeight:"bold", fontSize:"12px"}}>{starpoint.toFixed(1)}</p>
          {StarMake(starpoint, 20)}
        </StarItem>
      </ReviewTop>
      <ReviewContent>
        <div style={{fontWeight:"bold", fontSize:"12px"}}>{item.storename}</div>
        <div style={ {marginTop:"10px"} }>{item.content}</div>
        <div>{item.content}</div>
      </ReviewContent>
    </Wrap>
  )
}


export default ReviewItem;