import axios from "axios";

const API = axios.create({ baseURL: "/api" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization =
      "Bearer " + JSON.parse(localStorage.getItem("profile")).token;
  }
  return req;
});
export const signin = (user) => API.post("/auth/signin", user);
export const signup = (user) => API.post("/auth/signup", user);
