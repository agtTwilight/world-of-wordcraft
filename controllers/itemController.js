// PUT and POST
const express = require('express');
const router = express.Router();
const {Item} = require('../models');

// get item
router.get("/", (req, res) => {
        Item.findAll().then(itemData => {
                res.json(itemData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// post item
router.post("/", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Item.create({
                item_name: req.body.item_name,
                item_type: req.body.item_type,
                health: req.body.health,
                magic: req.body.magic,
                resistance: req.body.resistance,
                defense: req.body.defense,
                weight: req.body.weight,
                cost: req.body.cost,
                quantity: req.body.quantity,
                is_equipped: req.body.is_equipped
        }).then(itemData => {
                res.json(itemData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// delete item
router.delete("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Item.findByPk(req.params.id).then(itemData => {
                if (!itemData) {
                        return res.status(404).json({ msg: "no such comment" })
                } else if (itemData.dataValues.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your item!" })
                }
                Item.destroy({
                        where: {
                                id: req.params.id,
                        }
                }).then(itemData => {
                        res.json(itemData)
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
        Item.findByPk(req.params.id).then(itemData => {
                if (!itemData) {
                        return res.status(404).json({ msg: "no such item" })
                }
                Item.update(req.body, {
                        where: {
                                id: req.params.id,
                        }
                }).then(itemData => {
                        res.json(itemData)
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