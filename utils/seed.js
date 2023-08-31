const connection = require('../config/connection');
const { User , Thought, Reactions } = require('../models');
// const { db } = require('mongodb');
// Needs needs to connect to the config connection 
const {
    getRandomUser,
    getRandomThought,
    getRandomReactions,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({});
    await Thought.deleteMany({});
    await Reactions.deleteMany({});


});
//   require user and thoughts through models 

//   const random Reactions Thoughts Users(RTU) req data for this
//   //module export above const (RTU)

//   const empty array for RTU
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

const connection = require('../config/connection');
const { Post, Comment } = require('../models');
const {
  getRandomName,
  getRandomComments,
  getRandomPost,
  genRandomIndex,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await Post.deleteMany({});
  await Comment.deleteMany({});

  // Empty arrays for randomly generated posts and comments
  const comments = [...getRandomComments(10)];
  const posts = [];

  // Makes comments array
  const makePost = (text) => {
    posts.push({
      text,
      username: getRandomName().split(' ')[0],
      comments: [comments[genRandomIndex(comments)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Comment.collection.insertMany(comments);

  // For each of the comments that exist, make a random post of 10 words
  comments.forEach(() => makePost(getRandomPost(10)));

  // Wait for the posts array to be inserted into the database
  await Post.collection.insertMany(posts);

  // Log out a pretty table for comments and posts
  console.table(comments);
  console.table(posts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
