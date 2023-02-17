import axios from "axios";

export const userAPI = axios.create({
  baseURL: process.env.REACT_APP_USER_RUL,
  headers: {
    "Content-Type": "apllication/json",
  },
});

export const matjipAPI = axios.create({
  baseURL: process.env.REACT_APP_MATJIP_RUL,
  headers: {
    "Content-Type": "apllication/json",
  },
});

