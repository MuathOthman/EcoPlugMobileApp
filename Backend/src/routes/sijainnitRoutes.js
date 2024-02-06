const express = require('express');
const mysql = require('mysql');
const app = express();

const router = express.Router();
const SijainnitController = require('../controllers/sijainnitController');


router.get('/', SijainnitController.findAll);

module.exports = router;