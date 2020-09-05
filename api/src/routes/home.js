const router = require('express').Router();

const { index, doPost } = require('../handlers/home');

router.get('/', index);
router.post('/', doPost);

module.exports = router;