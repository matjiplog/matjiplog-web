import { useParams } from "react-router-dom";
import { useMatjipDetail } from "../Presentational/useMatjipDetail";
import MatjipTop from "../Presentational/MatjipTop/MatjipTop";
import LodingSpinner from "../../Common/Loding";
import MatjipTab from "../Presentational/MatjipTab/MatjipTab";
import { TabWrap, TabContent } from "../Presentational/MatjipTab/style";
import TabHome from "../Presentational/TabHome/TabHome";
import TabMenu from "../Presentational/TabMenu/TabMenu";
import TabReview from "../Presentational/TabReview/TabReview";
import { useEffect, useState } from "react";

function TopContainer() {
  const parm = useParams();
  const { data, isLoading, isError, isFetching } = useMatjipDetail(parm);
  
  const windowOpenKakaoLoadFind = () =>{
    window.open(`https://map.kakao.com/link/to/${data?.name},${data?.locationLatitude},${data?.locationLongitude}`, "_blank");
  }

  const tabList : string[] = ["홈" , "메뉴", "리뷰"];
  const [tabindex, setTabindex] = useState<number>(0);

  const TabClick = (index : number) : void => {
    setTabindex(index);
  }

  if(data)
  return (
    <>
      <MatjipTop matjipInfo={data} windowOpenKakaoLoadFind={windowOpenKakaoLoadFind}></MatjipTop>
      <TabWrap>
        <MatjipTab tabList={tabList} tabindex={tabindex} TabClick={TabClick}></MatjipTab>
        <TabContent>
          {tabindex === 0 && <TabHome matjipData={data}></TabHome>}
          {tabindex === 1 && <TabMenu/>}
          {tabindex === 2 && <TabReview matjipData={data}></TabReview>}
        </TabContent>
      </TabWrap>
    </>
  )
  return <LodingSpinner/>
}

export default TopContainer;