export interface MatjipDto {
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
    imageDetail: {}
}

export interface Matjip {
    matjipData: MatjipDto,
    success: boolean
}

export interface Matjips {
    matjipListData: MatjipDto[],
    success: boolean
}