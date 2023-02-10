const express = require('express');
const router = express.Router();
const {Enemy, Inventory, Story} = require('../models');

router.get(`/`, (req, res) => {
    Enemy.findAll({include:[{model: Inventory}, {model: Story}]}).then(enemyData => {
        res.json(enemyData)
}).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err })
})
});





module.exports = router;