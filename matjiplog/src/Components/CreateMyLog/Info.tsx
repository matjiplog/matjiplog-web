import { Disclosure, DisclosureCheck, DisclosureCheckDiv, DisclosureTitle, FindMap, FindMapIcon, FindMapTitle, InfoDiv, Scope, ScopeTitle, ScopeItems, ScopteItem, ScopeItemTitleDiv, ScopeItemTitle, ScopeStars, Star, OptionsDiv, OptionsTitle, ScopeAndOptions } from "../../styles/createMylog/info";

// import { DropBar } from "../Common/DropBar";

import { useDisclosure, useDisclosureTypes } from "../../Hooks/useDisclosure";
import { useScope, useScopeType } from "../../Hooks/useScope";

function CreateMyLogInfo(): JSX.Element {
  const { tasteScope, manyScope, serviceScope, scopeClick }: useScopeType = useScope();
  const { disclosure, toggleDisclosure }: useDisclosureTypes = useDisclosure(false);
  const createMyLogDropbar: string[] = ["선택 없음", "매장 방문", "포장", "배달"];
  const scopeArray: number[] = [0, 1, 2, 3, 4];
  const scopeItems: scopeItemsTypes[] = [
    { title: "맛", order: "taste", state: tasteScope },
    { title: "양", order: "many", state: manyScope },
    { title: "서비스", order: "service", state: serviceScope } ];

  return (
    <InfoDiv className="inofoDiv">
      <FindMap className="map">
        <FindMapTitle>음식점 찾기</FindMapTitle>
        <FindMapIcon size={30} />
      </FindMap>
      <Disclosure className="disclosure">
        <DisclosureTitle>공개</DisclosureTitle>
        <DisclosureCheckDiv className={disclosure ? "publicBg" : "privateBg"} onClick={toggleDisclosure}>
          <DisclosureCheck className={disclosure ? "public" : "private"} />
        </DisclosureCheckDiv>
      </Disclosure>
      <ScopeAndOptions className="scopeAndOptions">
        <Scope className="scopeDiv">
          <ScopeTitle>별점</ScopeTitle>
          <ScopeItems>
            {scopeItems.map((value: scopeItemsTypes, index: number): JSX.Element => {
                return (
                  <ScopteItem key={index}>
                    <ScopeItemTitleDiv>
                      <ScopeItemTitle>{value.title}</ScopeItemTitle>
                    </ScopeItemTitleDiv>
                    <ScopeStars>
                      {scopeArray.map((index: number): JSX.Element => (
                          <Star key={index} onClick={() => scopeClick(index, value.order)} className={value.state[index] ? "yellow" : "darkgray"}/>
                        )
                      )}
                    </ScopeStars>
                  </ScopteItem>
                )
              }
            )}
          </ScopeItems>
        </Scope>
        <OptionsDiv className="optionsDiv">
          <OptionsTitle>주문 방식</OptionsTitle>
          {/* <DropBar title={createMyLogDropbar[0]} DropMenu={createMyLogDropbar}/> */}
        </OptionsDiv>
      </ScopeAndOptions>
    </InfoDiv>
  );
}
export default CreateMyLogInfo;

interface scopeItemsTypes {
  title: string;
  order: string;
  state: boolean[];
}
