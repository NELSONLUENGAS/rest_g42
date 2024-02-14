const { updatePostController, getJoyasContoller } = require('../controllers');
const { updatePostMiddleware, handleGetMiddleware } = require('../middlewares');

const router = require('express').Router();

router.put('/post/:id/update', updatePostMiddleware, updatePostController);

router.get('/joyas', handleGetMiddleware, getJoyasContoller);

module.exports = router;
