import { logData } from "./logDto";
import { imageDetailDto } from "./userDto";

export interface responseMatjip {
  totalPage: number,
  data : matjipDto,
  success : boolean,
}

export interface matjipDto {
  matjipSequence: number,
  name: string,
  phonenumber: string,
  ratingPortion: number,
  ratingService: number,
  ratingTaste: number,
  zipcode: string,
  address: string,
  roadAddress: string,
  category: string,
  locationLatitude: string,
  locationLongitude: string,
  likeCountOfMatjip : number
  logs : logData[],
  imageDetail : imageDetailDto[],

}

export interface matjipLikeData {
  matjipSequence : number,
  userSequence : number,
}