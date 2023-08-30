const router = require('express').Router();
const userRoutes = require('./user');
const thoughtRoutes = require('./thoughts');
// connects to the express api, user api, and thought 

router.use('/users', userRoutes);
router.use('/thought', thoughtRoutes);
// allows the suffix of the url to call the routes.

module.exports = router;
// must have export of express to connect it to the other files