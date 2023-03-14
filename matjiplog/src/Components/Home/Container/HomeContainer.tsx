import { useMemo, useEffect } from 'react';
import { useQuery } from 'react-query';

import IntroImage from '../Presentational/IntroImage/IntroImage';
import IntroButton from '../Presentational/IntroButton/IntroButton';
import IntroTitle from '../Presentational/IntroTitle/IntroTitle';
import MyPlaceMap from '../Presentational/MyPlaceMap/MyPlaceMap';
import RadiusForm from '../Presentational/RadiusForm/RadiusForm';
import MyPlaceMatjip from '../Presentational/MyPlaceMatjip/MyPlaceMatjip';
import LodingSpinner from '../../Common/Loding';

import { IntroSection, MapAndInfo, MyPlaceMatjipInfo } from './HomeContainerStyle';

import { useImageSlideResult } from '../../../types/hook/common/useImageSlide';
import { useMyPlaceMapResult } from '../../../types/hook/useMyPlaceMap';
import { useObserverPageResult } from '../../../types/hook/common/useObserverpage';
import { useRadiusResult } from '../../../types/hook/useRadius';
import { useMatjipListResult } from '../../../types/hook/common/useMatjipList';
import { useDrawMarkerResult } from '../../../types/hook/useDrawMarker';

import { useImageSlide } from '../../../Hooks/useImageSlide';
import { useMyPlaceMap } from '../Presentational/useMyPlaceMap';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useRadius } from '../Presentational/useRadius';
import { useDrawMarker } from '../Presentational/useDrawMarker';

import { getMatjipMyPlace } from '../../../Services/matjipApi';

function HomeContainer(): JSX.Element {
    // Intro
    const introImageUrl = useMemo(() => {
        return [ "/assets/Home/introbg1.png", "/assets/Home/introbg2.png", "/assets/Home/introbg2.png" ];
    }, [])
    const { slideIndex, leftClick, rightClick }: useImageSlideResult = useImageSlide(introImageUrl.length-1);
    // MyPlace
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

    return (
        <>
            <IntroSection>
                <IntroButton leftClick={leftClick} rightClick={rightClick} />
                <IntroImage slideIndex={slideIndex} introImageUrl={introImageUrl}/>
                <IntroTitle />
            </IntroSection>
            <MapAndInfo>
                <MyPlaceMap mapRef={mapRef}/>
                <MyPlaceMatjipInfo>
                    <RadiusForm radius={radius} submitHandler={inquireRadiusHandler} />
                    <MyPlaceMatjip matjipList={matjipList} setLastCard={setLastCardRef}/>
                    {isLoading && <LodingSpinner />}
                </MyPlaceMatjipInfo>
            </MapAndInfo>
        </>
    )
}

export default HomeContainer;