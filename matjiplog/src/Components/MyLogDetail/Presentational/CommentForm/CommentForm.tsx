import { useRef } from 'react';

import EmogiPicker from '../../../Common/Presentational/EmogiPicker/EmogiPicker';

import { Form, ImogeDiv, Imoge, Input, SubmitBtn } from './CommentFormStyle';

import { CommentFormProps } from '../../../../types/props/MyLogDetail/CommentForm';


function CommentForm({ emojiActive, handleEmogiSelect, toggleEmogiActive, comment, onChangeHandler, submitPostComment }: CommentFormProps): JSX.Element {
    const commentRef = useRef<HTMLTextAreaElement>(null);

    return (
        <Form onSubmit={submitPostComment}>
            {emojiActive && <EmogiPicker handleEmogiSelect={handleEmogiSelect} />}
            <ImogeDiv>
                <Imoge onClick={toggleEmogiActive}/>
            </ImogeDiv>
            <Input 
                ref={commentRef}
                placeholder="댓글 달기..."
                name='comment' 
                onChange={onChangeHandler} 
                value={comment.comment}
            />
            <SubmitBtn 
                type="submit" 
                value="작성" 
            />
        </Form>
    )
}

export default CommentForm;