import { AddCommentImoge, AddCommentImogeDiv, AddCommentInput, AddCommentSubmitBtn } from '../../styles/mylogDetail/addComment';
import { AddCommentArticle } from '../../styles/mylogDetail/area';

function AddComment(): JSX.Element {
    return <AddCommentArticle>
        <AddCommentImogeDiv>
            <AddCommentImoge />
        </AddCommentImogeDiv>
        <AddCommentInput placeholder="댓글 달기..." />
        <AddCommentSubmitBtn type="submit" value="작성" />
    </AddCommentArticle>
}

export default AddComment;