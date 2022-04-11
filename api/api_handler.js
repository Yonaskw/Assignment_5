require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const fs = require('fs');
const prod = require('./product');
const resolvers = {
    Query: {
      productlist: prod.productlist,
      product: prod.getProduct,
    },
    Mutation: {
      addprod: prod.addprod,
      updateProduct: prod.update,
      deleteProduct: prod.remove,
    },
  
  };
  const server = new ApolloServer({
    typeDefs: fs.readFileSync('schema.graphql', 'utf-8'),
    resolvers,
  });
  function installHandler(app) {
    const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
    console.log('CORS setting:', enableCors);
    server.applyMiddleware({ app, path: '/graphql', cors: enableCors });
   }
 
   module.exports = { installHandler };
