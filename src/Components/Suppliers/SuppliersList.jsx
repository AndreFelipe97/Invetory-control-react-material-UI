import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add'
import { Button, Grid } from "@material-ui/core";
import {Link} from "react-router-dom"

import api from "../../Services/api";

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

    return (
        <>
            <Grid container
                direction="row"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item sm={12} lg={11} md={11} xl={12}>
                    <h3>List de fornecedores</h3>
                </Grid>
                <Grid item sm={12} lg={1} md={1} xl={12}>
                    <Link to="/cadastro-fornecedores">
                        <Button color='primary'><AddIcon /></Button>
                    </Link>
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