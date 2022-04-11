import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductTable({products, deleteProduct}) {
    // eslint-disable-next-line max-len
    const productRows = products.map(product => <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} index={product.id} />);
    const borderedStyle = { border: '1px solid black', padding: 6 };
    return (
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
  
          <tr>
            <th style={borderedStyle}>Name</th>
            <th style={borderedStyle}>Price</th>
            <th style={borderedStyle}>Category</th>
            <th style={borderedStyle}>ImageURL</th>
            <th style={borderedStyle}>Action</th>
            <th style={borderedStyle}>Delete</th>

          </tr>
        </thead>
        <tbody>
          {productRows}
        </tbody>
      </table>
    );
  }
  function ProductRow({product, deleteProduct, index}) {
    const borderedStyle = { border: '1px solid black', padding: 4 };
   // const { product } = props;
    return (
      <tr>
        <td style={borderedStyle}>{product.name}</td>
        <td style={borderedStyle}>
          $
          {product.price}
        </td>
        <td style={borderedStyle}>{product.category}</td>
        <td style={borderedStyle}><Link to={`/image/${encodeURIComponent(product.imageURL)}`}>View</Link></td>
        {/* <td style={borderedStyle}><a href={product.imageURL} target="_blank">View</a></td> */}
        <td style={borderedStyle}> <Link to={`/edit/${product.id}`}>Edit</Link></td>
        <td style={borderedStyle}><button type="button" onClick={() => { deleteProduct(index); }}>Delete</button></td>
      </tr>
    );
  }