import {
  DetailDiv,
  DetailImoge,
  DetailImogeDiv,
  DetailInput,
  SubmitBtn,
} from "../../styles/createMylog/detail";

function CreateMyLogDetail(): JSX.Element {
  return (
    <DetailDiv className="detailDiv">
      <DetailImogeDiv>
        <DetailImoge size={30} />
      </DetailImogeDiv>
      <DetailInput placeholder="내용 입력 ..." />
      <SubmitBtn type="submit" value="작성" />
    </DetailDiv>
  );
}
export default CreateMyLogDetail;
