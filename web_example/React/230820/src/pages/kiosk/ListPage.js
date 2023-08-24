import BaseLayout from "../../components/layout/BaseLayout";
import ListComponent from "../../components/kiosk/ListComponent";
import {deleteMovie, getMovieList} from "../../apis/KioskApi";
import {useEffect, useState} from "react";


const ListPage = () => {
    const [ movieList, setMovieList ] = useState()

    useEffect(() => {
        fetchGetMovieList()
    }, [])

    const fetchGetMovieList = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    const fetchDeleteMovie = async (id) => {
        await deleteMovie(id)
        fetchGetMovieList()
    }

    return (
        <BaseLayout>
            <ListComponent movieList={movieList} fetchDeleteMovie={fetchDeleteMovie} />
        </BaseLayout>
    )
}


export default ListPage;