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
  (error) => {}
);
requests.interceptors.response.use(
  (res) => {
    const status = res.data.code;
    if (status == 20000) {
      return res.data;
    } else {
      let message;
      const code = res.data.code
      switch (code) {
        case 40000:
          message = "资源不在收藏列表中";
          break;
        case 40001:
          message = "请先登录";
          break;
        case 40003:
          message = "权限不足";
          break;
        case 40004:
          message = "请求资源不存在";
          break;
        case 50000:
          message ="服务器开小差啦";
          break;
        case 50004:
          message = "网络请求失败";
          break;
        default:
          message =  res.data.message;
      }
      ElNotification({
        type: "error",
        message,
      });
      return Promise.reject(res.data);
    }
  },
  (error) => {
    ElNotification({
      type: "error",
      message: "服务关闭",
    });
    return Promise.reject(error);
  }
);

export default requests;
