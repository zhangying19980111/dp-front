import requests from './request'

export const getSiteData = ({appid}) => {
    return requests({url:'self/getsiteinfo', method: 'get', params: {appid}})
}

