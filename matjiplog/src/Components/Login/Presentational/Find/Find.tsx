import { FindBtn, FindDiv } from "./style";

function Find() {
  return(
    <FindDiv>
        <FindBtn>아이디 찾기</FindBtn>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "1px" }}></hr>
        <FindBtn>비밀번호 찾기</FindBtn>
      </FindDiv>
  );
}