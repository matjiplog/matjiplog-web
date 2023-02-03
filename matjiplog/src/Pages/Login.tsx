import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Common/Footer";

function Login() {
  const navigate = useNavigate();
  return (
    <LoginDiv>
      <LogoDiv></LogoDiv>
      <WrapDiv>
        <ImgDiv></ImgDiv>
        <InputDiv>
          <IdDiv>
            <label>로그인</label>
            <LoginInput type="text"></LoginInput>
          </IdDiv>
          <PwDiv>
            <label>비밀번호</label>
            <LoginInput type="password"></LoginInput>
          </PwDiv>
          <LoginBtn type="submit" value="로그인"></LoginBtn>
          <SignUpBtn onClick={() => {
            return navigate("/signup", { replace: true});
          }}>Don't have an account?</SignUpBtn>
          <LineDiv>
            <hr style={{ color: "#b4b4b4", border: "1px solid", width: "100px" }}></hr>
            <p>or</p>
            <hr style={{ color: "#b4b4b4", border: "1px solid", width: "100px" }}></hr>
          </LineDiv>
          <SocialDiv>
            <KakaoDiv></KakaoDiv>
            <GoogleDiv></GoogleDiv>
            <NaverDiv></NaverDiv>
          </SocialDiv>
        </InputDiv>
      </WrapDiv>
      <SearchDiv>
        <SearchBtn>아이디 찾기</SearchBtn>
        <hr style={{ color: "#b4b4b4", border: "1px solid", width: "1px" }}></hr>
        <SearchBtn>비밀번호 찾기</SearchBtn>
      </SearchDiv>
      <Footer></Footer>
    </LoginDiv>
  );
}

const SearchBtn = styled.div`
  margin: 0 20px 0 20px;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;


const SocialDiv = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const KakaoDiv = styled.div`
  background-image: url("/assets/images/kakao.png");
  width: 38px;
  height: 40px;
  background-repeat : no-repeat;
  background-size : cover;
`;

const GoogleDiv = styled.div`
  background-image: url("/assets/images/google.png");
  width: 38px;
  height: 40px;
  background-repeat : no-repeat;
  background-size : cover;
`;

const NaverDiv = styled.div`
  background-image: url("/assets/images/naver.png");
  width: 38px;
  height: 40px;
  background-repeat : no-repeat;
  background-size : cover;
`;

const LineDiv = styled.div`
  margin-top : 40px;
  width: 274px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LoginInput = styled.input`
  width: 274px;
  height: 35px;
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  padding-left : 10px;
  margin-top: 5px;
`;

const LoginBtn = styled.input`
  margin-top : 20px;    
  width: 274px;
  height: 35px;
  background-color : #FF6701;
  border : solid #FF6701 1px;
  border-radius: 4px;
  color: white;
`;

const SignUpBtn = styled.button`
  margin-top : 15px;    
  width: 274px;
  height: 35px;
  background-color: white;
  border: none;
`;

const IdDiv = styled.div`
  margin-top : 40px;
  display: flex;
  flex-direction: column;
`;

const PwDiv = styled.div`
  margin-top : 10px;
  display: flex;
  flex-direction: column;
`;

const LogoDiv = styled.div`
  background-image: url("/assets/images/logo.png");
  width: 270px;
  height: 100px;
  background-repeat : no-repeat;
  background-size : cover;
  margin-top : 2%;
`;

const ImgDiv = styled.div`
  @media screen and (min-width: 830px){
    border : solid #b4b4b4 1px;
    border-radius: 6px;
    width: 350px;
    height: 500px;
    background-image: url("/assets/images/loginPicture.png");
    margin-top : 2%;
    margin-right : 10px;
  }
`;

const InputDiv = styled.form`
  border : solid #b4b4b4 1px;
  border-radius: 6px;
  width: 350px;
  margin-top : 2%;
  margin-left : 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapDiv = styled.div`
  display: flex;
`;
const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
`;


export default Login;