import axios from "axios";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
requests.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("user-token");
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
 
  }
);
requests.interceptors.response.use(
  (res) => {
    const status = res.data.code;
    if (status == 20000) {
      return res.data;
    } else {
      const message = res.data.message;
      ElNotification({
        title: 'Error',
        message,
        type: 'error',
      })
      return Promise.reject(res.data);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default requests;
