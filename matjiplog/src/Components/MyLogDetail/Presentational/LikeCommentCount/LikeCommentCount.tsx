import { LikeCommentCountArticle, LikeDiv, CommentDiv, Like, LikeCount, Comment, CommentCount } from './LikeCommentCountStyle'

import { LikeCommentCountProps } from '../../../../types/props/MyLogDetail/LIkeCommentCount';

function LikeCommentCount({ likeCount, commnetCount }: LikeCommentCountProps): JSX.Element {

    return (
        <LikeCommentCountArticle>
            <LikeDiv>
                <Like />
                <LikeCount>{likeCount}</LikeCount>
            </LikeDiv>
            <CommentDiv>
                <Comment />
                <CommentCount>{commnetCount}</CommentCount>
            </CommentDiv>
        </LikeCommentCountArticle>
    )
}

export default LikeCommentCount;