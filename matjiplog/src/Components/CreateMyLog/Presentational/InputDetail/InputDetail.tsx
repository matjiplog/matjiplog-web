import { DetailDiv, DetailImogeDiv, DetailImoge, DetailInput, SubmitBtn } from './InputDetailStyle';

import { useLogResult } from '../../../../types/hook/common/useLog';

import { useLog } from '../../../../Hooks/useLog';

function InputDetail(): JSX.Element {
    const { log, setLogStore }: useLogResult = useLog();
    const { content } = log;
    
    return (
        <DetailDiv>
            <DetailImogeDiv>
                <DetailImoge size={30} />
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