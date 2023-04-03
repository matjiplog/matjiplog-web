import { DetailDiv, DetailImogeDiv, DetailImoge, DetailInput, SubmitBtn } from './InputDetailStyle';

import { InputDetailProps } from '../../../../types/props/CreateMyLog/InputDetail';
import { WriteLogState } from '../../../../types/store/writeLog';

import { writeLogStore } from '../../../../stores/writeLog';

function InputDetail({ setContentStore }: InputDetailProps): JSX.Element {
    const { content }: WriteLogState = writeLogStore();
    
    return (
        <DetailDiv>
            <DetailImogeDiv>
                <DetailImoge size={30} />
            </DetailImogeDiv>
            <DetailInput 
                name='content'
                placeholder="내용 입력 ..."
                value={content}
                onChange={setContentStore}
            />
            <SubmitBtn type="submit" value="작성" />
        </DetailDiv>
      );
}

export default InputDetail;