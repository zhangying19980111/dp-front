import requests from '../request'

export const getVolToProData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/va/${uid}/tapplications`, method: 'get', params: {status}})
}
export const getMyProjectData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/project/status/${uid}`, method: 'get', params: {status}})
}
