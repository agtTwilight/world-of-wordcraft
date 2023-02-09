const express = require('express');
const router = express.Router();
const { User, Achievement, Comment } = require('../models');

// get all comments
router.get("/", (req, res) => {
        Comment.findAll().then(commentData => {
                res.json(commentData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// get a single comment
router.get("/:id", (req, res) => {
        Comment.findByPk(req.params.id, {
                include: [User, Achievement]
        }).then(commentData => {
                res.json(commentData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// post comment
router.post("/", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Comment.create({
                text: req.body.text,
                UserId: req.session.userId
        }).then(commentData => {
                res.json(commentData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// delete comment
router.delete("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Comment.findByPk(req.params.id).then(commentData => {
                if (!commentData) {
                        return res.status(404).json({ msg: "no such comment" })
                } else if (commentData.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your comment!" })
                }
                Comment.destroy({
                        where: {
                                id: req.params.id,
                        }
                }).then(commentData => {
                        res.json(commentData)
                }).catch(err => {
                        console.log(err);
                        res.status(500).json({ msg: "oh noes!", err })
                })
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "oh noes!", err })
        })
})

// update comment
router.put("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        Comment.findByPk(req.params.id).then(commentData => {
                if (!commentData) {
                        return res.status(404).json({ msg: "no such comment" })
                } else if (commentData.UserId !== req.session.userId) {
                        return res.status(403).json({ msg: "not your comment!" })
                }
                Comment.update(req.body, {
                        where: {
                                id: req.params.id,
                        }
                }).then(commentData => {
                        res.json(commentData)
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