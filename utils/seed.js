const connection = require('../config/connection');
const { User } = require('../models');
const { db } = require('mongodb');

connection.on('error', (err) => err);

connection.once('open', async () => {
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
  const result = await User.collection.insertMany(userdata);
  console.log(result);
  process.exit(0);
});