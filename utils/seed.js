const connection = require('../config/connection');
const { User , Thought, Reaction } = require('../models');
const { db } = require('mongodb');
// Needs needs to connect to the config connection 
const {
    user,
    thought,
    // reaction,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

 connection.on('error', (err) => err);
// Creates a connection to mongodb
connection.once('open', async () => {


  let userdb = await connection.db.listCollections({ name: 'users' }).toArray();
  // console.log(userdb)
  if (userdb.length) {
    await connection.dropCollection('users');
  }

  const result = await User.collection.insertMany(user);
  console.log(result);


  let thoughtdb = await connection.db.listCollections({thought: 'thoughts'}).toArray();
  // console.log(thoughtdb)
  if (thoughtdb.length) {
    await connection.dropCollection('thoughts');
  }
  const thoughtresult = await Thought.collection.insertMany(thought);
  console.log(thoughtresult);
  

// let reactiondb = await connection.db.listCollections({ reaction: 'reaction'}).toArray();
// if (reactiondb.length) {
//   await connection.dropCollection('reaction');
// }

// const reactionresult = await Reaction.collection.insertMany(thought);
//   console.log(reactionresult);
//   process.exit(0);

});
    
    // Delete the entries in the collection
    // await User.deleteMany({});
    // await Thought.deleteMany({});
    // await Reaction.deleteMany({});