import { mainFont } from "../../../styles/fontColor";
import { MyLogDto } from "../../../types/api/myLog";
import { matjipDto } from "../../../types/matjipDto";

const { kakao } = window;

export const createMarkerInfoWindow = (logData : MyLogDto) =>{
  
  const starPoint = (logData.matjip.ratingPortion + logData.matjip.ratingService + logData.matjip.ratingTaste)/3;

  const windowOpenKakaoLoadFind = () =>{
    window.open(`https://map.kakao.com/link/to/${logData.matjip.name},${logData.matjip.locationLatitude},${logData.matjip.locationLongitude}`, "_blank");
  }

  const logClick = () =>{
    
  };

  const matjipClick = (e: any) =>{
    console.log(e);
    e.preventDefault();
    
    
  };

  var iwContentdiv = document.createElement("div");
  
  var iwContent =  `<div style="width: 220px; height: 130px; display: flex; flex-direction: column; padding: 10px;">` +
  `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">` +
    `<div style="width: 170px; height: 18px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 13px; font-weight: 700;">${logData.matjip.name}</div>` +
  `</div>` +
  `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">` +
    `<div style="display: flex; flex-direction: column;">` +
      `<div style="display: flex; align-items: center;">` +
        `<p style="font-weight: bold; font-size: 11px; margin-right: 3px;">별점 ${starPoint.toFixed(1)}</p>` +
        `<p style="font-weight: bold; font-size: 11px; margin-right: 3px; margin-left:5px">| 리뷰 15</p>` +
      `</div>` +
      `<div style="width: 130px; font-weight: bold; height: 15px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${logData.matjip.address}</div>` +
      `<div style="width: 130px; font-weight: bold; height: 15px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: green;">053-255-0742</div>` +
    `</div>` +
    `<div style="width: 50px; height: 50px; background-repeat: no-repeat; background-size: cover; background-image: url(/assets/images/loginPicture.png)" ></div>`+
  `</div>` +
`</div>`;

  iwContentdiv.innerHTML = iwContent;
 
  const navDiv = document.createElement("div");
    navDiv.style.display = "flex"
    navDiv.style.justifyContent = "space-between"; 
    navDiv.style.alignItems = "center"; 
    navDiv.style.marginBottom="5px"; 
    navDiv.style.marginTop = "-45px";
    navDiv.style.padding = "10px";

  const logNav = document.createElement("a");
    logNav.href = `/myLog/${logData.logSequence}`;
    logNav.style.border = "1px solid #b4b4b4";
    logNav.style.borderRadius = "2px";
    logNav.style.width = "60px";
    logNav.style.height = "23px";
    logNav.style.display = "flex";
    logNav.style.justifyContent = "center";
    logNav.style.alignItems = "center";
    logNav.style.cursor = "pointer";
    logNav.style.fontWeight = "700";
    logNav.innerHTML = "맛집보기";
    logNav.onclick = matjipClick;
    

  const detailNav = document.createElement("a");
    // detailNav.onclick = logClick;
    detailNav.href = `/search/${logData.matjip.matjipSequence}`;
    detailNav.style.border = "1px solid #b4b4b4";
    detailNav.style.borderRadius = "2px";
    detailNav.style.width = "60px";
    detailNav.style.height = "23px";
    detailNav.style.display = "flex";
    detailNav.style.justifyContent = "center";
    detailNav.style.alignItems = "center";
    detailNav.style.cursor = "pointer";
    detailNav.style.fontWeight = "700";
    detailNav.innerHTML = "상세보기";

  
  const kakaolodaNav = document.createElement("div");
    kakaolodaNav.style.border = "1px solid #b4b4b4";
    kakaolodaNav.style.borderRadius = "2px";
    kakaolodaNav.style.width = "60px";
    kakaolodaNav.style.height = "23px";
    kakaolodaNav.style.display = "flex";
    kakaolodaNav.style.justifyContent = "center";
    kakaolodaNav.style.alignItems = "center";
    kakaolodaNav.style.cursor = "pointer";
    kakaolodaNav.style.fontWeight = "700";
    kakaolodaNav.style.backgroundColor = `${mainFont}`
    kakaolodaNav.style.color = "white";
    kakaolodaNav.innerHTML = "길찾기";
    kakaolodaNav.onclick = windowOpenKakaoLoadFind;

  navDiv.append(
    logNav,
    detailNav,
    kakaolodaNav,
  )

  iwContentdiv.append(
    navDiv,
  );

  // 인포윈도우를 생성합니다
  var infowindow = new window.kakao.maps.InfoWindow({
    content : iwContentdiv,
    removable : true,
  });

  // window.kakao.maps.event.addListener(marker, 'click', function(){
  //   infowindow.open(map, marker);
  // });

  return infowindow;
}