import { MatjipDto } from './matjip';

export interface MyLogDto {
    content: string,
    custom: boolean,
    imageSerial: string,
    logSequence: number,
    matjip: MatjipDto,
    matjipSequence: number,
    orderingMethod: string,
    public: boolean,
    ratingProtion: number,
    ratingService: number,
    ratingTaste: number,
    userSequence: number,
}

export interface MyLogs{
    data: MyLogDto[],
    success: boolean
}
