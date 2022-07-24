import requests from '../request'
export const  getAllProjects = () => {
    return requests({url:`/api/public/projects`, method: 'get'})
}
export const  getOneProject = ({id}) => {
    return requests({url:`/api/public/project/one`, method: 'get', params:{id}})
}