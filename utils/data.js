const user = [
    { username: 'brittany', email: 'britt@aol.com' },
    { username: 'sarah', email: 'sar4h@gmail.com' },
    { username: 'ezzeyE123', email: 'EricDbor@Espn.edu' },
    { username: 'nousername114', email: 'invalid@gmail.com' },
    { username: 'mouse', email: 'mikeMars@mac.apple' },
    { username: 'Zac', email: 'smackdatzac@aol.com' },
]
const thought = [
    'Omg This is a thought',
    'brittany you suck',
    'herrowwww it is a bungie bug',
    'hecklers be doing the heckle',
    'the devil is a really good dancer',
    'boogie like the devil baby',
    'yuhhh this is the end ',

]
const reaction = [
    'WOW',
    'so cool!!',
    '?',
    '!!',
    'downvote',
    'upvote',
];

const getRandomUser = () =>
    `${getRandomArrItem(user)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomThought = () =>
    `${getRandomArrItem(thought)}${Math.floor(Math.random() * 10 + 1)}`;

const getRandomReactions = () =>
    `${getRandomArrItem(reaction)}${Math.floor(Math.random() * 10 + 1)}`

module.exports = {
    getRandomUser,
    getRandomThought,
    getRandomReactions,
};