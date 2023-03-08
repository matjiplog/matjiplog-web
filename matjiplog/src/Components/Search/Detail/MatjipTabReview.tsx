import { useState } from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

export interface reviewType {
  username: string;
  storename: string;
  taste: number;
  portion: number;
  service: number;
  content: string;
}

function MatjipTabReview() {
  //리뷰 조회
  const reviewList : reviewType[] = [
    { 
      username : "최지우",
      storename : "존맛탱돈까스1",
      taste: 4.0,
      portion : 4.0,
      service : 4.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
    { 
      username : "지인혁",
      storename : "존맛탱돈까스2",
      taste: 4.0,
      portion : 4.0,
      service : 4.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
    { 
      username : "이승현",
      storename : "존맛탱돈까스3",
      taste: 4.0,
      portion : 4.0,
      service : 4.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
    { 
      username : "최지우",
      storename : "존맛탱돈까스4",
      taste: 4.0,
      portion : 4.0,
      service : 4.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
    { 
      username : "최지우",
      storename : "존맛탱돈까스5",
      taste: 2.0,
      portion : 2.0,
      service : 2.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
    { 
      username : "최지우",
      storename : "존맛탱돈까스6",
      taste: 4.0,
      portion : 4.0,
      service : 4.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
    { 
      username : "최지우",
      storename : "존맛탱돈까스7",
      taste: 5.0,
      portion : 5.0,
      service : 5.0,
      content : "소스가 달달하고 전형적인 경양식 돈까스! 맛잇습니다."
    },
  ];

  const [nextId, setNextId] = useState<number>(3);
  const SeeMoreClick = ()=>{
    setNextId(nextId+3);
  };

  return(
    <ReviewWrap>
      {reviewList.slice(0,nextId).map((value : reviewType, index) : JSX.Element =>{
          return <ReviewItem item={value} key={index}></ReviewItem>
      })}
      {reviewList.length > nextId && <ReviewSeeMore onClick={SeeMoreClick}>리뷰 더보기</ReviewSeeMore>}
    </ReviewWrap>
  );
}

const ReviewSeeMore = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin : 20px 0 20px 0;
  text-align: center;
  cursor: pointer;
`;
const ReviewWrap = styled.div`
  margin : 20px 0px 20px 0px;
`;
export default MatjipTabReview;