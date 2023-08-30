const router = require('express').Router();
// calling express 

const {
    getThought,
    getSingleThought,
    createThought,
    // deleteThought, this has to be in another spot
} = require('../../controllers/thoughtsController')
// pulls the thoughtsController into the folder 

router.route('/').get(getThought).post(createThought);
// allows thoughts to go though GET and POST routes 

router.route('/:thoughtId').get(getSingleThought);
// same as above with GET using the ID to pull a single thought 

module.exports = router;
