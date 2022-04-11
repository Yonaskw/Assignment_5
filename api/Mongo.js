require('dotenv').config();
const { MongoClient } = require('mongodb');
const url = process.env.DB_URL || 'mongodb+srv://cs648:sdsucs648@cs648cluster.pv7s5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
let db;
async function connectToDb() {
    const client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();
    console.log('Connected to MongoDB at', url);
    db = client.db();
  }
  async function getNextSequence(name) {
    const result = await db.collection('counters').findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false },
    );
    return result.value.current;
  }

  function getDb() {
    return db;
  }

  module.exports = { connectToDb, getNextSequence, getDb };