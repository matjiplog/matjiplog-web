import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { SearchSection } from './SearchMatjipContainerStyle'

import SearchBarContainer from '../../Common/Container/SearchBar/SearchBarContainer'
import LodingSpinner from '../../Common/Loding';
import SearchMatjipList from '../Presentational/SearchMatjipList/SearchMatjipList';

import { dropBarMenuState } from '../../../types/store/dropBar';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useHasTagResult } from '../../../types/hook/common/useHasTag';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';

import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useHasTagList } from '../../../Hooks/useHasTagList';

import { handlerContext } from '../../../Contexts/handler';

import { dropBarMenuStore } from '../../../stores/dropBar';

import { getMatjipData, getMatjipSearch, getMatjipSearchAddress, getMatjipSearchName } from '../../../Services/matjipApi';

function SearchMatjipContainer(): JSX.Element {
    const [searchKey, setSearchKey] = useState<"matjips" | "searchAll" | "searchName" | "searchAddress">("matjips");
    const [keyword, setKeyword] = useState<string>("");
    const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();
    const { page, initPage, setLastCardRef }: useObserverPageResult = useObserverPage();
    const { matjipList, pushMatjipList, newMatjipList }: useMatjipListResult = useMatjipList();
    const { hasTags, hastagList, addHasTag, deleteHasTag, filterHasTag }: useHasTagResult = useHasTagList();

    const matjipQuery = {
      matjips: useQuery(['matjips', page], () => getMatjipData(page), { enabled: searchKey === "matjips" && !keyword }),
      searchAll: useQuery(['matjipsSearch', page, keyword], () => getMatjipSearch(keyword, page), { enabled: searchKey === "searchAll" && !!keyword }),
      searchName: useQuery(['matjipsSearchName', page, keyword], () => getMatjipSearchName(keyword, page), { enabled: searchKey === "searchName" && !!keyword }),
      searchAddress: useQuery(['matjipsSearchAddress', page, keyword], () => getMatjipSearchAddress(keyword, page), { enabled: searchKey === "searchAddress" && !!keyword }),
    };
    const { data, isLoading, isError, error } = matjipQuery[searchKey];
    const viewList = hasTags[0] ? hastagList : matjipList;
    
    const keywordSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      const keyword: string = e.currentTarget.keyword.value;
  
      if (!keyword) {
        setSearchKey("matjips");
        setKeyword("");
        initPage();
        return;
      }
    
      if (dropBarMenu === "전체") {
        setSearchKey("searchAll");
      } else if (dropBarMenu === "지역") {
        setSearchKey("searchAddress");
      } else if (dropBarMenu === "이름") {
        setSearchKey("searchName");
      }
      setKeyword(keyword);
      initPage();
    }

    useEffect(() => {
      if (data?.matjipListData) {
          if(page === 0) newMatjipList(data.matjipListData);
          else pushMatjipList(data.matjipListData);
      }
  }, [data])

    useEffect(() => {
      filterHasTag(matjipList);
    }, [hasTags, matjipList]);

    return <SearchSection>
        <handlerContext.Provider value={{ keywordSubmitHandler, addHasTag, deleteHasTag }}>
            <SearchBarContainer />
        </handlerContext.Provider>
        <SearchMatjipList viewList={viewList} setLastCardRef={setLastCardRef}/>
        {isLoading && <LodingSpinner />}
    </SearchSection>
}

export default SearchMatjipContainer;