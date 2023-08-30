const { Schema, model } = require('mongoose');



const User = model('user', userSchema);

module.exports = User;
