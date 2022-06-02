const express = require('express');
const logger = require('./logger');

const router = express.Router();

router.get('/test-me1', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me2', function (req, res) {
  console.log('The constant in logger route has a value' + logger.url)  
  logger.myfunction();
    res.send('My second  ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My third ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My fourth ever api!')
});

module.exports = router;
// adding this comment for no reason