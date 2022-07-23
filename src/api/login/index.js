import requests from '../request'
import Qs from 'qs'

export const login = ({username, password}) => {
    return requests.request({url:'/login',   headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },method:'post', data:Qs.stringify({username, password})})
}
export const requestUserInfoById = ({role, uid}) => {
    return requests.request({url:`/api/${role}/vol/${uid}`,   headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },method:'get'})
}