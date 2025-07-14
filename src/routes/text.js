const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/auth');
const { getText, saveText } = require('../controllers/textController');

router.get('/', requireAuth, getText);
router.post('/', requireAuth, saveText);

module.exports = router; 