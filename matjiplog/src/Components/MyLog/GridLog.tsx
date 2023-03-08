import styled from "styled-components";
import { EmptyCard } from "../Common/EmptyCard";
import LogCard from "../Log/LogCard";
import { IUser } from "../Log/UserLogGrid";


function GridLog() {
  const MyLogInfo: Array<IUser> = [
    {
      id: 1,
      userName : "지우초이화이팅",
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가쓰",
      Review : "여기진짜 존맛탱구리집임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다 ",
      heart : "true",
    },
    {
      id: 2,
      userName : "지우초이화이팅",
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가쓰",
      Review : "여기진짜 존맛탱구리집임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다 ",
      heart : "false",
    },
  ];

  return(
    <>
      <GridLogWrap>
        <MyLogWrap>
          {MyLogInfo.map((value: IUser): JSX.Element =>{
            return <LogCard info={value} key={value.id} ></LogCard>
          })}
          {EmptyCard(MyLogInfo, "375")}
        </MyLogWrap>
      </GridLogWrap>
    </>
  );
}

const MyLogWrap = styled.div`
  padding-top : 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit,300px);
  grid-gap: 30px;
`;

const GridLogWrap = styled.div`
  padding : 2% 10% 0 10%;
`;




export default GridLog;