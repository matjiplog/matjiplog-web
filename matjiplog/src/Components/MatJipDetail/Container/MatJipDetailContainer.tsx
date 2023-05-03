import { useParams } from "react-router-dom";
import { useMatjipDetail } from "../Presentational/useMatjipDetail";
import MatjipTop from "../Presentational/MatjipTop/MatjipTop";
import LodingSpinner from "../../Common/Loding";
import MatjipTab from "../Presentational/MatjipTab/MatjipTab";
import { TabWrap, TabContent } from "../Presentational/MatjipTab/style";
import TabHome from "../Presentational/TabHome/TabHome";
import TabMenu from "../Presentational/TabMenu/TabMenu";
import TabReview from "../Presentational/TabReview/TabReview";
import { useState } from "react";
import Meta from '../../Common/Presentational/Meta/Meta';

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
      <Meta title={data.name} description={`이름 : ${data.name} 주소 : ${data.address} 카테고리 : ${data.category}`} />
      <MatjipTop matjipInfo={data} windowOpenKakaoLoadFind={windowOpenKakaoLoadFind} />
      <TabWrap>
        <MatjipTab tabList={tabList} tabindex={tabindex} TabClick={TabClick} />
        <TabContent>
          {tabindex === 0 && <TabHome matjipData={data} />}
          {tabindex === 1 && <TabMenu/>}
          {tabindex === 2 && <TabReview matjipData={data} />}
        </TabContent>
      </TabWrap>
    </>
  )
  return <LodingSpinner/>
}

export default TopContainer;