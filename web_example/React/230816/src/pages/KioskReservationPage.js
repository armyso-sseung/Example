import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import KioskList from "../components/KioskList";
import KioskPayment from "../components/KioskPayment";
import {getMovieList} from "../apis/KioskApi";
import {useEffect, useState} from "react";
import Layout from "../components/layout/Layout";


const KioskReservationPage = () => {
    const [movieList, setMovieList] = useState([])
    const [cartList, setCartList] = useState([])

    useEffect( () => {
        getComMovieList()
    }, [])

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

    const getComMovieList = async () => {
        const data = await getMovieList()
        setMovieList(data)
    }

    return (
        <Layout>
            <Grid container>
                <Grid xs={8}>
                    <KioskList movieList={movieList} handleClickMovie={handleClickMovie} />
                </Grid>
                <Grid xs={4}>
                    <KioskPayment cartList={cartList} handleClickAmount={handleClickAmount} />
                </Grid>
            </Grid>
        </Layout>
    )
}


export default KioskReservationPage;