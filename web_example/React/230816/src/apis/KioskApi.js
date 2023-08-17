import axios from "axios";


const BASE_PATH = `http://localhost:80`


export const getMovieList = async () => {
    const res = await axios.get(`${BASE_PATH}/movieList`)
    return res.data
}