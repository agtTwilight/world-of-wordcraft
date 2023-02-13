const express = require('express');
const { Op } = require(`sequelize`);
const router = express.Router();
const {Forge, Spell, SharedWords} = require('../models');

router.get(`/`, (req, res) => {
    Forge.findAll({include:[Spell]})
        .then(forgeData => {
            res.json(forgeData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
});

router.get(`/type/:type`, (req, res) => {
    Forge.findAll({include:[Spell], where: {
        magic_type: {
            [Op.or]: [req.params.type, `neutral`]
        }
    }})
        .then(forgeData => {
            res.json(forgeData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
});

router.get(`/:id`, (req, res) => {
    Forge.findByPk(req.params.id, {include:[Spell]})
        .then(forgeDatum => {
            res.json(forgeDatum)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
});

router.get(`/sharedwords/:id`, (req, res) => {
    SharedWords.findAll({where: {SpellId: req.params.id}})
        .then(keywordData => {
            res.json(keywordData)
        }).catch(err => {
            console.log(err);
            res.status(500).json({ msg: "an error occured", err })
        })
});




module.exports = router;