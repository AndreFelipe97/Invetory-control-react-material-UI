import React, {useState, useEffect, Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

import api from "../../Services/api";


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
        setValues({...values, [fieldName]: event.target.value});
    }

    useEffect(() => {
        const id = props.match.params['id'] ? props.match.params['id'] : null
        loadForm(id);
    }, []);

    return (
        <Fragment>
            <h3>Cadastro de fornecedores</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="codigo"
                        label="Cód do fornecedor"
                        required
                        // value={values['cod']}
                        onChange={handleChange('cod')}
                    />
                    <TextField
                        id="corporateName"
                        label="Razão sócial"
                        required
                        style={{width: 450}}
                        fullWidth
                        margin="normal"
                        // value={values['corporate_name']}
                        onChange={handleChange('corporate_name')}
                    />
                    <TextField
                        id="cnpj"
                        label="CNPJ"
                        required
                        // value={values['cnpj']}
                        onChange={handleChange('cnpj')}
                    />
                    <TextField
                        id="fone"
                        label="Telefone"
                        required
                        // value={values['fone']}
                        onChange={handleChange('fone')}
                    />
                </div>
                <div>
                    <TextField
                        id="publicPlace"
                        label="logradouro"
                        style={{width: 440}}
                        fullWidth
                        required
                        // value={values['public_place']}
                        onChange={handleChange('public_place')}
                    />
                    <TextField
                        id="number"
                        label="Número"
                        required
                        // value={values['number']}
                        onChange={handleChange('number')}
                    />
                    <TextField
                        id="neighborhood"
                        label="Bairro"
                        style={{width: 440}}
                        fullWidth
                        required
                        // value={values['neighborhood']}
                        onChange={handleChange('neighborhood')}
                    />
                </div>
                <div>
                    <TextField
                        id="city"
                        label="Cidade"
                        style={{width: 550}}
                        fullWidth
                        required
                        // value={values['city']}
                        onChange={handleChange('city')}
                    />
                    <TextField
                        id="state"
                        label="Estado"
                        style={{width: 550}}
                        fullWidth
                        required
                        // value={values['state']}
                        onChange={handleChange('state')}
                    />
                </div>
                <Button variant="contained" color="primary" onClick={e => handleSubmit(values)}>
                    Salvar
                </Button>
            </form>
        </Fragment>
    );
}