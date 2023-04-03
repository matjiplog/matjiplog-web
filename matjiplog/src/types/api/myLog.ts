import { UserDto } from './user';
import { MatjipDto } from './matjip';

export interface CommentDto{
    commentSequence: number,
    logSequence: number,
    userSequence: number,
    user: UserDto,
    content: string
}
export interface MyLogDto {
    content: string,
    custom: boolean,
    imageSerial: string,
    logSequence: number,
    matjip: MatjipDto,
    matjipSequence: number,
    orderingMethod: string,
    isPublic: boolean,
    ratingPortion: number,
    ratingService: number,
    ratingTaste: number,
    userSequence: number,
    user: UserDto,
    imageDetail: []
    likeCount: number,
    comments: CommentDto[]
}

export interface GetMyLogsResponse{
    data: MyLogDto[],
    success: boolean
}
export interface GetMyLogResponse{
    data: MyLogDto,
    success: boolean
}
export interface PostCommentResponse {
    commentSequence: number,
    logSequence: number,
    userSequence: number,
    content: string
}

export interface GetCommentResponse{
    data: CommentDto[],
    success: boolean
}

export interface PostCommentRequest {
    logSequence: number,
    userSequence: number,
    content: string
}

export interface PutIsPublicRequest {
    logSequence: number,
    userSequence: number,
    isPublic: boolean
}

export interface PostLogRequest{
    logSequence?: number,
    userSequence: number,
    isCustom: boolean,
    matjipSequence: number,
    content: string,
    ratingTaste: number,
    ratingPortion: number,
    ratingService: number,
    orderingMethod?: string,
    isPublic: boolean
}