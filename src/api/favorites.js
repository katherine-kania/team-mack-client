import apiUrl from '../apiConfig'
import axios from 'axios'


// INDEX -> all Favorites
export const getAllFavorites = (user) => {
    return axios({
        url: `${apiUrl}/favorites`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}
// POST -> favorites
// export const addFavoriteSearch = (user, favoriteId, newComment) => {
//     console.log('user', user)
//     console.log('this is newPet', newComment)
//     return axios({
//         url: `${apiUrl}/search/${favoriteId}`,
//         method: 'POST',
//         data: { favorite: {
//             type: "performers",
//             seatGeekId: favorite.id
//         } }
//     })
// }
// SHOW -> one Favorite
export const getOneFavorite = (id) => {
    return axios (`${apiUrl}/favorites/${id}`)
}

// DELETE -> remove a Favorite
export const removeFavorite = (user, id) => {
    // console.log('user', user)
    return axios({
        url: `${apiUrl}/favorites/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}