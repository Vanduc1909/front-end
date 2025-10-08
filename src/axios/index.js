import axios from "axios";

const api = axios.create({
  baseURL: "https://tts-t10.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
