import { UserDto } from './user';
import { MatjipDto } from './matjip';

export interface LogImageDetailDto {
    registerDate: string,
    imageSerial: string,
    name: string,
    path: string,
    type: string,
    registerId: number
}
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
    imageDetail: LogImageDetailDto[],
    likeCount: number,
    likeByUser: boolean,
    comments: CommentDto[]
}
export interface GetMyLogsResponse {
    data: MyLogDto[],
    success: boolean
}
export interface GetMyLogResponse {
    data: MyLogDto,
    success: boolean
}
export interface GetCommentResponse{
    data: CommentDto[],
    success: boolean
}
export interface PostCommentResponse {
    commentSequence: number,
    logSequence: number,
    userSequence: number,
    content: string
}
export interface PostLogResponse {
    data: MyLogDto,
    success: boolean,
    totalPages: number,
}
export interface PutLogIsPublicResponse {
    success: boolean
}
export interface PutLogInfoResponse {
    totalPages: number,
    data: {
        logSequence: number,
        userSequence: number,
        isCustom: boolean,
        matjipSequence: number,
        content: string,
        ratingTaste: number,
        ratingPortion: number,
        ratingService: number,
        orderingMethod: string,
        isPublic: boolean
    },
    success: boolean,
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
export interface PutLogInfoRequest {
    logSequence: number,
    userSequence: number,
    isCustom: boolean,
    matjipSequence: number,
    content: string,
    ratingTaste: number,
    ratingPortion: number,
    ratingService: number,
    orderingMethod?: string,
    isPublic: boolean,
    isActive: boolean
}
export interface GetMyLogSearchRequest {
    user_sequence: number,
    keyword: string,
    page: number,
}