import { useState } from "react";
import MatjipTab from "../Presentational/MatjipTab/MatjipTab";
import { TabContent, TabWrap } from "../Presentational/MatjipTab/style";
import TabHome from "../Presentational/TabHome/TabHome";
import TabMenu from "../Presentational/TabMenu/TabMenu";
import TabReview from "../Presentational/TabReview/TabReview";

function TabContainer() {
  const tabList : string[] = ["홈" , "메뉴", "리뷰"];
  const [tabindex, setTabindex] = useState<number>(0);
  const TabClick = (index : number) : void => {
    setTabindex(index);
  }
  const [nextId, setNextId] = useState<number>(3);
  const seeMoreClick = ()=>{
    setNextId(nextId+3);
  };
  
  return (
    <TabWrap>
      <MatjipTab tabList={tabList} tabindex={tabindex} TabClick={TabClick}></MatjipTab>
      <TabContent>
        {tabindex === 0 && <TabHome/>}
        {tabindex === 1 && <TabMenu/>}
        {tabindex === 2 && <TabReview reviewList={reviewList} nextId={nextId} seeMoreClick={seeMoreClick}></TabReview>}
      </TabContent>
    </TabWrap>
  )
}

export const reviewList : reviewType[] = [
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


export interface reviewType {
  username: string;
  storename: string;
  taste: number;
  portion: number;
  service: number;
  content: string;
}

export default TabContainer;