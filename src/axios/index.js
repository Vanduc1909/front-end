import axios from "axios";

const api = axios.create({
  baseURL: "https://tts-t10-1.onrender.com/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
