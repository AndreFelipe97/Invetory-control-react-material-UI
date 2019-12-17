import React, { useState, useEffect, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from "@material-ui/core";

import api from "../../Services/api";
import Input from "../../Itens/Input";


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

    const handleSubmit = (values) => {
        api.post('/fornecedores/', values)
            .then(res => console.log(res))
    };

    const createInstance = () => {
        setValues({
            cod: null,
            corporate_name: null,
            cnpj: null,
            fone: null,
            public_place: null,
            number: null,
            neighborhood: null,
            city: null,
            state: null,
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

    useEffect(() => {
        const id = props.match.params['id'] ? props.match.params['id'] : null
        loadForm(id);
    }, []);

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
                        label="Cód do fornecedor"
                        required
                        columns={{ sm: 12, lg: 3, md: 3, xs: 3 }}
                        style={{width: '100%', paddingRight: '20px'}}
                        value={values['cod']}
                        onChange={handleChange('cod')}
                    />
                    <Input
                        label="Razão sócial"
                        required
                        columns={{ sm: 12, lg: 3, md: 3, xs: 3 }}
                        style={{width: '100%', paddingRight: '20px'}}
                        value={values['corporate_name']}
                        onChange={handleChange('corporate_name')}
                    /> 
                    <Input
                        label="CNPJ"
                        required
                        columns={{ sm: 12, lg: 3, md: 3, xs: 3 }}
                        style={{width: '100%', paddingRight: '20px'}}
                        value={values['cnpj']}
                        onChange={handleChange('cnpj')}
                    />
                    <Input
                        label="Telefone"
                        required
                        columns={{ sm: 12, lg: 3, md: 3, xs: 3 }}
                        style={{width: '100%', paddingRight: '20px'}}
                        value={values['fone']}
                        onChange={handleChange('fone')}
                    /> 
                </Grid>

                <Grid container>
                    <Input
                        label="Logradouro"
                        style={{width: '100%', paddingRight: '20px'}}
                        required
                        columns={{ sm: 12, lg: 4, md: 4, xs: 3 }}
                        value={values['public_place']}
                        onChange={handleChange('public_place')}
                    />
                    <Input
                        label="Número"
                        style={{width: '100%', paddingRight: '20px'}}
                        required
                        columns={{ sm: 12, lg: 4, md: 4, xs: 4 }}
                        value={values['number']}
                        onChange={handleChange('number')}
                    />
                    <Input
                        label="Bairro"
                        style={{width: '100%', paddingRight: '20px'}}
                        required
                        columns={{ sm: 12, lg: 4, md: 4, xs: 4 }}
                        value={values['neighborhood']}
                        onChange={handleChange('neighborhood')}
                    />
                </Grid>

                <Grid container>
                    <Input
                        label="Cidade"
                        // style={{ width: 550 }}
                        required
                        style={{width: '100%', paddingRight: '20px'}}
                        columns={{ sm: 12, lg: 6, md: 6, xs: 6 }}
                        value={values['city']}
                        onChange={handleChange('city')}
                    />
                    <Input
                        label="Estado"
                        // style={{ width: 550 }}
                        required
                        style={{width: '100%', paddingRight: '20px'}}
                        columns={{ sm: 12, lg: 6, md: 6, xs: 6 }}
                        value={values['state']}
                        onChange={handleChange('state')}
                    />
                </Grid>

                <Button variant="contained" color="primary" onClick={e => handleSubmit(values)}>
                    Salvar
                </Button>
            </form>
        </>
    );
}