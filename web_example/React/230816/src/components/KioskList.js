import {Box, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";


const KioskList = ({ movieList, handleClickMovie }) => {
    return (
        <Box className="KioskList" padding={2}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                {movieList.map(movie => (
                    <Grid xs={3} key={movie.id}>
                        <Card xs={{ maxWidth: 400 }} onClick={() => handleClickMovie(movie.id)}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={movie.path}
                                    alt={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" component="div" fontWeight="bold">
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body3" color="text.secondary">
                                        가격 : {movie.price} 원
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}


export default KioskList;