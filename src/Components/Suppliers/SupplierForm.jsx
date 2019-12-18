import React, { useState, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import {useHistory} from 'react-router-dom'

import api from "../../Services/api";
import Input from "../../Itens/Input";
import Button from "../../Itens/Button";
import { maskCnpj, maskFone } from "../../Utils/Mask"


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function FormPropsTextFields(props) {
    const classes = useStyles();
    const [values, setValues] = useState(null);

    const handleSubmit = () => {
        console.log(values)
        api.post('/fornecedores/', values)
            .then(res => console.log(res))
    };

    const createInstance = () => {
        setValues({
            cod: '',
            corporate_name: '',
            cnpj: '',
            fone: '',
            public_place: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
        });
    };

    const loadInstance = (id) => {
        api.get(`/fornecedores/${id}`).then(res => {
            setValues(res.data)
        }, err => {
            console.log(err)
        });
    };

    const loadForm = (id) => {
        if (id) {
            loadInstance(id);
        } else {
            createInstance();
        }
        ;
    };

    const handleChange = fieldName => event => {
        console.log(fieldName)
        console.log(event.target.value)
        setValues({ ...values, [fieldName]: event.target.value });
    }

    useEffect((event) => {
        const id = props.match.params['id'] ? props.match.params['id'] : null
        loadForm(id); 
    }, []);

    let history = useHistory();

    function handleClick() {
        history.push("/lista-fornecedores");
    }

    return (
        values && <>
            <h3>Cadastro de fornecedores</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Input
                        id='cod'
                        label="Cód do fornecedor"
                        required
                        type="number"
                        columns={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('cod')}
                    />
                    <Input
                        id='corporate_name'
                        label="Razão sócial"
                        required
                        columns={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('corporate_name')}
                    />
                    <Input
                        id='cnpj'
                        label="CNPJ"
                        required
                        value={maskCnpj(values.cnpj)}
                        maxLength='18' 
                        columns={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('cnpj')}
                    />
                    <Input
                        id='fone'
                        label="Telefone"
                        required
                        maxLength='13'
                        value={maskFone(values.fone)}
                        columns={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('fone')}
                    />
                </Grid>

                <Grid container>
                    <Input
                        id='public_place'
                        label="Logradouro"
                        style={{ width: '100%', paddingRight: '20px' }}
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        onChange={handleChange('public_place')}
                    />
                    <Input
                        id='number'
                        label="Número"
                        type="number"
                        style={{ width: '100%', paddingRight: '20px' }}
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        onChange={handleChange('number')}
                    />
                    <Input
                        id='neighborhood'
                        label="Bairro"
                        style={{ width: '100%', paddingRight: '20px' }}
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        onChange={handleChange('neighborhood')}
                    />
                </Grid>

                <Grid container>
                    <Input
                        id='city'
                        label="Cidade"
                        required
                        style={{ width: '100%', paddingRight: '20px' }}
                        columns={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                        onChange={handleChange('city')}
                    />
                    <Input
                        id='state'
                        label="Estado"
                        required
                        style={{ width: '100%', paddingRight: '20px' }}
                        columns={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}
                        onChange={handleChange('state')}
                    />
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Button
                            variant='contained'
                            style={{ width: '100%', marginTop:'20px' }}
                            color='primary'
                            onClick={handleSubmit}
                            name='Salvar'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Button
                            variant='contained'
                            style={{ width: '100%', marginLeft: '20px', marginTop:'20px' }}
                            color='secondary'
                            onClick={handleClick}
                            name='Cancelar'
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    );
}