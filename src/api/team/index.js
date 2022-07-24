import requests from '../request'
export const  getAllTeams = ({status}) => {
    return requests({url:`/api//teams`, method: 'get', params: {status}})
}

export const  getOneTeams = ({id}) => {
    return requests({url:`/api//teams/${id}`, method: 'get'})
}