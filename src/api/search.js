import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllSearch = (type, name) => {
    return axios(`${apiUrl}/search/${type}/${name}`)
}
//show function
export const getOneSearch = (type, name, id) => {
    return axios(`${apiUrl}/search/${type}/${name}/${id}`)
}
