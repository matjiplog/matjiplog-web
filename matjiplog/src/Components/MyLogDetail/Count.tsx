import { LikeCommentCountArticle } from '../../styles/mylogDetail/area';
import { CommentCount, CommentIcon, LikeIcon, LikeCount, LikeDiv, CommentDiv } from '../../styles/mylogDetail/count';

interface Props {
    likeCount: number
    commnetCount: number
}

function Count({likeCount, commnetCount}: Props): JSX.Element {
    return <LikeCommentCountArticle>
        <LikeDiv>
            <LikeIcon />
            <LikeCount>{likeCount}</LikeCount>
        </LikeDiv>
        <CommentDiv>
            <CommentIcon />
            <CommentCount>{commnetCount}</CommentCount>
        </CommentDiv>
    </LikeCommentCountArticle>
}

export default Count;