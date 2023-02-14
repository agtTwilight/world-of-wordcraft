const express = require('express');
const router = express.Router();
const {Enemy, Inventory, Story, Mob} = require('../models');

router.get(`/`, (req, res) => {
    Enemy.findAll({include:[{model: Inventory}, {model: Story}]})
        .then(enemyData => {
            res.json(enemyData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
});

router.get(`/:id`, (req, res) => {
    Enemy.findByPk(req.params.id)
        .then(enemyDatum => {
            res.json(enemyDatum)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
});

router.get(`/mob/:id`, (req, res) => {
    Mob.findAll({where: {StoryId: req.params.id}})
        .then(enemyData => {
            res.json(enemyData)
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err })
        })
});




module.exports = router;