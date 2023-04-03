import { useEffect, useRef, useState } from 'react';

import { useMyPlaceMapResult } from '../types/hook/common/useMyPlaceMap';

declare global { interface Window { kakao: any;} }

export const useMyPlaceMap = (level: number): useMyPlaceMapResult => {
    const [map, setMap] = useState<any>(null);
    const [myPlace, setMyPlace] = useState<{ latitude: number, longitude: number }>({ latitude : 0, longitude : 0 });
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!mapRef?.current) return;

        const container = mapRef.current;
        const options = { center: new window.kakao.maps.LatLng(37.5665, 126.9780), level: level, };
        const map = new window.kakao.maps.Map(container, options);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords; //현재 위도 경도 구하기
                const latlng = new window.kakao.maps.LatLng( latitude, longitude );

                map.setCenter(latlng);
                setMyPlace({latitude: latitude, longitude: longitude });// 내 주변 위도 경도

                // const marker = new window.kakao.maps.Marker({ position: latlng, });
                // marker.setMap(map);
                setMap(map);//내 주변 지도 객체 저장
            },
            (error) => {
                console.error(error);
            }
        );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [mapRef.current]);

    return { mapRef, map, myPlace }
}