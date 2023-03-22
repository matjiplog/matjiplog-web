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
    ratingPortion: number,
    ratingService: number,
    ratingTaste: number,
    userSequence: number,
}

export interface MyLogs{
    data: MyLogDto[],
    success: boolean
}
export interface MyLog{
    data: MyLogDto,
    success: boolean
}
export interface CommentData {
    logSequence: number,
    userSequence: number,
    content: string
}

export interface PostCommentResponse {
    commentSequence: number,
    logSequence: number,
    userSequence: number,
    content: string
}