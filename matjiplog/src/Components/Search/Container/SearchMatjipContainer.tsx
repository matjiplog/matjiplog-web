import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { MatjipItem, NonSearchDiv, SearchListGrid, SearchSection } from './SearchMatjipContainerStyle';

import SearchBarContainer from '../../Common/Container/SearchBar/SearchBarContainer';
import MatjipImage from '../Presentational/MatjipImage/MatjipImage';
import MatjipInfo from '../Presentational/MatjipInfo/MatjipInfo';
import LikeAndWrite from '../Presentational/LikeAndWrite/LikeAndWrite';
import MyPlaceMap from '../../Common/Presentational/MyPlaceMap/MyPlaceMap';
import LodingSpinner from '../../Common/Loding';

import { dropBarMenuState } from '../../../types/store/dropBar';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useHasTagResult } from '../../../types/hook/common/useHasTag';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';
import { MatjipDto } from '../../../types/api/matjip';
import { MapShowState } from '../../../types/store/mapShow';
import { useMyPlaceMapResult } from '../../../types/hook/common/useMyPlaceMap';
import { useDrawMarkerResult } from '../../../types/hook/common/useDrawMarker';

import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useHasTagList } from '../../../Hooks/useHasTagList';
import { useMyPlaceMap } from '../../../Hooks/useMyPlaceMap';
import { useDrawMarker } from '../../../Hooks/useDrawMarker';
import { useNavigateUrl } from '../../../Hooks/useNavigateUrl';

import { handlerContext } from '../../../Contexts/handler';

import { dropBarMenuStore } from '../../../stores/dropBar';
import { mapShowStore } from '../../../stores/mapShow';

import { getMatjipData, getMatjipSearch, getMatjipSearchAddress, getMatjipSearchName } from '../../../Services/matjipApi';
import Meta from '../../Common/Presentational/Meta/Meta';

function SearchMatjipContainer(): JSX.Element {
    const [searchKey, setSearchKey] = useState<"matjips" | "searchAll" | "searchName" | "searchAddress">("matjips");
    const [keyword, setKeyword] = useState<string>("");
    const [viewList, setViewList] = useState<MatjipDto[]>([]);

    const { mapShow, inActiveMapShow }: MapShowState = mapShowStore();
    const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();

    const { handleUrl } = useNavigateUrl();
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
        if (data?.data) {
            if(page === 0) newMatjipList(data.data);
            else pushMatjipList(data.data);
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
            <Meta title={'맛집 찾기'} description={'국내 맛집 목록에서 선택하여 기록하고 공유해보세요'} />
            <handlerContext.Provider value={{ keywordSubmitHandler, addHasTag, deleteHasTag }}>
                <SearchBarContainer />
            </handlerContext.Provider>
            {mapShow ? (
                <MyPlaceMap mapRef={mapRef} />
            ): (
                <SearchListGrid>
                    {!isLoading && viewList.map((matjip: MatjipDto, index: number) => {
                        const { matjipSequence } = matjip;
                        const isLastCard = index === viewList.length - 1;

                        return (
                            <MatjipItem key={matjipSequence} onClick={() => {handleUrl(`/matjip/${matjipSequence}`)}}>
                                <MatjipImage imgUrl="/assets/images/Matjip.png" />
                                <MatjipInfo data={matjip} />
                                <LikeAndWrite data={matjip} />
                                {isLastCard && <div ref={setLastCardRef} />}
                            </MatjipItem>
                        );
                    })}
                    
                </SearchListGrid>
            )}
            {isLoading && <LodingSpinner />}
            {!isLoading && !viewList.length && (
                <NonSearchDiv>
                    검색결과가 없습니다.<br></br>
                    다시 검색해주세요!
                </NonSearchDiv>
            )}
        </SearchSection>
    )
}

export default SearchMatjipContainer;