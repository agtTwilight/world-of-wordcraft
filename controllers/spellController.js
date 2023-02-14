// PUT and POST
const express = require('express');
const router = express.Router();
const {Spell} = require('../models');

// get spell
router.get("/", (req, res) => {
        Spell.findAll().then(spellData => {
                res.json(spellData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// post spell
router.post("/", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Spell.create({
                spell_name: req.body.spell_name,
                magic_type: req.body.magic_type,
                magic_words: req.body.magic_words,
                matched_words: req.body.matched_words,
                power: req.body.power,
                target: req.body.target,
                magic_cost: req.body.magic_cost,
                use: req.body.use,
                level: req.body.level,
                char_limit: req.body.char_limit
        }).then(spellData => {
                res.json(spellData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// delete spell
router.delete("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Spell.findByPk(req.params.id).then(spellData => {
                if (!spellData) {
                        return res.status(404).json({ msg: "no such comspell" })
                } else if (spellData.dataValues.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your spell!" })
                }
                Spell.destroy({
                        where: {
                                id: req.params.id,
                        }
                }).then(spellData => {
                        res.json(spellData)
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
        Spell.findByPk(req.params.id).then(spellData => {
                if (!spellData) {
                        return res.status(404).json({ msg: "no such spell" })
                }
                Spell.update(req.body, {
                        where: {
                                id: req.params.id,
                        }
                }).then(spellData => {
                        res.json(spellData)
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