import requests from '../request'
export const  getAllTeams = ({status}) => {
    return requests({url:`/api/public/teams`, method: 'get', params: {status}})
}

export const  getOneTeams = ({id}) => {
    return requests({url:`/api/public/teams/${id}`, method: 'get'})
}