import { useState } from 'react';

import { useDrawMarkerResult } from '../types/hook/common/useDrawMarker';
import { MatjipDto } from '../types/api/matjip';
import { MyLogDto } from './../types/api/myLog';

import { createMarker } from './../utils/createMarker';
import { createMarkerInfoWindow } from '../utils/createMarkerInfoWindow';
import { useNavigateUrl } from './useNavigateUrl';

export const useDrawMarker = (): useDrawMarkerResult => {
    const { handleUrl } = useNavigateUrl();
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
            const { imageDetail, locationLatitude, locationLongitude, name, matjipSequence }: MatjipDto = value;
            const marker = createMarker(Number(locationLatitude), Number(locationLongitude), name);

            marker.setMap(map);
            markerArr.push(marker);

            const { iwContentdiv, navDiv, detailNav, kakaolodaNav } = createMarkerInfoWindow(value);

            detailNav.addEventListener("click", (e) => {
                handleUrl(`/matjip/${matjipSequence}`)
            });

            navDiv.append(detailNav, kakaolodaNav);
            iwContentdiv.append( navDiv );
        
            let infowindow = new window.kakao.maps.InfoWindow({
                content : iwContentdiv,
                removable : true,
            });

            window.kakao.maps.event.addListener(marker, 'click', function(){
                infowindow.open(map, marker);
            });
        })
        setMarkers((prev) => [...prev, ...markerArr]);
    }

    const drawMyLogMakers = (map: any, matjipList: MyLogDto[]) => {
        let markerArr: any[] = [];

        matjipList.forEach((value: MyLogDto) => {
            const { imageDetail, locationLatitude, locationLongitude, name, matjipSequence }: MatjipDto = value.matjip;
            const marker = createMarker(Number(locationLatitude), Number(locationLongitude), name);
            
            marker.setMap(map);
            markerArr.push(marker);

            const { iwContentdiv, navDiv, logNav, detailNav, kakaolodaNav } = createMarkerInfoWindow(value);

            logNav.addEventListener("click", (e) => {
                handleUrl(`/myLog/${value.logSequence}`)
            });
            detailNav.addEventListener("click", (e) => {
                handleUrl(`/matjip/${matjipSequence}`)
            });
            
            navDiv.append(logNav, detailNav, kakaolodaNav);
            iwContentdiv.append( navDiv );
        
            let infowindow = new window.kakao.maps.InfoWindow({
                content : iwContentdiv,
                removable : true,
            });

            window.kakao.maps.event.addListener(marker, 'click', function(){
                infowindow.open(map, marker);
            });
        })
        setMarkers((prev) => [...prev, ...markerArr]);
    }

    return { markers, deleteMarkers, drawMatjipMakers, drawMyLogMakers };
}