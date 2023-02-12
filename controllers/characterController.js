const express = require('express');
const router = express.Router();
const {Character} = require('../models');

// get character
router.get("/", (req, res) => {
        Character.findAll().then(characterData => {
                res.json(characterData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// post character
router.post("/", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Character.create({
                character_name: req.body.character_name,
                race: req.body.race,
                alignment: req.body.alignment,
                health: req.body.health,
                magic: req.body.magic,
                resistance: req.body.resistance,
                defense: req.body.defense,
                accuracy: req.body.accuracy,
                luck: req.body.luck,
                constitution: req.body.constitution,
                exp: req.body.exp,
                level: req.body.level,
                spell_point: req.body.spell_point,
                gold: req.body.gold,
                UserId: req.session.userId
        }).then(characterData => {
                res.json(characterData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// delete character
router.delete("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Character.findByPk(req.params.id).then(characterData => {
                if (!characterData) {
                        return res.status(404).json({ msg: "no such comment" })
                } else if (characterData.dataValues.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your character!" })
                }
                Character.destroy({
                        where: {
                                id: req.params.id,
                        }
                }).then(characterData => {
                        res.json(characterData)
                }).catch(err => {
                        console.log(err);
                        res.status(500).json({ msg: "oh noes!", err })
                })
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// PUT
router.put("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Character.findByPk(req.params.id).then(characterData => {
                if (!characterData) {
                        return res.status(404).json({ msg: "no such character" })
                } else if (characterData.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your character!" })
                }
                Character.update(req.body, {
                        where: {
                                id: req.params.id,
                        }
                }).then(characterData => {
                        res.json(characterData)
                }).catch(err => {
                        console.log(err);
                        res.status(500).json({ msg: "oh noes!", err })
                })
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

module.exports = router;