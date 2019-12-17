import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import { useHistory } from "react-router-dom"

import api from "../../Services/api";
import Button from '../../Itens/Button'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24),
    createData('Ice cream sandwich', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
];

export default function SimpleTable() {
    const classes = useStyles();

    const handleDatas = () => {
        api.get('/fornecedores/?sort=-createdAt')
            .then(res => console.log(res))
    };

    let history = useHistory();

    function handleClick() {
        history.push('/cadastro-fornecedores')
    }

    return (
        <>
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item xs={11} sm={12} lg={11} md={11} xl={11}>
                    <h3>List de fornecedores</h3>
                </Grid>
                <Grid item xs={1} sm={12} lg={1} md={1} xl={1}>
                    {/* <Button color='primary'><AddIcon /></Button> */}
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={handleClick}
                        icon={<AddIcon/>}
                    />
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Cód.</TableCell>
                            <TableCell align="right">Razão social</TableCell>
                            <TableCell align="right">CNPJ</TableCell>
                            <TableCell align="right">Telefone</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
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
        </>
    );
}