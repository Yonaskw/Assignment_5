import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './productList.jsx';
import Report from './Report.jsx';
import productEdit from './produtEdit.jsx';
import ProductImage from './Image.jsx';
const NotFound = () => <h1>Page Not Found</h1>;
export default function Contents() {
 return (
 <Switch>
 <Redirect exact from="/" to="/products" />
 <Route path="/products" component={ProductList} />
 <Route path="/edit/:id" component={productEdit} />
 <Route path="/image/:url" component={ProductImage} />

 <Route path="/report" component={Report} />
 <Route component={NotFound} />
 </Switch>
 );
}