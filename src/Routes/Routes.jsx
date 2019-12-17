
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import SuppliersList from '../Components/Suppliers/SuppliersList'
import SupplierForm from "../Components/Suppliers/SupplierForm";


export default props => (
    <BrowserRouter>
        <Switch>
            <Route path='/lista-fornecedores' component={SuppliersList} />
            <Route path='/cadastro-fornecedores' component={SupplierForm} />
            <Redirect from='*' to='/fornecedores' />
        </Switch>
    </BrowserRouter>
)