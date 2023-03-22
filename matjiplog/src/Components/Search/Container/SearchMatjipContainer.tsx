import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { SearchSection } from './SearchMatjipContainerStyle'

import SearchBarContainer from '../../Common/Container/SearchBar/SearchBarContainer'
import MyPlaceMap from '../../Common/Presentational/MyPlaceMap/MyPlaceMap';
import LodingSpinner from '../../Common/Loding';
import SearchMatjipList from '../Presentational/SearchMatjipList/SearchMatjipList';

import { dropBarMenuState } from '../../../types/store/dropBar';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useHasTagResult } from '../../../types/hook/common/useHasTag';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';
import { MatjipDto } from '../../../types/api/matjip';
import { MapShowState } from '../../../types/store/mapShow';
import { useMyPlaceMapResult } from '../../../types/hook/useMyPlaceMap';
import { useDrawMarkerResult } from '../../../types/hook/useDrawMarker';

import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useHasTagList } from '../../../Hooks/useHasTagList';
import { useMyPlaceMap } from '../../../Hooks/useMyPlaceMap';
import { useDrawMarker } from '../../../Hooks/useDrawMarker';

import { handlerContext } from '../../../Contexts/handler';

import { dropBarMenuStore } from '../../../stores/dropBar';
import { mapShowStore } from '../../../stores/mapShow';

import { getMatjipData, getMatjipSearch, getMatjipSearchAddress, getMatjipSearchName } from '../../../Services/matjipApi';

function SearchMatjipContainer(): JSX.Element {
    const [searchKey, setSearchKey] = useState<"matjips" | "searchAll" | "searchName" | "searchAddress">("matjips");
    const [keyword, setKeyword] = useState<string>("");
    const [viewList, setViewList] = useState<MatjipDto[]>([]);

    const { mapShow, inActiveMapShow }: MapShowState = mapShowStore();
    const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();

    const { mapRef, map }: useMyPlaceMapResult = useMyPlaceMap(10);
    const { markers, deleteMarkers, drawMatjipMakers }: useDrawMarkerResult = useDrawMarker();
    const { page, initPage, setLastCardRef }: useObserverPageResult = useObserverPage();
    const { matjipList, pushMatjipList, newMatjipList }: useMatjipListResult = useMatjipList();
    const { hasTags, hastagMatjipList, addHasTag, deleteHasTag, filterMatjipHasTag }: useHasTagResult = useHasTagList();

    const matjipQuery = {
        matjips: useQuery(['matjips', page], () => getMatjipData(page), { enabled: searchKey === "matjips" && !keyword }),
        searchAll: useQuery(['matjipsSearch', page, keyword], () => getMatjipSearch(keyword, page), { enabled: searchKey === "searchAll" && !!keyword }),
        searchName: useQuery(['matjipsSearchName', page, keyword], () => getMatjipSearchName(keyword, page), { enabled: searchKey === "searchName" && !!keyword }),
        searchAddress: useQuery(['matjipsSearchAddress', page, keyword], () => getMatjipSearchAddress(keyword, page), { enabled: searchKey === "searchAddress" && !!keyword }),
    };
    const { data, isLoading, isError, error } = matjipQuery[searchKey];
    
    const keywordSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const keyword: string = e.currentTarget.keyword.value;
    
        if (!keyword) {
            setSearchKey("matjips");
            setKeyword("");
            initPage();
            return;
        }
        
        if (dropBarMenu === "전체") setSearchKey("searchAll");
        else if (dropBarMenu === "지역") setSearchKey("searchAddress");
        else if (dropBarMenu === "이름") setSearchKey("searchName");

        setKeyword(keyword);
        initPage();
    }

    useEffect(() => {
        inActiveMapShow();
    }, [])
    
    useEffect(() => {
        setViewList(hasTags[0] ? hastagMatjipList : matjipList);
    }, [hasTags, hastagMatjipList, matjipList]);

    useEffect(() => {
        if (data?.matjipListData) {
            if(page === 0) newMatjipList(data.matjipListData);
            else pushMatjipList(data.matjipListData);
        }
    }, [data])

    useEffect(() => {
        if(markers) deleteMarkers();
        if(map && viewList[0]) drawMatjipMakers(map, viewList);
    }, [map, viewList])

    useEffect(() => {
        if(hasTags[0]) filterMatjipHasTag(matjipList);
    }, [hasTags, matjipList]);

    return (
        <SearchSection>
            <handlerContext.Provider value={{ keywordSubmitHandler, addHasTag, deleteHasTag }}>
                <SearchBarContainer />
            </handlerContext.Provider>
            {mapShow ? (
                <MyPlaceMap mapRef={mapRef}/>
            ): (
                <SearchMatjipList 
                    viewList={viewList}
                    setLastCardRef={setLastCardRef}
                />
            )}
            {isLoading && <LodingSpinner />}
        </SearchSection>
    )
}

export default SearchMatjipContainer;