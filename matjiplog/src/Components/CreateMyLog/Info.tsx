import {
  Disclosure,
  DisclosureCheck,
  DisclosureCheckDiv,
  DisclosureTitle,
  FindMap,
  FindMapIcon,
  FindMapTitle,
  InfoDiv,
  Scope,
  ScopeTitle,
  ScopeItems,
  ScopteItem,
  ScopeItemTitleDiv,
  ScopeItemTitle,
  ScopeStars,
  Star,
  OptionsDiv,
  OptionsTitle,
  ScopeAndOptions,
} from "../../styles/createMylog/info";

import { DropBar } from "../Common/DropBar";

import {
  createMyLogdropbarStore,
  createMyLogdropbarTypes,
} from "../../stores/createMyLog/dropbar";

import { useDisclosure, useDisclosureTypes } from "../../Hooks/useDisclosure";
import { useScope, useScopeTypes } from "../../Hooks/useScope";

function CreateMyLogInfo(): JSX.Element {
  const createMyLogDropbar: string[] = ["매장 방문", "포장", "배달"];
  const scopeArray = [0, 1, 2, 3, 4];
  const { dropBar, menu, toggleDropbar, initDropbar }: createMyLogdropbarTypes =
    createMyLogdropbarStore();
  const { tasteScope, manyScope, serviceScope, scopeClick }: useScopeTypes =
    useScope();
  const { disclosure, toggleDisclosure }: useDisclosureTypes = useDisclosure();

  return (
    <InfoDiv className="inofoDiv">
      <FindMap className="map">
        <FindMapTitle htmlFor="map">음식점 찾기</FindMapTitle>
        <FindMapIcon size={30} id="map" />
      </FindMap>
      <Disclosure className="disclosure">
        <DisclosureTitle>공개</DisclosureTitle>
        <DisclosureCheckDiv
          className={disclosure ? "publicBg" : "privateBg"}
          onClick={toggleDisclosure}
        >
          <DisclosureCheck className={disclosure ? "public" : "private"} />
        </DisclosureCheckDiv>
      </Disclosure>
      <ScopeAndOptions className="scopeAndOptions">
        <Scope>
          <ScopeTitle>별점</ScopeTitle>
          <ScopeItems>
            <ScopteItem>
              <ScopeItemTitleDiv>
                <ScopeItemTitle>맛</ScopeItemTitle>
              </ScopeItemTitleDiv>
              <ScopeStars>
                {scopeArray.map(
                  (index: number): JSX.Element => (
                    <Star
                      key={index}
                      onClick={() => scopeClick(index, "taste")}
                      className={tasteScope[index] ? "yellow" : "darkgray"}
                      size="20"
                    />
                  )
                )}
              </ScopeStars>
            </ScopteItem>
            <ScopteItem>
              <ScopeItemTitleDiv>
                <ScopeItemTitle>양</ScopeItemTitle>
              </ScopeItemTitleDiv>
              <ScopeStars>
                {scopeArray.map(
                  (index: number): JSX.Element => (
                    <Star
                      key={index}
                      onClick={() => scopeClick(index, "many")}
                      className={manyScope[index] ? "yellow" : "darkgray"}
                      size="20"
                    />
                  )
                )}
              </ScopeStars>
            </ScopteItem>
            <ScopteItem>
              <ScopeItemTitleDiv>
                <ScopeItemTitle>서비스</ScopeItemTitle>
              </ScopeItemTitleDiv>
              <ScopeStars>
                {scopeArray.map(
                  (index: number): JSX.Element => (
                    <Star
                      key={index}
                      onClick={() => scopeClick(index, "service")}
                      className={serviceScope[index] ? "yellow" : "darkgray"}
                      size="20"
                    />
                  )
                )}
              </ScopeStars>
            </ScopteItem>
          </ScopeItems>
        </Scope>
        <OptionsDiv className="optionsDiv">
          <OptionsTitle>주문 방식</OptionsTitle>
          <DropBar
            category="선택 사항"
            title={menu}
            DropMenu={createMyLogDropbar}
            dropBarState={dropBar}
            dropBarClick={toggleDropbar}
          ></DropBar>
        </OptionsDiv>
      </ScopeAndOptions>
    </InfoDiv>
  );
}
export default CreateMyLogInfo;
