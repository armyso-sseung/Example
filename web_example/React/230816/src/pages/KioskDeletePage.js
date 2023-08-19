import Layout from "../components/layout/Layout";
import KioskRegisterComponent from "../components/KioskRegisterComponent";
import KioskDeleteComponent from "../components/KioskDeleteComponent";
import {useEffect, useState} from "react";
import {deleteMovie, getMovieList} from "../apis/KioskApi";


const KioskDeletePage = () => {
    const [ movieList, setMovieList ] = useState([])

    useEffect(() => {
        fetchGetMovieList()
    }, [])

    const fetchGetMovieList = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    const fetchDeleteMovie = async (id) => {
        const result = await deleteMovie(id)
        if (!result) {
            alert(`삭제에 실패했습니다.`)
        }

        fetchGetMovieList()
    }


    return (
        <Layout>
            <KioskDeleteComponent movieList={movieList} fetchDeleteMovie={fetchDeleteMovie} />
        </Layout>
    )
}


export default KioskDeletePage;