const express = require('express');
const router = express.Router();
const {Inventory} = require('../models');

router.post("/", (req, res) => {
        Inventory.create({
                CharacterId: req.body.CharacterId
        }).then(inventoryData => {
                res.json(inventoryData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

module.exports = router;