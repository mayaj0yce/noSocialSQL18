const router = require('express').Router();
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtRoute');
// connects to the express api, user api, and thought 

router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);
// allows the suffix of the url to call the routes.

module.exports = router;
// must have export of express to connect it to the other files