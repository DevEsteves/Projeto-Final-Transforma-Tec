const controller = require('../controller/controller');
const express = require('express');
const cors = require('cors');

const router = express.Router();

router.get('/api/users/:username/details', cors(), controller.pesquisarDetails);

module.exports = router;