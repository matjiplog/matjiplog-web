import { useEffect } from 'react'
import axios from 'axios';

import LodingSpinner from '../Components/Common/Loding';

import { axiosEmailCheck, axiosLogin, axiosSignUp } from '../Services/user-service';

import { handleError } from '../utils/handleError';
import { setAccessTokenInHeader } from '../utils/jwtController';

import { userStore } from '../stores/user';

import { UserState } from '../types/store/user';

import { useNavigateUrl } from '../Hooks/useNavigateUrl';

interface NaverUserInfo {
	email: string;
	gender: string ;
	id: string;
	mobile: string;
	mobile_e164: string;
	name: string;
	nickname: string;
	profile_image: string;
}

export default function NaverLogin(): JSX.Element {
	const { setUserSequence, setIsLogin }: UserState = userStore();
	const { handleUrl } = useNavigateUrl();
	
	const getToken = (): string | void => {
		if(!window.location.href.includes('access_token')) return handleUrl("/login");;

		const token: string = window.location.href.split('=')[1].split('&')[0];
		return token;
	}

	const getUserInfoByNaver = async (token: string | null) => {
		if(!token) return;

		try{
			const { data, status } = await axios.get('https://openapi.naver.com/v1/nid/me', { headers: {'Authorization': 'Bearer ' + token}})
			if(status === 200 && data?.message){
				checkIsSignUp(data.response);
			}
			else{
				alert("failed getUserInfo by naver!");
				return handleUrl("/login");
			}
		}
		catch(error: unknown){
			handleError(error);
			handleUrl("/login");
			throw error;
		}
	}

	const checkIsSignUp = async (userInfo : NaverUserInfo) => {
		const { email } = userInfo;

		if(!email) return;

		try{
			const isSignUp = await axiosEmailCheck(email);

			if(isSignUp){ // 로그인
				doLogin(userInfo);
			}else{ // 회원가입
				doSignUp(userInfo);
			}
		}
		catch(error: unknown){
			handleError(error);
			handleUrl("/login");
			throw error;
		}
	}

	const doLogin = async (userInfo: NaverUserInfo) => {
		const { email, id } = userInfo;

		if(!email || !id) return;

		try{
			const { res, accessToken, userSequence } = await axiosLogin(email, id);

			if(res?.status === 200 && accessToken && userSequence){
				setAccessTokenInHeader(accessToken);
				setUserSequence(userSequence);
				setIsLogin(true);
				handleUrl("/");
			}
			else{
				alert("failed login by naver!");
				return handleUrl("/login");
			}
		}
		catch(error: unknown){
			handleError(error);
			handleUrl("/login");
			throw error;
		}
	}

	const doSignUp = async (userInfo: NaverUserInfo) => {
		const { id, email, gender, name, mobile, nickname, profile_image } = userInfo;

		if(!id || !email || !gender || !name || !mobile || !nickname) return;
		
		try{
			const { data, status } =  await axiosSignUp({
				id: email,
				email : email,
				password : id,
				gender : gender,
				name : name,
				nickname : nickname,
				phoneNumber : mobile.replaceAll("-", ""),
				isSnsAccount : "N",
				imageSerial : "",
			});
			if(status === 200 && data?.success){
				doLogin(userInfo);
			}
			else{
				alert("failed sginUp by naver");
				return handleUrl("/login");
			}
		}
		catch(error: unknown){
			handleError(error);
			handleUrl("/login");
			throw error;
		}
		
	}

	useEffect(() => {
		const token = getToken();
		if(token) getUserInfoByNaver(token);
	}, [])

    return(
        <>
			<LodingSpinner />
		</>
    )
}
