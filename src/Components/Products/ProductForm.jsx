import React, {useState, useEffect} from 'react'
import {makeStyles, Grid} from "@material-ui/core";
import {useHistory} from 'react-router-dom'

import api from '../../Services/api'
import Input from '../../Itens/Input'
import Button from '../../Itens/Button'

const useStyles = makeStyles(theme => ({
    root: {
        '&.MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        }
    }
}))

export default props => {
    const classes = useStyles();
    const [values, setValues] = useState(null);

    const handleSubmit = (values) => {
        console.log(values)
        api.post('/produtos/', values)
            .then(res => console.log(res))
    }

    const createInstance = () => {
        setValues({
            name: null,
            supplier: null,
            amount: null,
            buy: null,
            sale: null,
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
        history.push("/lista-produtos");
    }

    return (
        values && <>
            <h3>Cadastro de produtos</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                >
                    <Input
                        id='name'
                        label="Nome"
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('name')}
                    />
                    <Input
                        id='supplier'
                        label="Fornecedor"
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('supplier')}
                    />
                    <Input
                        id='amount'
                        label="Quantidade"
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        style={{ width: '100%', paddingRight: '20px' }}
                        onChange={handleChange('amount')}
                    />
                </Grid>

                <Grid container>
                    <Input
                        id='buy'
                        label="Valor de compra"
                        style={{ width: '100%', paddingRight: '20px' }}
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        onChange={handleChange('buy')}
                    />
                    <Input
                        id='sale'
                        label="Valor de venda"
                        style={{ width: '100%', paddingRight: '20px' }}
                        required
                        columns={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}
                        onChange={handleChange('sale')}
                    />
                </Grid>
                <Grid container>
                    <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Button
                            variant='contained'
                            style={{ width: '100%', marginTop:'20px' }}
                            color='primary'
                            onClick={e => handleSubmit(values)}
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
    )
}