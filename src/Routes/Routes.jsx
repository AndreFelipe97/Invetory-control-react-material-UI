import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

import { ProductForm, ProductList } from '../Components/Products/index';
import { SuppliersList, SupplierForm } from '../Components/Suppliers/index';
import { OrdersList, OrderForm } from '../Components/Orders/index';


export default props => (

    <Switch>
        <Route path='/lista-produtos' component={ProductList}/>
        <Route path='/cadastro-produtos' component={ProductForm}/>
        <Route path='/lista-fornecedores' component={SuppliersList} />
        <Route path='/cadastro-fornecedores' component={SupplierForm} />
        <Route path='/lista-pedidos' component={OrdersList}/>
        <Route path='/cadastro-pedidos' component={OrderForm}/>
        <Redirect from='*' to='/lista-fornecedores' />
    </Switch>
)