import axios from 'axios';
import { Notification } from 'element-ui'

const requests = axios.create({
    baseURL:"/api",
    timeout:5000
})
requests.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('user-token')
    if(token){
        config.headers.token = token
    }
    return config
},(error) => {

})
requests.interceptors.response.use((res) => {
    if (res.status && res.status == 200) {
        nprogress.done();
        return res.data;
    }
    return Promise.reject(res);
   
}, (error) => {
    let message = ''
    if (error.response) {
        let res = error.response;
        switch (res.status) {
            case 301:
                break;
            case 400:
                message = '资源不在收藏列表中'
                break;
            case 401:
                message = '请先登录'
                break;
            case 403:
                message = '权限不足'
                break;
            case 404:
                message = '请求资源不存在'
                break;
            case 408:
                break;
            case 500:
                message = res.data.error||'服务器开小差啦'
                break;
            case 504:
                message = '网络请求失败'
                break;
            default:
                message = res.msg
        }
    } else {
        message = '请检查网络连接状态'
    }
    Notification({
        type: 'error',
        title: error.response.status,
        message,
        delay: 1000
    })
    return Promise.reject(error)
})

export default requests;