export const createMarker = (locationLatitude: number, locationLongitude: number, name: string) => {
    // 마커의 위치 좌표를 생성합니다.
    const latlng = new window.kakao.maps.LatLng(locationLatitude, locationLongitude);
    
    // 마커 이미지를 생성합니다.
    const imageSize = new window.kakao.maps.Size(30, 30);
    const imageOption = { offset: new window.kakao.maps.Point(30, 30) };
    const markerImage = new window.kakao.maps.MarkerImage("/assets/images/onlyLogo.png", imageSize, imageOption);
    
    // 마커를 생성합니다.
    const marker = new window.kakao.maps.Marker({
        position: latlng,
        title: name,
        image: markerImage,
    });
    
    return marker;
};