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

import { hastagStore } from '../../stores/hastag';
import { dropBarMenuStore } from '../../stores/dropBar';

function SearchMatJip(): JSX.Element {
  const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();
  const { hastags }: hastagState = hastagStore();
  const [matjipList, setMatjipList] = useState<MatjipDto[]>([]);
  const [hastagList, setHastagList] = useState<MatjipDto[]>([]);
  const [matjipKey, setMatjipKey] = useState<"matjips" | "searchAll" | "searchName" | "searchAddress">("matjips");
  const [matjipPage, setMatjipPage] = useState<number>(0);
  const [keyword, setKeyword] = useState<string>("");

  const matjipQuery = {
    matjips: useQuery(['matjips', matjipPage], () => getMatjipData(matjipPage), { enabled: matjipKey === "matjips" && !keyword }),
    searchAll: useQuery(['matjipsSearch', matjipPage, keyword], () => getMatjipSearch(keyword, matjipPage), { enabled: matjipKey === "searchAll" && !!keyword }),
    searchName: useQuery(['matjipsSearchName', matjipPage, keyword], () => getMatjipSearchName(keyword, matjipPage), { enabled: matjipKey === "searchName" && !!keyword }),
    searchAddress: useQuery(['matjipsSearchAddress', matjipPage, keyword], () => getMatjipSearchAddress(keyword, matjipPage), { enabled: matjipKey === "searchAddress" && !!keyword }),
  };
  const { data, isLoading, isError, error } = matjipQuery[matjipKey];
  const viewList = hastags[0] ? hastagList : matjipList;
  const { setLastCardRef } = useObserverPage(() => setMatjipPage((prev) => prev + 1));

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const keyword: string = e.currentTarget.keyword.value;

    if (!keyword) {
      setMatjipKey("matjips");
      setKeyword("");
      setMatjipPage(0);
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
    setMatjipPage(0);
  }

  useEffect(() => {
    const newHastagList = hastags.flatMap((value: string) => {
      return matjipList.filter((matjip) => {
        return matjip.category === value;
      });
    });
    setHastagList([...newHastagList]);
  }, [hastags, matjipList]);

  useEffect(() => {
    if (!isLoading && data?.matjipListData) {
      if(matjipPage === 0){
        setMatjipList([...data.matjipListData]);
      }else{
        setMatjipList((prev) => [...prev, ...data.matjipListData]);
      }
    }
  }, [data, isLoading, matjipPage]);

  return (
    <SearchSection>
      <SearchBar submitHandler={submitHandler}/>
      <SearchResult>
      {viewList.map((value: MatjipDto, index: number) => {
        const {matjipSequence, name, ratingTaste, ratingPortion, ratingService, address, roadAddress, category } = value;
        const scopeNumber = (ratingPortion + ratingService + ratingTaste) / 3;
        const isLastCard = index === matjipList.length - 1;

        return (
          <Link to={`/search/${matjipSequence}`} key={matjipSequence}>
            <ResultCard 
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
