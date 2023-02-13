import { HiStar } from "react-icons/hi";

export const StarMake = (StarPoint: number) =>{
  var StarArray = [];
  for( var i=0; i<Math.floor(StarPoint); i++){
    StarArray.push(<HiStar size={20} color="#FFD400"></HiStar>)
  }
  for( var i=StarPoint; i<5; i++){
    StarArray.push(<HiStar size={20} color="#D3D3D3"></HiStar>)
  }
  return StarArray;
}