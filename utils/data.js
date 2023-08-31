const user = [
{ username: '', email: '' },
{ username: '', email: '' },
{ username: '', email: '' },
{ username: '', email: '' },
{ username: '', email: '' },
{ username: '', email: '' },
]

 const reaction = [
    '',
    '',
    '',
    '',
    '',
    '',
 ]

 const thought = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',

 ];

 const getRandomUser = () =>
 `${getRandomArrItem(user)}${Math.floor(Math.random() * 10 + 1)}`;

 getRandomThought = ( )
 getRandomReactions = ( )

 module.exports = {
    getRandomUser,
    getRandomThought,
    getRandomReactions,
 };