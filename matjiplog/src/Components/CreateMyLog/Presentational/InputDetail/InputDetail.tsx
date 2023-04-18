import EmogiPicker from '../../../Common/Presentational/EmogiPicker/EmogiPicker';

import { DetailDiv, DetailImogeDiv, DetailImoge, DetailInput, SubmitBtn } from './InputDetailStyle';

import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function InputDetail(): JSX.Element {
    const { log, emojiActive, setLogStore, handleEmogiSelect,toggleEmogiActive }: useLogResult = useLog();
    const { content } = log;
    
    return (
        <DetailDiv>
            {emojiActive && <EmogiPicker handleEmogiSelect={handleEmogiSelect} />}
            <DetailImogeDiv>
                <DetailImoge size={30} onClick={toggleEmogiActive}/>
            </DetailImogeDiv>
            <DetailInput 
                name='content'
                placeholder="내용 입력 ..."
                value={content}
                onChange={setLogStore}
            />
            <SubmitBtn type="submit" value="작성" />
        </DetailDiv>
    );
}

export default InputDetail;