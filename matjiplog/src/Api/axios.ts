import axios from "axios";

// withCredentials = true;

export const userAPI = axios.create({
  baseURL: process.env.REACT_APP_USER_URL,
  headers: {
    'Content-Type': "application/json",
  },
});

export const matjipAPI = axios.create({
  baseURL: process.env.REACT_APP_MATJIP_URL,
  headers: {
    'Content-Type': "application/json",
  },
});

export const logAPI = axios.create({
  baseURL: process.env.REACT_APP_LOG_URL,
  headers: {
    'Content-Type': "application/json",
  },
});

export const kakaoApi = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_ADDRESS,
  headers: {
    Authorization : `KakaoAK ${process.env.REACT_APP_KAKAO_REST_API_KEY}`
  }
})