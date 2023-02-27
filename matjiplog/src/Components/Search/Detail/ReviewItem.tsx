import styled from "styled-components";
import { StarMake } from "../../Common/StarMake";
import { reviewType } from "./MatjipTabReview";


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
          <UserImg imgurl="/assets/images/loginPicture.png"></UserImg>
          <UserP>{item.username}</UserP>
        </UserDiv>
        <StarItem>
          <p style={{fontWeight:"bold", fontSize:"12px"}}>{starpoint.toFixed(1)}</p>
          {StarMake(starpoint)}
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


const ReviewTop =styled.div`
  display: flex;
  justify-content: space-between;
`;

const StarItem = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const UserP = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
const UserImg = styled.div<{ imgurl: string }>`
  width: 36px;
  height: 36px;
  background-image: url(${(props) => props.imgurl});
  background-repeat : no-repeat;
  background-size : cover;
  border-radius : 50%;
  margin-right : 8px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px 20px 10px;
  border-bottom : 1px solid rgb(219,219,219);
  cursor: pointer;

  &:hover {
    background-color : rgb(235,235,235);
  }
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;
export default ReviewItem;