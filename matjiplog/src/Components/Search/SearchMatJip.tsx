import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import SearchBar from '../Common/SearchBar';
import LodingSpinner from '../Common/Loding';
import ResultCard from './ResultCard';

import { SearchSection, SearchResult } from '../../styles/search/searchMatiJip';

import { getMatjipData, getMatjipSearch, getMatjipSearchName, getMatjipSearchAddress } from '../../Services/matjipApi';

import { MatjipDto } from '../../types/api/matjip';
import { dropBarMenuState } from '../../types/store/dropBar';
import { hastagState } from '../../types/store/hastag';

import { useObserverPage } from '../../Hooks/useObserverPage';
import { useMatjipList } from '../../Hooks/useMatjipList';

import { hastagStore } from '../../stores/hastag';
import { dropBarMenuStore } from '../../stores/dropBar';

function SearchMatJip(): JSX.Element {
  const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();
  const { hastags }: hastagState = hastagStore();
  const [hastagList, setHastagList] = useState<MatjipDto[]>([]);
  const [matjipKey, setMatjipKey] = useState<"matjips" | "searchAll" | "searchName" | "searchAddress">("matjips");
  const [keyword, setKeyword] = useState<string>("");
  const { page, setPage, setLastCardRef } = useObserverPage();
  const matjipQuery = {
    matjips: useQuery(['matjips', page], () => getMatjipData(page), { enabled: matjipKey === "matjips" && !keyword }),
    searchAll: useQuery(['matjipsSearch', page, keyword], () => getMatjipSearch(keyword, page), { enabled: matjipKey === "searchAll" && !!keyword }),
    searchName: useQuery(['matjipsSearchName', page, keyword], () => getMatjipSearchName(keyword, page), { enabled: matjipKey === "searchName" && !!keyword }),
    searchAddress: useQuery(['matjipsSearchAddress', page, keyword], () => getMatjipSearchAddress(keyword, page), { enabled: matjipKey === "searchAddress" && !!keyword }),
  };
  const { data, isLoading, isError, error } = matjipQuery[matjipKey];
  const { matjipList } = useMatjipList(data, isLoading, page);
  const viewList = hastags[0] ? hastagList : matjipList;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const keyword: string = e.currentTarget.keyword.value;

    if (!keyword) {
      setMatjipKey("matjips");
      setKeyword("");
      setPage(0);
      return;
    }
  
    if (dropBarMenu === "전체") {
      setMatjipKey("searchAll");
    } else if (dropBarMenu === "지역") {
      setMatjipKey("searchAddress");
    } else if (dropBarMenu === "이름") {
      setMatjipKey("searchName");
    }
    setKeyword(keyword);
    setPage(0);
  }

  useEffect(() => {
    const newHastagList = hastags.flatMap((value: string) => {
      return matjipList.filter((matjip) => {
        return matjip.category === value;
      });
    });
    setHastagList([...newHastagList]);
  }, [hastags, matjipList]);

  return (
    <SearchSection>
      <SearchBar submitHandler={submitHandler}/>
      <SearchResult>
      {viewList.map((value: MatjipDto, index: number) => {
        const {matjipSequence, name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = value;
        const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
        const isLastCard = index === viewList.length - 1;

        return (
          <Link to={`/search/${matjipSequence}`} key={matjipSequence}>
            <ResultCard 
              category={category}
              imgUrl="/assets/images/Matjip.png"
              title={name}
              scopeNumber={scopeNumber}
              address={roadAddress}
            />
            {isLastCard && <div ref={setLastCardRef} />}
          </Link>
        );
      })}
      </SearchResult>
      {isLoading && <LodingSpinner />}
    </SearchSection>
  );
}

export default SearchMatJip;
