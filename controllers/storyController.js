const express = require('express');
const router = express.Router();
const {Story} = require('../models');

router.get(`/`, (req, res) => {
    Story.findAll()
        .then(enemyData => {
            res.json(enemyData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
});





module.exports = router;