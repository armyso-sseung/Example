import axios from "axios";


const BASE_PATH = `http://localhost:80`


export const getMovieList = async () => {
    const res = await axios.get(`${BASE_PATH}/movieList`)
    return res.data
}

export const getMovie = async (id) => {
    const res = await axios.get(`${BASE_PATH}/movieList/${id}`)
    return res.data
}

export const insertMovie = async (movie) => {
    movie.path = 'https://thumb.ac-illust.com/73/7387030e5a5600726e5309496353969a_t.jpeg'

    let result = false
    await axios.post(`${BASE_PATH}/movieList`, movie)
        .then(res => result = true)
        .catch(error => {console.error(error)})

    return result
}

export const saveMovie = async (movie) => {
    let result = false
    await axios.put(`${BASE_PATH}/movieList`, movie)
        .then(res => result = true)
        .catch(error => {console.error(error)})

    return result
}

export const deleteMovie = async (id) => {
    let result = false
    await axios.delete(`${BASE_PATH}/movieList/${id}`)
        .then(res => result = true)
        .catch(error => {console.error(error)})

    return result
}