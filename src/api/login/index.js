import requests from './request'

export const login = (params) => {
    return requests.post({url:'/login', params})
}