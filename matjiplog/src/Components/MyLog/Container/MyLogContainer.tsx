import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import SearchBarContainer from '../../Common/Container/SearchBar/SearchBarContainer';
import MyLogList from '../Presentational/MyLogList/MyLogList';
import LodingSpinner from '../../Common/Loding';
import MyPlaceMap from '../../Common/Presentational/MyPlaceMap/MyPlaceMap';

import { MyLogSection, NonSearchDiv } from './MyLogStyle';

import { MapShowState } from '../../../types/store/mapShow';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';
import { useHasTagResult } from '../../../types/hook/common/useHasTag';
import { dropBarMenuState } from '../../../types/store/dropBar';
import { MyLogDto } from '../../../types/api/myLog';
import { useMyPlaceMapResult } from '../../../types/hook/common/useMyPlaceMap';
import { useDrawMarkerResult } from '../../../types/hook/common/useDrawMarker';
import { UserState } from '../../../types/store/user';

import { mapShowStore } from '../../../stores/mapShow';
import { dropBarMenuStore } from '../../../stores/dropBar';
import { userStore } from '../../../stores/user';

import { handlerContext } from '../../../Contexts/handler';

import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useHasTagList } from '../../../Hooks/useHasTagList';
import { useMyPlaceMap } from '../../../Hooks/useMyPlaceMap';
import { useDrawMarker } from '../../../Hooks/useDrawMarker';
import { useNavigateUrl } from '../../../Hooks/useNavigateUrl';

import { deleteMyLogData, getMyLogData, getMyLogSearchAddress, getMyLogSearchAll, getMyLogSearchName } from '../../../Services/LogAPi';

function MyLogContainer(): JSX.Element {
    const [searchKey, setSearchKey] = useState<"myLogs" | "searchAll" | "searchName" | "searchAddress">("myLogs");
    const [keyword, setKeyword] = useState<string>("");
    const [viewList, setViewList] = useState<MyLogDto[]>([]);
    const [logId, setLogId] = useState<number>(0);

    const { isLogin, userSequence }: UserState = userStore();
    const { mapShow, inActiveMapShow }: MapShowState = mapShowStore();
    const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();
    
    const { handleUrl } = useNavigateUrl();
    const { mapRef, map }: useMyPlaceMapResult = useMyPlaceMap(12);
    const { markers, deleteMarkers, drawMyLogMakers }: useDrawMarkerResult = useDrawMarker();
    const { page, initPage, setLastCardRef }: useObserverPageResult = useObserverPage();
    const { myLogList, pushMyLogList, newMyLogList, filterMyLogList }: useMatjipListResult = useMatjipList();
    const { hasTags, hastagMyLogList, addHasTag, deleteHasTag, filterMyLogHasTag }: useHasTagResult = useHasTagList();

    const { mutate, isSuccess } = useMutation((log_sequence: number) => deleteMyLogData(userSequence, log_sequence));

    const myLogQuery = {
        myLogs: useQuery(['myLogs', page], () => getMyLogData(userSequence, page), { enabled: searchKey === "myLogs" && !keyword }),
        searchAll: useQuery(['matjipsSearch', page, keyword], () => getMyLogSearchAll({ user_sequence: userSequence, keyword, page }), { enabled: searchKey === "searchAll" && !!keyword }),
        searchName: useQuery(['matjipsSearchName', page, keyword], () => getMyLogSearchName({ user_sequence: userSequence, keyword, page }), { enabled: searchKey === "searchName" && !!keyword }),
        searchAddress: useQuery(['matjipsSearchAddress', page, keyword], () => getMyLogSearchAddress({ user_sequence: userSequence, keyword, page }), { enabled: searchKey === "searchAddress" && !!keyword }),
    };
    const { data, isLoading, isRefetching ,isError, error } = myLogQuery[searchKey];

    const deleteMyLog = (e: React.MouseEvent<HTMLDivElement>, log_sequence: number) => {
        e.stopPropagation();
        if(log_sequence){
            setLogId(log_sequence);
            mutate(log_sequence);
        }
    }
    const keywordSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const keyword: string = e.currentTarget.keyword.value;
    
        if (!keyword) {
            setSearchKey("myLogs");
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
        if(!isLogin || !userSequence) return handleUrl("/login");
        inActiveMapShow();
    }, [])

    useEffect(() => {
        if(isRefetching) return;
        if (data?.data) {
            if(page === 0) newMyLogList(data.data);
            else pushMyLogList(data.data);
        }
    }, [data, isRefetching])

    useEffect(() => {
        if(markers) deleteMarkers();
        if(map && viewList[0]) drawMyLogMakers(map, viewList);
    }, [map, viewList])

    useEffect(() => {
        if(isSuccess && logId) filterMyLogList(logId);
    }, [isSuccess, logId])
    
    useEffect(() => {
        setViewList(hasTags[0] ? hastagMyLogList : myLogList);
    }, [hasTags, hastagMyLogList, myLogList]);
    
    useEffect(() => {
        if(hasTags[0]) filterMyLogHasTag(myLogList);
    }, [hasTags, myLogList]);

    return (
        <MyLogSection>
            <handlerContext.Provider value={{ keywordSubmitHandler, addHasTag, deleteHasTag }}>
                <SearchBarContainer />
            </handlerContext.Provider>
            {mapShow ? (
                <MyPlaceMap mapRef={mapRef}/>
            ): (
                <MyLogList 
                    viewList={viewList} 
                    setLastCardRef={setLastCardRef}
                    deleteMyLog={deleteMyLog}
                />
            )}
            {!viewList.length && !isLoading && <NonSearchDiv>검색결과가 없습니다.<br></br> 다시 검색하거나 추가해주세요!</NonSearchDiv>}
            {isLoading && <LodingSpinner />}
            {isRefetching && <LodingSpinner />}
        </MyLogSection>
    )
}

export default MyLogContainer;