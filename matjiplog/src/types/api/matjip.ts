export interface MatjipDto {
    matjipSequence: number,
    name: string,
    phonenumber: string,
    phoneNumber?: string,
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
    totalElements: number,
    totalPages: number,
    success: boolean,
}

export interface Matjips {
    data: MatjipDto[],
    totalElements?: number,
    totalPages: number,
    success: boolean,
}

export interface PostMatjipCustomRequest {
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