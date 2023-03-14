import { CommentDiv, CommentImg, CommentInfo, CommentNickNameAndTime, CommentNickName, CommentTime, CommentContent } from './CommentListStyle'

import { CommentItemProps } from '../../../../types/props/MyLogDetail/CommentItem';

function CommentItem({ imgUrl, nickName, time, content }: CommentItemProps): JSX.Element {

    return (
        <CommentDiv>
            <CommentImg src={imgUrl}></CommentImg>
            <CommentInfo>
                <CommentNickNameAndTime>
                    <CommentNickName>{nickName}</CommentNickName>
                    <CommentTime>{time}</CommentTime>
                </CommentNickNameAndTime>
                <CommentContent>{content}</CommentContent>
            </CommentInfo>
        </CommentDiv>
    )
}

export default CommentItem;