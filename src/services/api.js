import axios from "axios";

export default api = axios.create({
  baseURL: "http://192.168.0.12:3001",
});

/* 
 api.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("codeburger:userData");
  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;
  return config;
});  */

//export default apiCodeBurger;
/* 192.168.0.12 */