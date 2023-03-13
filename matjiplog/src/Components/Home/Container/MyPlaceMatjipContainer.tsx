import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { MapAndInfo, MyPlaceMatjipInfo } from './MyPlaceMatjipContainerStyle';

import { useMyPlaceMapResult } from '../../../types/hook/useMyPlaceMap';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useRadiusResult } from '../../../types/hook/useRadius';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';
import { useDrawMarkerResult } from '../../../types/hook/useDrawMarker';

import MyPlaceMap from '../Presentational/MyPlaceMap/MyPlaceMap';
import RadiusForm from '../Presentational/RadiusForm/RadiusForm';
import MyPlaceMatjip from '../Presentational/MyPlaceMatjip/MyPlaceMatjip';
import LodingSpinner from '../../Common/Loding';

import { useMyPlaceMap } from '../Presentational/MyPlaceMap/useMyPlaceMap';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useRadius } from '../Presentational/RadiusForm/useRadius';
import { useDrawMarker } from '../Presentational/MyPlaceMatjip/useDrawMarker';

import { getMatjipMyPlace } from '../../../Services/matjipApi';

function MyPlaceMatjipContainer(): JSX.Element {
    const { mapRef, map, myPlace }: useMyPlaceMapResult = useMyPlaceMap();
    const { page, initPage, setLastCardRef }: useObserverPageResult = useObserverPage();
    const { radius, inquireRadiusHandler }: useRadiusResult = useRadius();
    const { matjipList, pushMatjipList, newMatjipList }: useMatjipListResult = useMatjipList();
    const { markers, deleteMarkers, drawMakers }: useDrawMarkerResult = useDrawMarker();
    const { data, isLoading } = useQuery(["myPlace", myPlace.latitude, myPlace.longitude, radius, page], () => getMatjipMyPlace(myPlace.latitude, myPlace.longitude, radius, page));
    // const sequenceSet = new Set(matjipList.map(matjip => matjip.matjipSequence));
    // console.log(sequenceSet);

    useEffect(() => {
        if(page) initPage();
    }, [radius])

    useEffect(() => {
        if(markers) deleteMarkers();
    }, [radius])

    useEffect(() => {
        if (data?.matjipListData) {
            if(page === 0) newMatjipList(data.matjipListData);
            else pushMatjipList(data.matjipListData);
        }
    }, [data])

    useEffect(() => {
        if (data?.matjipListData) drawMakers(map, data.matjipListData);
    }, [data])

    return <MapAndInfo>
        <MyPlaceMap mapRef={mapRef}/>
        <MyPlaceMatjipInfo>
            <RadiusForm radius={radius} submitHandler={inquireRadiusHandler} />
            <MyPlaceMatjip matjipList={matjipList} setLastCard={setLastCardRef}/>
            {isLoading && <LodingSpinner />}
        </MyPlaceMatjipInfo>
    </MapAndInfo>
}

export default MyPlaceMatjipContainer;