const express = require('express');
const router = express.Router();
const {User, Achievement, Comment, Character, Inventory, Item, Spellbook, Spell} = require('../models');
const bcrypt = require("bcrypt");

// display all users
router.get("/", (req, res) => {
        User.findAll().then(userData => {
                res.json(userData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
})

// logout
router.get("/logout", (req, res) => {
        req.session.destroy();
        res.send("logged out")
})

// get a single user, their achievements, and those achievement comments
router.get("/:id", (req, res) => {
        User.findByPk(req.params.id, {
                include: [{model:Achievement, include:[Comment]},{model:Character, include:[{model: Inventory, include:[Item]}, {model:Spellbook, include:[Spell]}]}]
        }).then(userData => {
                console.log(userData)
                res.json(userData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
})

// make a new user
router.post("/", (req, res) => {
        console.log(req.body);
        User.create({
                username: req.body.username,
                password: req.body.password
        }).then(userData => {
                req.session.userId = userData.id;
                req.session.userUsername = userData.username;
                res.json(userData)
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
})

// login user
router.post("/login", (req, res) => {
        User.findOne({
                where: {
                        username: req.body.username
                }
        }).then(userData => {
                if (!userData) {
                        return res.status(401).json({ msg: "incorrect username or password" })
                } else {
                        if (bcrypt.compareSync(req.body.password, userData.password)) {
                                req.session.userId = userData.id;
                                req.session.userUsername = userData.username;
                                return res.json(userData)
                        } else {
                                return res.status(401).json({ msg: "incorrect username or password" })
                        }
                }
        }).catch(err => {
                console.log(err);
                res.status(500).json({ msg: "an error occured", err })
        })
})

// delete User if logged in as themselves
router.delete("/:id", (req, res) => {
        if (!req.session.userId) {
                return res.status(403).json({ msg: "login first post" })
        }
        console.log(req.body);
        User.findByPk(req.params.id).then(userData => {
                if (!userData) {
                        return res.status(404).json({ msg: "no such user" })
                } else if (userData.dataValues.id !== req.session.userId) {
                        return res.status(403).json({ msg: "not your user!" })
                }
                User.destroy({
                        where: {
                                id: req.params.id,
                        }
                }).then(userData => {
                        res.json(userData)
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