import { useState } from 'react';

import { useDrawMarkerResult } from '../../../types/hook/useDrawMarker';
import { MatjipDto } from '../../../types/api/matjip';

export const useDrawMarker = (): useDrawMarkerResult => {
    const [markers , setMarkers] = useState<any[]>([]);

    const deleteMarkers = () => {
        for (let i = 0; i < markers.length; i++){
            markers[i].setMap(null);
        } 
        setMarkers([]);
    }

    const drawMakers = (map: any, matjipList: MatjipDto[]) => {
        let markerArr: any[] = [];

        matjipList.forEach((value: MatjipDto) => {
            const { imageDetail, locationLatitude, locationLongitude, name }: MatjipDto = value;
            //마커 생성
            const latlng = new window.kakao.maps.LatLng( Number(locationLatitude) + Math.random() * 0.0005, Number(locationLongitude) + Math.random() * 0.0005 );
            // const imageSize = new window.kakao.maps.Size(50, 50)
            // const imageOption = {offset: new window.kakao.maps.Point(50, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            // const markerImage = new window.kakao.maps.MarkerImage("/assets/images/Matjip.png", imageSize, imageOption);
            const marker = new window.kakao.maps.Marker({ position: latlng, title : name });// 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            
            marker.setMap(map);
            markerArr.push(marker);
        })
        setMarkers((prev) => [...prev, ...markerArr]);
    }

    return { markers, deleteMarkers, drawMakers };
}