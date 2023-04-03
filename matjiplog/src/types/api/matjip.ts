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
    locationLatitude: number,
    locationLongitude: number,
    imageDetail: {}
}

export interface Matjip {
    matjipData: MatjipDto,
    matjipLikeListData: [
        {
            matjipSequence: number,
            userSequence: number,
        }
    ],
    success: boolean
}

export interface Matjips {
    matjipListData: MatjipDto[],
    matjipLikeListData: [
        {
            matjipSequence: number,
            userSequence: number,
        }
    ],
    success: boolean
}

export interface PostMatjipCustom {
    name: string,
    phoneNumber?: string,
    zipcode?: string,
    address?: string,
    roadAddress?: string,
    category?: string,
    locationLatitude: number,
    locationLongitude: number,
    isActive?: boolean,
    isApproval?: boolean,
    requester: number,
    managementSource?: string
}