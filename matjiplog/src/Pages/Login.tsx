import style from "styled-components";


function Login() {
    return(
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
                    <LoginBtn>로그인</LoginBtn>
                    <SignUpBtn>Don't have an account?</SignUpBtn>
                    <LineDiv>
                        <hr style={ {color:"#b4b4b4" , border:"1px solid" , width:"100px"} }></hr>
                        <p>or</p>
                        <hr style={ {color:"#b4b4b4" , border:"1px solid" , width:"100px"} }></hr>
                    </LineDiv>
                </InputDiv>
            </WrapDiv>
        </LoginDiv>
    );
}

const LineDiv = style.div`
    margin-top : 40px;
    width: 274px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LoginInput = style.input`
    width: 274px;
    height: 35px;
    border : solid #b4b4b4 1px;
    border-radius: 6px;
    padding-left : 10px;
`;

const LoginBtn = style.button`
    margin-top : 10px;    
    width: 274px;
    height: 35px;
    background-color : #FF6701;
    border : solid #FF6701 1px;
    border-radius: 4px;
    color: white;
`;

const SignUpBtn = style.button`
    margin-top : 5px;    
    width: 274px;
    height: 35px;
    background-color: white;
    border: none;
`;

const IdDiv = style.div`
    margin-top : 40px;
    display: flex;
    flex-direction: column;
`;

const PwDiv = style.div`
    margin-top : 10px;
    display: flex;
    flex-direction: column;
`;

const LogoDiv = style.div`
    background-image: url("/assets/images/logo.png");
    width: 270px;
    height: 100px;
    background-repeat : no-repeat;
    background-size : cover;
    margin-top : 2%;
`;

const ImgDiv = style.div`
    border : solid #b4b4b4 1px;
    border-radius: 6px;
    width: 350px;
    height: 500px;
    background-image: url("/assets/images/loginPicture.png");
    margin-top : 2%;
    margin-right : 10px;
`;

const InputDiv = style.div`
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

const WrapDiv = style.div`
    display: flex;
`;
const LoginDiv = style.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;


export default Login;