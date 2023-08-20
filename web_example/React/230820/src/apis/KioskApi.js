import axios from "axios";


const BASE_PATH = `http://localhost:80/movieList`


export const getMovieList = async () => {
    const res = await axios.get(`${BASE_PATH}`)
    return res.data
}

export const deleteMovie = async (id) => {
    await axios.delete(`${BASE_PATH}/id`)
        .then(res => {console.log(`영화가 정상적으로 삭제되었습니다.`)})
        .catch(error => {console.error(error)})
}