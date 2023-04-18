import { CommentDiv, CommentImg, CommentInfo, CommentNickNameAndTime, CommentNickName, CommentContent, DeleteCommentButton, TrashButton } from './CommentListStyle'

import { CommentItemProps } from '../../../../types/props/MyLogDetail/CommentItem';
import { CommentDto } from '../../../../types/api/myLog';
import { UserDto } from '../../../../types/api/user';

function CommentItem({ imgUrl, userSequence, data, deleteCommnet }: CommentItemProps): JSX.Element {
    const { commentSequence, user, content }: CommentDto = data;
    const { userSequence: commentUserSequence, nickname }: UserDto = user;
    
    return (
        <CommentDiv>
            <CommentImg src={imgUrl}></CommentImg>
            <CommentInfo>
                <CommentNickNameAndTime>
                    <CommentNickName>{nickname}</CommentNickName>
                </CommentNickNameAndTime>
                <CommentContent>{content}</CommentContent>
            </CommentInfo>
            <DeleteCommentButton active={Number(userSequence) === commentUserSequence ? 1 : 0} onClick={() => deleteCommnet(commentSequence) }> 
                <TrashButton />
            </DeleteCommentButton>
        </CommentDiv>
    )
}

export default CommentItem;