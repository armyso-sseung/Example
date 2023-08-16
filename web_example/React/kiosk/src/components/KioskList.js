import Grid from "@mui/material/Unstable_Grid2";
import React, {useState} from "react";
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const KioskList = ({movieList, handleClickItem}) => {
    return (
        <Grid container rowSpacing={7} columnSpacing={3} style={{ marginLeft: "1.5em", marginTop: "1em" }}>
            {movieList.map(movie => (
                <Grid xl={3} key={movie.id}>
                    <Card sx={{ maxWidth: 420 }} onClick={() => handleClickItem(movie.id)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={movie.path}
                                alt={movie.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    가격 : {movie.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}


export default KioskList;