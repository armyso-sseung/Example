import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { DataGrid } from '@mui/x-data-grid';
import React, {useState} from "react";
import * as PropTypes from "prop-types";


DataGrid.propTypes = {
    columns: PropTypes.any,
    rows: PropTypes.any
};
const RegisterComponent = () => {
    const [ movie, setMovie ] = useState({
        title: "",
        price: "",
        path: ""
    })

    const createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'TITLE', width: 130 },
        { field: 'price', headerName: 'PRICE', width: 130 },
    ];

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const handleChangeTitle = (e) => {

    }

    const handleChangePrice = (e) => {

    }

    const handleChangePath = (e) => {
        setMovie({...movie, path: e.target.value})
    }

    return (
        <Box className={"RegisterComponent"}>
            <Grid container>
                <Grid xs={6} padding={10}>
                    <img src={movie.path} width={220} />
                    <Box component={"form"}>
                        <TextField variant={"outlined"} label={"제목"} sx={{marginY: 1}} ></TextField>
                        <TextField variant={"outlined"} label={"가격"} sx={{marginY: 1}} ></TextField>
                        <TextField variant={"outlined"} label={"이미지"} sx={{marginY: 1}} value={movie.path} onChange={handleChangePath} ></TextField>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    )
}


export default RegisterComponent;