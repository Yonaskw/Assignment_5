import React from 'react';
import graphql from './graphql.js';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';

export default class ProductList extends React.Component {
    constructor() {
      super();
      this.state = { products: [] };
      this.createProduct = this.createProduct.bind(this);
      this.deleteProduct = this.deleteProduct.bind(this);
    }
  
    componentDidMount() {
      this.loadData();
    }
  
    async loadData() {
      const query = `query {
          productlist {
          _id
            id
            name
            price
            category
            imageURL
          }
        }`;
        const data = await graphql(query);
        if (data) {
          this.setState({ products: data.productlist });
        }
      }
  
    async createProduct(product) {
      const query = `mutation addprod($product: productInput!) {
              addprod(product: $product) {
                  id
              }
            }`;
            const data = await graphql(query, { product });
            if (data) {
              this.loadData();
            }
    }
    async deleteProduct(id) {
      const query = `mutation deleteProduct($id: Int!) {
        deleteProduct(id: $id)
      }`;
      const data = await graphql(query, { id });
      if (data) {
        this.loadData();
        alert('Product deleted product successfully!');

      }
    }
    render() {
        return (
    
          <div>
            <h1>My Company Inventory</h1>
            <h2>Showing all available products </h2>
            <hr />
            <ProductTable products={this.state.products} deleteProduct={this.deleteProduct} />
            <hr />
            <ProductAdd createProduct={this.createProduct} />
          </div>
        );
      }
    }