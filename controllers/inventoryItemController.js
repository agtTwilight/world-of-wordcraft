const express = require('express');
const router = express.Router();
const {InventoryItem} = require('../models');

router.post("/", (req, res) => {
        InventoryItem.create({
                InventoryId: req.body.InventoryId,
                ItemId: req.body.ItemId
        }).then(inventoryItemData => {
                res.json(inventoryItemData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

module.exports = router;