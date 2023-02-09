import styled from "styled-components";
import { EmptyCard } from "../Common/EmptyCard";
import LogCard from "./LogCard";


export interface IUser {
  userName : string,
  Location : string,
  RestaurantName : string,
  Review : string,
}

function UserLogGrid() {
  const UserLogInfo: Array<IUser> = [
    {
      userName : "지우초이화이팅",
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가쓰",
      Review : "여기진짜 존맛탱구리집임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다 "
    },
    {
      userName : "지우초이화이팅",
      Location : "대구시 달서구 이곡동",
      RestaurantName : "미친 돈가쓰",
      Review : "여기진짜 존맛탱구리집임 웨이팅은 한시간 넘지만 기다릴 정도로 맛도리입니다 "
    },
  ];

  return(
    <UserLogWrap>
      {UserLogInfo.map((value: IUser, index: number): JSX.Element =>{
        return <LogCard info={value} key={index} ></LogCard>
      })}
      {EmptyCard(UserLogInfo, "375")}
    </UserLogWrap>
  );
}

const UserLogWrap = styled.div`
  padding-top : 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export default UserLogGrid;