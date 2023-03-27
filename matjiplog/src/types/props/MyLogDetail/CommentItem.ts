import { CommentDto } from './../../api/myLog';
export interface CommentItemProps {
    imgUrl : string,
    userSequence: number,
    data: CommentDto
    deleteCommnet: (comment_sequence: number) => void,
}
