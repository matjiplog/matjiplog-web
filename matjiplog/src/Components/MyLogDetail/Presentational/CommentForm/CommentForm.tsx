import { Form, ImogeDiv, Imoge, Input, SubmitBtn } from './CommentFormStyle';

import { CommentFormProps } from '../../../../types/props/MyLogDetail/CommentForm';

function CommentForm({ onChangeHandler, submitPostComment }: CommentFormProps): JSX.Element {
    
    return (
        <Form onSubmit={submitPostComment}>
            <ImogeDiv>
                <Imoge />
            </ImogeDiv>
            <Input placeholder="댓글 달기..." name='comment' onChange={onChangeHandler}/>
            <SubmitBtn type="submit" value="작성" />
        </Form>
    )
}

export default CommentForm;