import { useEffect } from "react";
import { useNavigateUrl } from "../Hooks/useNavigateUrl";
import { userStore } from "../stores/user";
import { UserState } from "../types/store/user";
import LodingSpinner from "../Components/Common/Loding";
import axios from "axios";
import { axiosEmailCheck, axiosLogin, axiosSignUp } from "../Services/user-service";
import { setAccessTokenInHeader } from "../utils/jwtController";

function GoogleLogin() {
  const { isLogin, setUserSequence, setIsLogin }: UserState = userStore();
  const { handleUrl } = useNavigateUrl();
  
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const grant_type = "authorization_code";
  // const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const CLIENT_ID = "342265387464-l63hoeittmlehh04f2efoaohenn8gphp.apps.googleusercontent.com"
  const REDIRECT_URI = "http://localhost:3000/googlelogin";
  // const CLIENT_SECRET = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
  const CLIENT_SECRET = "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"
  useEffect(()=> {
    getToken().then((res)=>{
      getUserData(res.access_token).then(async (res) =>{
        console.log(res);
        const googleInfo = res.data;
        if(await axiosEmailCheck(googleInfo.email)){
          //로그인
          const { res, accessToken, userSequence } = await axiosLogin(googleInfo.email, googleInfo.id);
          if(res.status===200) {
            setAccessTokenInHeader(accessToken);
            setUserSequence(userSequence);
            setIsLogin(true);
            handleUrl("/");        
          };
          
        }
        else{
          //회원가입
          const userData= {
            id : googleInfo.email,
            email : googleInfo.email,
            password : googleInfo.id,
            gender : "",
            name : googleInfo.name,
            phoneNumber : "",
            nickname : googleInfo.name,
            isSnsAccount : "G",
            imageSerial: "",
          }
          const {data, status, error} =  await axiosSignUp(userData)
          
          if(status === 200 && data.success){
            //로그인
            const { res, accessToken, userSequence } = await axiosLogin(googleInfo.email, googleInfo.id);
            if(res.status===200) {
              setAccessTokenInHeader(accessToken);
              setUserSequence(userSequence);
              setIsLogin(true);
              handleUrl("/");        
            };
          }
        }
      })
      })
  }, []);

  const getUserData = async (ACCESS_TOKEN : string) => {
    const GoogleUser = await axios.get(`https://www.googleapis.com/userinfo/v2/me`, {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    })
    return GoogleUser;
  }
  
  const getToken = async () => {
    console.log("in")
    try{
      const res = await axios.post(`https://oauth2.googleapis.com/token?code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&grant_type=${grant_type}`, {
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

export default GoogleLogin;