import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { MapAndInfo, MyPlaceMatjipInfo } from './style';

import MyPlaceMap from './MyPlaceMap/MyPlaceMap';
import RadiusForm from './RadiusForm/RadiusForm';
import MyPlaceMatjip from './MyPlaceMatjip/MyPlaceMatjip';

import { useMyPlaceMap } from './MyPlaceMap/useMyPlaceMap';
import { useObserverPage } from '../../../Hooks/useObserverPage';
import { useMatjipList } from '../../../Hooks/useMatjipList';
import { useRadius } from './RadiusForm/useRadius';
import { useDrawMarker } from './MyPlaceMatjip/useDrawMarker';

import { getMatjipMyPlace } from '../../../Services/matjipApi';


function MyPlaceMatjipContainer(): JSX.Element {
    const { mapRef, map, myPlace } = useMyPlaceMap();
    const { latitude, longitude }: { latitude: number, longitude: number} = myPlace;
    const { page, setPage, setLastCardRef } = useObserverPage();
    const { radius, inquireRadiusHandler } = useRadius();
    const { data, isLoading } = useQuery(["myPlace", latitude, longitude, radius, page], () => getMatjipMyPlace(latitude, longitude, radius, page));
    const { markers, setMarkers } = useDrawMarker(map, data);
    const { matjipList } = useMatjipList(data, isLoading, page);

    useEffect(() => {
        for (let i = 0; i < markers.length; i++) markers[i].setMap(null);
        setPage(0);
        setMarkers([]);
    }, [radius])

    return <MapAndInfo>
        <MyPlaceMap mapRef={mapRef}/>
        <MyPlaceMatjipInfo>
            <RadiusForm radius={radius} submitHandler={inquireRadiusHandler} />
            <MyPlaceMatjip isLoading={isLoading} matjipList={matjipList} setLastCard={setLastCardRef}/>
        </MyPlaceMatjipInfo>
    </MapAndInfo>
}

export default MyPlaceMatjipContainer;