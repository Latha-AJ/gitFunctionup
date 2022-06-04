const express = require('express');
const lodash =require('lodash');
const externalModule = require('./logger')
const anotherModule = require('../logger/logger.js')
const printDate = require('../util/helper.js')
const changeTeaxt = require('../validator/formatter.js')



const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    anotherModule.print1()
    printDate.printDate()
    printDate.printMonth()
    printDate.getBatchInfo()
    changeTeaxt.trimText()
    changeTeaxt.lowerCase()
    changeTeaxt.upperCase()

    res.send('My first ever api!')
});
router.get('/hello', function (req, res) {
     
    // 1. splitting the array into 4
    const firstElement= lodash.chunk(["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December" ] , 4)
    console.log(firstElement);

    //2. first 10 odd numbers:
    const oddNumbers = lodash.tail([1,3,5,7,9,11,13,15,17,19])
    console.log(oddNumbers)

    res.send('My second ever api!')
    
    // 3.merging duplicates
    const duplicateValues = lodash.union([2,3,5],[2,3,6,],[6,7,8],[6,8,9],[10])
    console.log(duplicateValues)

    // creating an object:
    const keyValue = lodash.fromPairs( [["Name", "Latha"], ["gender","female"], ["institution", "functionUP"]]);
    console.log(keyValue)
      

});

    module.exports = router;
// adding this comment for no reason

