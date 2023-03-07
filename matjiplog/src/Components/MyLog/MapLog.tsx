import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Map, MapMarker, useMap, ZoomControl } from "react-kakao-maps-sdk";
import Marker from "./Marker";
import { useLocation } from "react-router-dom";

const { kakao } = window;
function MapLog() {
  const data = [
    {
      name : "빙동댕",
      lat: 37.48763327875271000, 
      lng: 126.92834428619746000,
    },
    {
      name: "씨유 관악은천점",
      lat: 37.56687127932469400, 
      lng: 127.19422254703345000,
    },
    {
      name: "화해숲 스튜디오 북카페",
      lat: 37.57699018998907000, 
      lng: 127.18861296706800000,
    },
    {
      name: "더벤티 하남감일점",
      lat: 37.65280608824592000, 
      lng: 126.86594076329595000,
    },
  ];  
  const [selectMarker, setSelectMarker] = useState<number>();
  return(
    <MapLogWrap>
      <KakaoMap
        center={{ lat: 36.269209, lng: 127.719955 }}
        level={ 12 }
        maxLevel={ 13 }
        minLevel= { 3 }
      >
        
      {data.map((value, index): JSX.Element => {
        return <Marker
        key={`${value.lat}-${value.lng}`}
        index={index}
        name={value.name}
        lat={value.lat}
        lng={value.lng}
        onClick={()=>setSelectMarker(index)}
        isClicked={ selectMarker === index }
      ></Marker>
      })}
      <ZoomControl />
      </KakaoMap>
    </MapLogWrap>
  );
}

const KakaoMap = styled(Map)`
  width: 100%;
  height: 500px;
  margin: 0px 10% 0px 10%;
`;

const MapLogWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;



export default MapLog;