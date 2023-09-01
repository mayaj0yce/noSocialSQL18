const connection = require('../config/connection');
const { User , Thought, Reaction } = require('../models');
// const { db } = require('mongodb');
// Needs needs to connect to the config connection 
const {
    getRandomUser,
    getRandomThought,
    getRandomReactions,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

 connection.on('error', (err) => err);
// Creates a connection to mongodb
connection.once('open', async () => {
    
    // Delete the entries in the collection
    // await User.deleteMany({});
    // await Thought.deleteMany({});
    // await Reaction.deleteMany({});

  let user = await connection.db.listCollections({ name: 'users' }).toArray();
  console.log(user)
  if (user.length) {
    await connection.dropCollection('users');
  }
  const result = await User.collection.insertMany(user);
  console.log(result);
  process.exit(0);
});

// // Creates a connection to mongodb
// connection.once('open', async () => {
//   // Delete the entries in the collection
//   await Thought.deleteMany({});
//   await Reaction.deleteMany({});

  // Empty arrays for randomly generated posts and comments
//   const reactions = [...getRandomReactions(10)];
//   const thought = [];

//   // Makes comments array
//   const makeThought = (text) => {
//     thought.push({
//       text,
//       username: getRandomUser().split(' ')[0],
//       comments: [comments[genRandomIndex(thought)]._id],
//     });
//   };

//   // Wait for the comments to be inserted into the database
//   await Thought.collection.insertMany(thoughts);

//   // For each of the comments that exist, make a random post of 10 words
//   comments.forEach(() => makePost(getRandomPost(10)));

//   // Wait for the posts array to be inserted into the database
//   await Post.collection.insertMany(thoughts);

  // Log out a pretty table for comments and posts
//   console.table(User);
//   console.table(Thought);
//   console.timeEnd('seeding complete 🌱');
//   process.exit(0);
// // });


// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
//   if (userCheck.length) {
//     await connection.dropCollection('users');
//   }
//   const result = await User.collection.insertMany(user);
//   console.log(result);
//   process.exit(0);
// });