import requests from '../request'

export const getVolToProData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/va/${uid}/tapplications`, method: 'get', params: {status}})
}
export const putVolToProStatus = ({role, uid, pid, action}) => {
    return requests({url:`/api/${role}/va/${pid}/applications/${uid}`, method: 'put', params: {action}})
}
export const getVolToProOneData = ({role, id}) => {
    return requests({url:`/api/${role}/va/${id}`, method: 'get'})
}

export const getVolToTeamData = ({uid, status}) => {
    return requests({url:`/api/teams/${uid}/applications`, method: 'get', params: {status}})
}
export const putVolToTeamStatus = ({id, action}) => {
    return requests({url:`/api/applications/team/${id}`, method: 'put', params: {action}})
}
export const getVolToTeamOneData = ({id}) => {
    return requests({url:`/api/applications/team/${id}`, method: 'get'})
}


export const getMyProjectData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/my/project/status/now/${uid}`, method: 'get', params: {status}})
}
export const getMyProjectOneData = ({id}) => {
    return requests({url:`/api/public/project/one`, method: 'get', params: {id}})
}

export const getApplyData = ({role, uid, status}) => {
    return requests({url:`/api/${role}/project/status/${uid}`, method: 'get', params: {status}})
}
export const getApplyOneData = ({id}) => {
    return requests({url:`/api/public/project/one`, method: 'get', params: {id}})
}

export const getMyVolData = ({uid, status}) => {
    return requests({url:`/api/teams/${uid}/applications`, method: 'get', params: {status}})
}
export const getMyVolOneData = ({role, uid}) => {
    return requests({url:`/api/${role}/project/status/${uid}`, method: 'get', params: {status}})
}


export const getProData = ({uid, status}) => {
    return requests({url:`api/admin/project/application/${uid}`, method: 'get', params: {status}})
}
export const verifyPro = ({projectId, action}) => {
    return requests({url:`/api/admin/project/verify`, method: 'put', params: {projectId, action}})
}
//项目详情
export const getProOneData = ({id}) => {
    return requests({url:`/api/public/project/one`, method: 'get', params: {id}})
}
export const getTeamData = ({status}) => {
    return requests({url:`/api/teams`, method: 'get', params: {status}})
}
//审核队伍
export const verifyTeam = ({id, action}) => {
    return requests({url:`/api/teams/${id}/verify`, method: 'put', params: { action}})
}
//队伍详情
export const getTeamOneData = ({id}) => {
    return requests({url:`/api/teams/${id}`, method: 'get',})
}
