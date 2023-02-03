import styled from "styled-components";

function Find() {
  return(
    <FindDiv>
        <FindBtn>아이디 찾기</FindBtn>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "1px" }}></hr>
        <FindBtn>비밀번호 찾기</FindBtn>
      </FindDiv>
  );
}

const FindBtn = styled.div`
  margin: 0 20px 0 20px;
`;

const FindDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;


export default Find;