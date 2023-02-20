import axios from "axios";

const API = axios.create({
  baseURL: "http://61.85.38.39:60548",
  headers: {
    'Content-Type': "application/json",
  },
});

export default API;
