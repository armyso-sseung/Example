import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KioskList from "./KioskList";
import KioskPayment from "./KioskPayment";
import {useState} from "react";


const KioskTemplate = () => {
    const [movieList, setMovieList] = useState([
        {
            id: 1,
            title: '오펜하이머',
            price: 8000,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230726_155%2F1690353875207a86z3_JPEG%2Fmovie_image.jpg'
        }, {
            id: 2,
            title: '콘크리트 유토피아',
            price: 9500,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230809_114%2F1691559109714F3JPy_JPEG%2Fmovie_image.jpg'
        }, {
            id: 3,
            title: '달짝지근해',
            price: 6000,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230816_214%2F1692185565673YbJJU_JPEG%2Fmovie_image.jpg'
        }, {
            id: 4,
            title: '밀수',
            price: 12000,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230619_73%2F1687140044980ToOXr_JPEG%2Fmovie_image.jpg'
        }, {
            id: 5,
            title: '엘리멘탈',
            price: 7000,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230526_154%2F1685060493223yFUCL_JPEG%2Fmovie_image.jpg'
        }, {
            id: 6,
            title: '메가로돈2',
            price: 15000,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230728_167%2F1690508662761pE0sB_JPEG%2Fmovie_image.jpg'
        }, {
            id: 7,
            title: '보호자',
            price: 9900,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230728_258%2F1690536381115NVmpa_JPEG%2Fmovie_image.jpg'
        }, {
            id: 8,
            title: '바다 탐험대',
            price: 11000,
            path: 'https://search.pstatic.net/common?type=f&size=206x290&quality=100&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20230706_90%2F1688622203374bF2o0_JPEG%2Fmovie_image.jpg'
        }
    ])

    const [cartList, setCartList] = useState([])

    const handleClickMovie = (id) => {
        const cart = cartList.find(cart => cart.id === id)

        if (!cart) {
            const movie = movieList.find(movie => movie.id === id)
            setCartList(cartList.concat({...movie, count:1}))
            return
        }

        setCartList(cartList.map(cart => cart.id === id ? { ...cart, count: cart.count + 1 } : cart))
    }

    const handleClickAmount = (id, amount) => {
        const cart = cartList.find(cart => cart.id === id)
        if ((cart.count + amount) <= 0) {
            setCartList((cartList.filter(cart => cart.id !== id)))
            return
        }

        setCartList(cartList.map(cart => cart.id === id ? { ...cart, count: cart.count + amount } : cart))
    }

    return (
        <Container maxWidth="lx" className="KioskTemplate">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                <Grid container>
                    <Grid xs={8}>
                        <KioskList movieList={movieList} handleClickMovie={handleClickMovie} />
                    </Grid>
                    <Grid xs={4}>
                        <KioskPayment cartList={cartList} handleClickAmount={handleClickAmount} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}


export default KioskTemplate;