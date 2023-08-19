import {Box, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getMovieList, insertMovie} from "../apis/KioskApi";

const KioskRegisterComponent = () => {
    const [ movie, setMovie ] = useState({
        title: '',
        price: '',
    })

    const handleChangeTitle = (e) => {
        setMovie({...movie, title: e.target.value})
    }

    const handleChangePrice = (e) => {
        setMovie({...movie, price: e.target.value})
    }

    const handleClick = async (e) => {
        const result = await insertMovie(movie)
        if (!result) {
            alert(`저장에 실패하였습니다.`)
        }
        e.preventDefault()
    }


    return (
        <>
            <Box className="KioskRegisterComponenet" onSubmit={handleClick} component="form" sx={{
                '& > :not(style)': { display: 'flex', m: 1, width: '25ch' },
            }}>
                <TextField id="outlined-basic" label="제목" variant="outlined" value={movie.title} onChange={handleChangeTitle} />
                <TextField id="outlined-basic" label="가격" variant="outlined" value={movie.price} onChange={handleChangePrice} />
                <button type="submit">aa</button>
            </Box>
        </>
    )
}


export default KioskRegisterComponent;