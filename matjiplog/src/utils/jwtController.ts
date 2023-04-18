import axios from "axios";

export const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

export const setAccessTokenInHeader = (accessToken: string) => {
    if(accessToken){
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
}

export const removeAccessTokenFromHeader = () => {
    delete axios.defaults.headers.common['Authorization'];
}

export const reloginWithRefreshToken = (refreschToken: string) => {
    if(refreschToken){

    }
}