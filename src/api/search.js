<<<<<<< HEAD
// import apiUrl from '../apiConfig'
// import axios from 'axios'


// search function
// search function will be a post route, not creating something like a pet,
//but returning a req.body through its inputs that allows us to interpolate
//in the api call URL
// export const createSearch = (user, type, name) => {
//     console.log('user', user)
//     // console.log('this is newPet', newPet)
//     return axios({
//         url: `${apiUrl}/search/${type}/${name}`,
//         method: 'POST',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: { searchType: type, searchName:name  }
//     })
// }

// show function
// export const getOneSearch = () => {
//     return axios (`${apiUrl}/search/${type}/${name}/${id}`)
// }

// POST -> create function
// this is hitting the GET route /search/:type/:name
export const createSearch = ( user, type, name) => {
    return axios({
        url:`${apiUrl}/search/${type}/${name}`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {type, name}
    })
}
=======
>>>>>>> bba6e3abe37adc16a9cd810c01493d48f579799f
