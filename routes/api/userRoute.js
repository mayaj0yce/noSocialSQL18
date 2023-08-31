const router = require('express').Router();
const {
    getUser,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
    //in order of appearance within document
} = require('../../controllers/usersController');

// /api/users
router.route('./').get(getUser).post(createUser);

// allows the GET PUT and DELETE to be seen more clearly 
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/userId/friend/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
