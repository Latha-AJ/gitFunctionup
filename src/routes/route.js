const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    res.send('Hello there!')
});

router.get('/candidate1', function (req, res) {
    let candidates = ['Akash', 'Suman', 'Sabiha']
    res.send(candidates)
});

// accessing the details of a particular person using path parameter:

router.get('/candidates/:name', function (req, res) {
    console.log('Requested object is:' + JSON.stringify(req.params))
    console.log('Candidates name is' + req.params.name)
    res.send("Done");
});

//  requesting data using query parameters:

router.get('/candidate', function (req, res) {
    console.log("Query parameter for the request is" + JSON.stringify(req.query))
    let candidates = ['Akash', 'Suman', 'Sabiha']
    let name1 = req.query.gender;
    console.log(name1);
    res.send(candidates)
});
// getting list of Movies
router.get('/Movies', function (req, res) {
    let Movies = ["KGF", "Major", "PK", "Happy New Year"]
    res.send(Movies)
});

//   to return index number of movie array
router.get('/movies/:indexNumber', function (req, res) {
    let Films = ["KGF", "Major", "PK", "Happy New Year"];
    if (req.params.indexNumber > 3) {
        res.send("Enter the valid index")
    }
    else {
        res.send(Films[req.params.indexNumber]);
    }
})

// Printing the array of movie object

router.get('/films', function (req, res) {
    let movieObj = [{ "id": 1, "name": "The Shining" },
    { "id": 2, 'name': "Incendies" },
    { "id": 3, "name": "Rang de Basant" },
    { "id": 4, "name": "Finding Nemo" }
    ]
    res.send(movieObj)
});

router.get('/films/:filmId', function (req, res) {
    let movieObj = [{ "id": 1, "name": "The Shining" },
    { "id": 2, 'name': "Incendies" },
    { "id": 3, "name": "Rang de Basant" },
    { "id": 4, "name": "Finding Nemo" }]
    for (let i = 0; i < 4; i++) {
        if (req.params.filmId == movieObj[i].id) {
            res.send(movieObj[i])
        }}
        res.send("No movie exists with this id");
       })
module.exports = router;
// adding this comment for no reason