export interface UserImageDetailDto {
    registerDate: string,
    imageSerial: string,
    name: string,
    path: string,
    type: string,
    registerId: number,
}

export interface UserDto {
    userSequence: number,
    id: string,
    name: string,
    nickname: string,
    imageSerial: string,
    imageDetail: UserImageDetailDto[]
}