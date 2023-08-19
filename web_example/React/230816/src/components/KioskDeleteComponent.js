import Grid from "@mui/material/Unstable_Grid2";
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const KioskDeleteComponent = ({ movieList, fetchDeleteMovie }) => {
    return (
        <Box className="KioskDeleteComponent" padding={2}>
            <Grid container rowSpacing={2} columnSpacing={2}>
                {movieList.map(movie => (
                    <Grid xs={3} key={movie.id}>
                        <Card xs={{ maxWidth: 400 }} onClick={() => fetchDeleteMovie(movie.id)}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={movie.path}
                                    alt={movie.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" component="div" fontWeight="bold" align={"center"}>
                                        {movie.title}
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


export default KioskDeleteComponent