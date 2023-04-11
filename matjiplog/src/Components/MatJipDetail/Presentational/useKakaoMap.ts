import { useEffect, useRef, useState } from 'react';

const { kakao } = window;

//맛집디테일에 사용되는 정적 지도
export const useKakaoMap = (lat : number, lng: number, name : string) => {
  const [map, setMap] = useState<any>(null);
  const mapRef = useRef<HTMLDivElement>(null); 
  const position = new window.kakao.maps.LatLng(lat, lng);

  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: position,
      level: 4,
      zoomable: false,
      draggable: false,
    };
    var mapTypeControl = new kakao.maps.MapTypeControl();
    var zoomControl = new kakao.maps.ZoomControl();

    const map = new window.kakao.maps.Map(container, options);
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    setMap(map);
    const marker = new window.kakao.maps.Marker({
      position : position,
      title : name,
      clickable: true,
    })
    marker.setMap(map);

    // window.kakao.maps.event.addListener(marker, 'click', function(){
    //   infowindow.open(map, marker);
    // });

    //지도 사이즈 변경이 중심좌표를 유지하는 함수
    const handleResize = () => {
      map.setCenter(position);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mapRef.current])


  return { mapRef, map }
}