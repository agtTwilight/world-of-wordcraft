const express = require('express');
const router = express.Router();
const {User, Achievement, Comment} = require('../models');

// get all achievements
router.get("/", (req, res) => {
        Achievement.findAll().then(achievementData => {
                res.json(achievementData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// get a single achievement
router.get("/:id", (req, res) => {
        Achievement.findByPk(req.params.id, {
                include: [User, Comment]
        }).then(achievementData => {
                res.json(achievementData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// post achievement
router.post("/", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Achievement.create({
                achievement: req.body.achievement,
                UserId: req.session.userId
        }).then(achievementData => {
                res.json(achievementData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// delete achievement
router.delete("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Achievement.findByPk(req.params.id).then(achievementData => {
                if (!achievementData) {
                        return res.status(404).json({ msg: "no such achievement" })
                } else if (achievementData.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your achievement!" })
                }
                Achievement.destroy({
                        where: {
                                id: req.params.id,
                        }
                }).then(achievementData => {
                        res.json(achievementData)
                }).catch(err => {
                        console.log(err);
                        res.status(500).json({ msg: "oh noes!", err })
                })
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// update achievement
router.put("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Achievement.findByPk(req.params.id).then(achievementData => {
                if (!achievementData) {
                        return res.status(404).json({ msg: "no such achievement" })
                } else if (achievementData.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your achievement!" })
                }
                Achievement.update(req.body, {
                        where: {
                                id: req.params.id,
                        }
                }).then(achievementData => {
                        res.json(achievementData)
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