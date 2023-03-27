import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

import SearchBarContainer from '../../Common/Container/SearchBar/SearchBarContainer';
import MyLogList from '../Presentational/MyLogList/MyLogList';
import LodingSpinner from '../../Common/Loding';
import MyPlaceMap from '../../Common/Presentational/MyPlaceMap/MyPlaceMap';

import { MyLogSection } from './MyLogStyle';

import { MapShowState } from '../../../types/store/mapShow';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';
import { useHasTagResult } from '../../../types/hook/common/useHasTag';
import { dropBarMenuState } from '../../../types/store/dropBar';
import { MyLogDto } from '../../../types/api/myLog';
import { useMyPlaceMapResult } from '../../../types/hook/useMyPlaceMap';
import { useDrawMarkerResult } from '../../../types/hook/useDrawMarker';

import { mapShowStore } from '../../../stores/mapShow';
import { dropBarMenuStore } from '../../../stores/dropBar';

import { handlerContext } from '../../../Contexts/handler';

import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useHasTagList } from '../../../Hooks/useHasTagList';
import { useMyPlaceMap } from '../../../Hooks/useMyPlaceMap';
import { useDrawMarker } from '../../../Hooks/useDrawMarker';

import { deleteMyLogData, getMyLogData } from '../../../Services/LogAPi';

function MyLogContainer(): JSX.Element {
    const locationHref = useNavigate();

    const [viewList, setViewList] = useState<MyLogDto[]>([]);
    const [logId, setLogId] = useState<number>(0);

    const { mapShow, inActiveMapShow }: MapShowState = mapShowStore();
    const { dropBarMenu }: dropBarMenuState = dropBarMenuStore();

    const { mapRef, map }: useMyPlaceMapResult = useMyPlaceMap(12);
    const { markers, deleteMarkers, drawMyLogMakers }: useDrawMarkerResult = useDrawMarker();
    const { page, initPage, setLastCardRef }: useObserverPageResult = useObserverPage();
    const { myLogList, pushMyLogList, newMyLogList, filterMyLogList }: useMatjipListResult = useMatjipList();
    const { hasTags, hastagMyLogList, addHasTag, deleteHasTag, filterMyLogHasTag }: useHasTagResult = useHasTagList();

    const { mutate, isSuccess } = useMutation((log_sequence: number) => deleteMyLogData(22, log_sequence));
    const { data, isLoading } = useQuery(['myLogList', page], () => getMyLogData(22, page));
    
    const handleMyLogDetailPage = (logSequence: number) => {
        locationHref(`/myLog/${logSequence}`)
    }
    const handleMyLogConfigPage = (logSequence: number) => {
        locationHref(`/createMyLog/${logSequence}`)
    }
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

        if(!keyword) return;
    }
    
    useEffect(() => {
        inActiveMapShow();
    }, [])

    useEffect(() => {
        if (data?.data) {
            if(page === 0) newMyLogList(data.data);
            else pushMyLogList(data.data);
        }
    }, [data])

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
                    handleMyLogDetailPage={handleMyLogDetailPage} 
                    deleteMyLog={deleteMyLog}
                />
            )}
            {isLoading && <LodingSpinner />}
        </MyLogSection>
    )
}

export default MyLogContainer;