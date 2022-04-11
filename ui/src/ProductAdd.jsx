import React from 'react';
import PropTypes from 'prop-types';
export default class ProductAdd extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const form = document.forms.productAdd;
      const product = {
      // eslint-disable-next-line max-len
        name: form.name.value, price: form.price.value, category: form.category.value, imageURL: form.imageURL.value,
      };
      // eslint-disable-next-line react/destructuring-assignment
      const { createProduct } = this.props;
      createProduct(product);
      form.name.value = '';
      form.price.value = '';
      form.category.value = '';
      form.imageURL.value = '';
    }
  
    render() {
      return (
        <form name="productAdd" onSubmit={this.handleSubmit}>
          <section>
            <h2>Add a new product to inventory</h2>
            <div>
              Name
              <input type="text" name="name" />
            </div>
            <div>
              Price
              <input type="text" name="price" />
            </div>
            <div>
              Category
              <select id="list" name="category">
                <option value="Shirts">Shirts</option>
                <option value="Jeans">Jeans</option>
                <option value="Jackets">Jackets</option>
                <option value="Sweaters">Sweaters</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            <div>
              Image URL
              <input type="text" name="imageURL" />
            </div>
  
          </section>
          <section>
            <button type="submit">Add Product</button>
          </section>
  
        </form>
      );
    }
  }

  ProductAdd.propTypes = {
    createProduct: PropTypes.func.isRequired,
  };