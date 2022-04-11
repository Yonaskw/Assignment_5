require('dotenv').config();
const { getDb, getNextSequence } = require('./Mongo.js');
async function productlist() {
    // return ProdDB;
    const db = getDb();
    //const filter = {};
    //if (status) filter.status = status;
    const products = await db.collection('products').find().toArray();
    return products;
  }  
  async function addprod(_, { product }) {
    const db = getDb();
    const newProduct = Object.assign({}, product);
    newProduct.id = await getNextSequence('products');
    const result = await db.collection('products').insertOne(newProduct);
    const savedproduct = await db.collection('products')
      .findOne({ _id: result.insertedId });
    return savedproduct;
  }
  async function getProduct(_, { id }) {
    const db = getDb();
    const product = await db.collection('products').findOne({ id });
    return product;
  }
async function update(_, {product}) {
  const db = getDb();
  const id = product.id;
  await db.collection('products').updateOne({ id }, { $set: product });
  const savedproduct = await db.collection('products')
  .findOne({ id });
  return savedproduct;
}
async function remove(_, {id}){
const db = getDb();
result = await db.collection('products').removeOne({ id });
return result.deletedCount === 1;
}
  module.exports = {
  addprod,
  productlist,
  getProduct,
  update,
  remove,
};