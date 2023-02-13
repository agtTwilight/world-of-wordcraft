const express = require('express');
const router = express.Router();
const {SpellbookSpell} = require('../models');

router.post("/", (req, res) => {
        SpellbookSpell.create({
                SpellId: req.body.SpellId,
                SpellbookId: req.body.SpellbookId
        }).then(spellbookData => {
                res.json(spellbookData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

module.exports = router;