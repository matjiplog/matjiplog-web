import axios from "axios";
import { useEffect } from "react";
import { axiosEmailCheck, axiosLogin, axiosSignUp } from "../../Services/user-service";
import LodingSpinner from "../Common/Loding";
import { useNavigate } from "react-router-dom";

function KakaoLogin() { 
  const navigate = useNavigate();

  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const grant_type = "authorization_code";
  const client_id = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/kakaologin";

  useEffect(()=> {
    getToken().then((res)=>{
      getUserData(res.access_token).then(async res =>{
        console.log(res.data);
        const kakaoInfo = res.data;
        if(await axiosEmailCheck(kakaoInfo.kakao_account.email)){
          //로그인
          const res = await axiosLogin(kakaoInfo.kakao_account.email, kakaoInfo.id);
          if(res.status===200) return navigate("/");
          
        }
        else{
          //회원가입
          const userData= {
            id : kakaoInfo.kakao_account.email,
            email : kakaoInfo.kakao_account.email,
            password : kakaoInfo.id,
            gender : kakaoInfo.kakao_account.gender === "male" ? "M" : "F",
            name : kakaoInfo.kakao_account.profile.nickname,
            phoneNumber : "",
            nickname : kakaoInfo.kakao_account.profile.nickname,
            isSnsAccount : "K",
            imageSerial: "",
          }
          const {data, status, error} =  await axiosSignUp(userData)
          
          if(status === 200 && data.success){
            //로그인
            const res = await axiosLogin(userData.id, userData.password)
            console.log(res);
            if(res.status===200) return navigate("/");
          }
        }
      })
    });
  }, []);

  const getUserData = async (ACCESS_TOKEN : string) => {
    const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    })
    return kakaoUser;
  }
  
  const getToken = async () => {
    console.log("in")
    try{
      const res = await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }})
      console.log(res.data);
      return res.data;
    }
    catch (error: unknown) {
      console.log(error)
        throw error;
    }
  }

  return (
    <LodingSpinner/>
  );
}

export default KakaoLogin;

