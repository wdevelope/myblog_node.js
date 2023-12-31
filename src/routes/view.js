const express = require('express');
const router = express.Router();
const viewController = require('../controllers/view');
const validation = require('../middlewares/validation');
const { auth, authAdmin } = require('../middlewares/auth');

// 조회수 업
router.post('/post/:postId', viewController.postViews);
// 조회수 업
router.post('/visitor/:visitorId', viewController.visitorViews);

module.exports = router;
