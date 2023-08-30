const router = require('express').Router();
// calling express 

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
} = require('../../controllers/thoughtsController')
// pulls the thoughtsController into the folder 

router.route('/').get(getThoughts).post(createThought);
// allows thoughts to go though GET and POST routes 

router.route('/:thoughtId').get(getSingleThought);
// same as above with GET using the ID to pull a single thought 

router.route('/delete:thoughtId').delete(deleteThought);


module.exports = router;
