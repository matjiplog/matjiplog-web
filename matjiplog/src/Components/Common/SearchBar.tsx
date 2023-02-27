import { useEffect } from 'react';

import { HasTags, SearchBarDiv, SearchForm, SearchIcon, SearchInput, SearchInputAndHastag, SubmitBtn } from "../../styles/common/searchBar";

import { DropBar } from "./DropBar";
import HasTag from './HasTag';

import { SearchBarProps } from '../../types/props/serachBar';
import { hastagState } from '../../types/store/hastag';

import { hastagStore } from '../../stores/hastag';

function SearchBar({ submitHandler }: SearchBarProps): JSX.Element {
  const { hastags, addHastag, deleteHastag, initHastags }: hastagState = hastagStore();
  const dropBarMenuArr: string[] = ["전체", "지역", "이름"];
  const hasTagMenu: string[] = ["편의점", "탕류(보신용)", "기타 휴게음식점", "기타", "통닭(치킨)", '떡카페', "고속도로", "이동조리", "경양식", "횟집", "냉면집", "공항", "분식", "푸드트럭", "감성주점", "식육(숯불구이)", "호프/통닭", "다방", "유원지", "패밀리레스토랑", "커피숍", "라이브카페", '극장', "까페", "한식", "중국집", "과자점", "패스트푸드", "복어취급", "관광호텔", "철도역구내", "일반조리판매", "외국음식전문점(인도,태국등)", "키즈카페", "김밥(도시락)", "백화점", "단란주점", "아이스크림", "출장조리", "일식", "뷔페식", "전통찻집", "정종/ 대포집/소주방"]

  useEffect(() => {
    initHastags();
  }, [initHastags])

  return (
    <SearchBarDiv>
      <DropBar title={dropBarMenuArr[0]} DropMenu={dropBarMenuArr} />
      <SearchInputAndHastag>
        <SearchForm onSubmit={submitHandler}>
          <SearchInput placeholder="검색어 입력..." name='keyword'/>
          <SubmitBtn type="submit">
            <SearchIcon size={30}/>
          </SubmitBtn>
        </SearchForm>
        <HasTags>
          {hasTagMenu.map((value: string, index: number): JSX.Element => {
            return <HasTag key={index} value={value} />;
          })}
        </HasTags>
      </SearchInputAndHastag>
    </SearchBarDiv>
  );
}

export default SearchBar;
