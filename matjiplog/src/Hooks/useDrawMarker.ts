import { useState } from 'react';

import { useDrawMarkerResult } from '../types/hook/common/useDrawMarker';
import { MatjipDto } from '../types/api/matjip';
import { MyLogDto } from './../types/api/myLog';

import { createMarker } from './../utils/createMarker';

export const useDrawMarker = (): useDrawMarkerResult => {
    const [markers , setMarkers] = useState<any[]>([]);

    const deleteMarkers = () => {
        for (let i = 0; i < markers.length; i++){
            markers[i].setMap(null);
        } 
        setMarkers([]);
    }

    const drawMatjipMakers = (map: any, matjipList: MatjipDto[]) => {
        let markerArr: any[] = [];

        matjipList.forEach((value: MatjipDto) => {
            const { imageDetail, locationLatitude, locationLongitude, name }: MatjipDto = value;
            const marker = createMarker(Number(locationLatitude), Number(locationLongitude), name);
            
            marker.setMap(map);
            markerArr.push(marker);
        })
        setMarkers((prev) => [...prev, ...markerArr]);
    }

    const drawMyLogMakers = (map: any, matjipList: MyLogDto[]) => {
        let markerArr: any[] = [];

        matjipList.forEach((value: MyLogDto) => {
            const { imageDetail, locationLatitude, locationLongitude, name }: MatjipDto = value.matjip;
            const marker = createMarker(Number(locationLatitude), Number(locationLongitude), name);
            
            marker.setMap(map);
            markerArr.push(marker);
        })
        setMarkers((prev) => [...prev, ...markerArr]);
    }

    return { markers, deleteMarkers, drawMatjipMakers, drawMyLogMakers };
}