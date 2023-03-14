import { DetailDiv, DetailImogeDiv, DetailImoge, DetailInput, SubmitBtn } from './InputDetailStyle';

function InputDetail(): JSX.Element {
    
    return (
        <DetailDiv>
          <DetailImogeDiv>
            <DetailImoge size={30} />
          </DetailImogeDiv>
          <DetailInput placeholder="내용 입력 ..." />
          <SubmitBtn type="submit" value="작성" />
        </DetailDiv>
      );
}

export default InputDetail;