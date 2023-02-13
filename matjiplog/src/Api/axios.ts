import axios from "axios";

const API = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "apllication/json",
  },
});

export default API;
