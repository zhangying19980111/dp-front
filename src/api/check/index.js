import requests from '../request'

export const getVolToProData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/va/${uid}/tapplications`, method: 'get', params: {status}})
}
export const getMyProjectData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/project/status/${uid}`, method: 'get', params: {status}})
}
//获取项目table
export const getProData = ({uid, status}) => {
    return requests({url:`api/admin/project/application/${uid}`, method: 'get', params: {status}})
}
//审核项目
export const verifyPro = ({projectId, action}) => {
    return requests({url:`/api/admin/project/verify`, method: 'get', params: {projectId, action}})
}
//获取队伍table
export const getTeamData = ({uid, status}) => {
    return requests({url:`/api/teams`, method: 'get', params: {uid, status}})
}