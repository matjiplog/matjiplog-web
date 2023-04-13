import { matjipDto } from "./matjipDto";
import { imageDetailDto, ResponseLogUserDto } from "./userDto";

export interface responseLogDto {
  totalPages : number,
  totalElements : number,
  data : logData[],
}

export interface logData {
  logSequence : number,
  userSequence : number,
  user : ResponseLogUserDto,
  matjipSequence : number,
  content : string,
  rating_taste : number,
  ratring_portion : number,
  rating_service : number,
  ordering_method : string,
  imageSerial : string,
  imageDetail : imageDetailDto[],
  likeCount : number,
  matjip : matjipDto,
  comments : commentDto[],
}

export interface commentDto {
  commentSequence : number,
  logSequence : number,
  userSequence: number,
  user : ResponseLogUserDto,
  content : string,
}

export interface requestCommentDto {
  logSequence : number,
  userSequence : number,
  content : string,
}

// export interface logLikeDto {
//   logSequence : number,
//   userSequence : number,
// }