const express = require('express');
const router = express.Router();
const {Spellbook} = require('../models');

router.post("/", (req, res) => {
        Spellbook.create({
                CharacterId: req.body.CharacterId
        }).then(spellbookData => {
                res.json(spellbookData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

module.exports = router;