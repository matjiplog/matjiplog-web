import { LikeCommentCountArticle, LikeDiv, CommentDiv, Like, LikeCount, Comment, CommentCount } from './LikeCommentCountStyle'

import { LikeCommentCountProps } from '../../../../types/props/MyLogDetail/LIkeCommentCount';
import { MyLogDto } from '../../../../types/api/myLog';

function LikeCommentCount({ data }: LikeCommentCountProps): JSX.Element {
    const { likeCount, comments }: MyLogDto = data;

    return (
        <LikeCommentCountArticle>
            <LikeDiv>
                <Like />
                <LikeCount>{likeCount}</LikeCount>
            </LikeDiv>
            <CommentDiv>
                <Comment />
                <CommentCount>{comments.length}</CommentCount>
            </CommentDiv>
        </LikeCommentCountArticle>
    )
}

export default LikeCommentCount;