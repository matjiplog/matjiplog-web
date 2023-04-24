import { mainFont } from "../styles/fontColor";
import { MatjipDto } from '../types/api/matjip';
import { MyLogDto } from "../types/api/myLog";

export const createMarkerInfoWindow = (data : MyLogDto | MatjipDto) =>{
  let name: string, locationLatitude: number, locationLongitude: number, ratingPortion: number, ratingService: number, ratingTaste: number, address: string, commentsCount: number | null, category: string;
  
  if ("matjip" in data) { // Log
    name = data.matjip.name;
    locationLatitude = data.matjip.locationLatitude;
    locationLongitude = data.matjip.locationLongitude;
    ratingPortion = data.matjip.ratingPortion;
    ratingService = data.matjip.ratingService;
    ratingTaste = data.matjip.ratingTaste;
    address = data.matjip.address;
    commentsCount = data.comments.length;
    category = data.matjip.category;
  } else { // Matjip
    name = data.name;
    locationLatitude = data.locationLatitude;
    locationLongitude = data.locationLongitude;
    ratingPortion = data.ratingPortion;
    ratingService = data.ratingService;
    ratingTaste = data.ratingTaste;
    address = data.address;
    commentsCount = null;
    category = data.category;
  }

  const iwContentdiv = document.createElement("div");
  const commentsCountText = (commentsCount) ? `댓글 ${commentsCount}` : ` ${category}`;
  const starPoint = ratingPortion + ratingService + ratingTaste / 3;
  let iwContent =  `<div style="width: 220px; height: 130px; display: flex; flex-direction: column; padding: 10px;">` +
    `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">` +
      `<div style="width: 170px; height: 18px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 13px; font-weight: 700;">${name}</div>` +
    `</div>` +
    `<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">` +
      `<div style="display: flex; flex-direction: column;">` +
        `<div style="display: flex; align-items: center;">` +
          `<p style="font-weight: bold; font-size: 11px; margin-right: 3px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">별점 ${starPoint.toFixed(1)}</p>` +
          `<p style="font-weight: bold; font-size: 11px; margin-right: 3px; margin-left:5px overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">| ${commentsCountText}</p>` +
        `</div>` +
        `<div style="width: 130px; font-weight: bold; height: 15px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${address}</div>` +
        `<div style="width: 130px; font-weight: bold; height: 15px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; color: green;">053-255-0742</div>` +
      `</div>` +
      `<div style="width: 50px; height: 50px; background-repeat: no-repeat; background-size: cover; background-image: url(/assets/images/loginPicture.png)" ></div>`+
    `</div>` +
  `</div>`;
  iwContentdiv.innerHTML = iwContent;

  const navDiv = document.createElement("div");
    navDiv.style.display = "flex"
    navDiv.style.justifyContent = "space-around"; 
    navDiv.style.alignItems = "center"; 
    navDiv.style.marginBottom="5px"; 
    navDiv.style.marginTop = "-45px";
    navDiv.style.padding = "10px";

  const logNav = document.createElement("p");
    logNav.style.border = "1px solid #b4b4b4";
    logNav.style.borderRadius = "2px";
    logNav.style.width = "60px";
    logNav.style.height = "23px";
    logNav.style.display = "flex";
    logNav.style.justifyContent = "center";
    logNav.style.alignItems = "center";
    logNav.style.cursor = "pointer";
    logNav.style.fontWeight = "700";
    logNav.innerHTML = "로그";
  
  const detailNav = document.createElement("p");
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

  const windowOpenKakaoLoadFind = () => {
    window.open(`https://map.kakao.com/link/to/${name},${locationLatitude},${locationLongitude}`, "_blank");
  }

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

  return { iwContentdiv, navDiv, logNav, detailNav, kakaolodaNav };
}