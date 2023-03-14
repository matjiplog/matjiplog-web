import { Form, ImogeDiv, Imoge, Input, SubmitBtn } from './CommentFormStyle';

function CommentForm(): JSX.Element {

    return (
        <Form>
            <ImogeDiv>
                <Imoge />
            </ImogeDiv>
            <Input placeholder="댓글 달기..." />
            <SubmitBtn type="submit" value="작성" />
        </Form>
    )
}

export default CommentForm;