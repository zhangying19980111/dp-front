import requests from '../request'
export const  getAllProjects = ({status}) => {
    return requests({url:`/api//teams`, method: 'get', params: {status}})
}

export const  getOneProject = ({id}) => {
    return requests({url:`/api//teams/${id}`, method: 'get'})
}