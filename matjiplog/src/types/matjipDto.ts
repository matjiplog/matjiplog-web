export interface matjipDto {
  matjipSequence: number,
  name: string,
  phonenumber: string,
  ratingTaste: number,
  ratingPortion: number,
  ratingService: number,
  zipcode: string,
  address: string,
  roadAddress: string,
  category: string,
  locationLatitude: string,
  locationLongitude: string,
  imageDetail : {}
}

export interface matjipLikeData {
  matjipSequence : number,
  userSequence : number,
}