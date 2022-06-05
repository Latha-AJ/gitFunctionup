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

router.get('/hi', function (req, res) {
     let arr = [1,2,3,5];
     let total=0;
     for (let n=0 ; n<4 ; n++)
     {
       total += arr[n];
     }
    const lastEle = arr.pop();
    let sum = lastEle*(lastEle+1)/2
    const missingNumber = sum-total
    res.send({"missingNumber" : missingNumber});
});

router.get('/soln', function (req, res) {
    let array = [33,34,35,37,38]
    let total=0;
    let len=array.length;
    for(var i in array)
    {
        total +=array[i]
    }
    let firstEle=array[0];
    let lastEle=array.pop();
    let consecutiveSum = (len+1)*(firstEle+lastEle)/2;
    let missingNumber = consecutiveSum-total;
    res.send({"missingNumber": missingNumber})
 });
module.exports = router;
// adding this comment for no reason