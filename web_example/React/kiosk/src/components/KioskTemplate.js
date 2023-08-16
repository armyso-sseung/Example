import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KioskList from "./KioskList";
import KioskPayment from "./KioskPayment";
import {useState} from "react";

const KioskTemplate = () => {
    const [movieList, setMovieList] = useState([
        {
            id: 1,
            title: '콘크리트 유토피아',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230809_114%2F1691559109714F3JPy_JPEG%2Fmovie_image.jpg',
            price: 7000
        }, {
            id: 2,
            title: '밀수',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230619_73%2F1687140044980ToOXr_JPEG%2Fmovie_image.jpg',
            price: 9000
        }, {
            id: 3,
            title: '엘리멘탈',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230526_154%2F1685060493223yFUCL_JPEG%2Fmovie_image.jpg',
            price: 10000
        }, {
            id: 4,
            title: '비공식작전',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230802_198%2F1690967873095A7TxE_JPEG%2Fmovie_image.jpg',
            price: 5000
        }, {
            id: 5,
            title: '미션 임파서블',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230712_114%2F1689129069755T4lMx_JPEG%2Fmovie_image.jpg',
            price: 7000
        }, {
            id: 6,
            title: '더 문',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230803_160%2F1691042506911wyghG_JPEG%2Fmovie_image.jpg',
            price: 8000
        }, {
            id: 7,
            title: '명탐정 코난',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230726_299%2F1690352565828cofHi_JPEG%2Fmovie_image.jpg',
            price: 8000
        }, {
            id: 8,
            title: '바비',
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230711_49%2F16890414239045SmO6_JPEG%2Fmovie_image.jpg',
            price: 14000
        }
    ])

    const [itemList, setItemList] = useState([])

    const handleClickItem = (id) => {
        const movie = movieList.find(movie => movie.id === id)
        setItemList(itemList.concat(movie))
    }

    return (
        <div className="KioskTemplate">
            <Container maxWidth="xl">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                    <Grid container spacing={5}>
                        <Grid xl={8}>
                            <KioskList movieList={movieList} handleClickItem={handleClickItem} />
                        </Grid>
                        <Grid xl={4}>
                            <KioskPayment itemList={itemList} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}


export default KioskTemplate;