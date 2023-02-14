const express = require("express");
const router = express.Router();
const { User, Character, Achievement } = require("../models");

// TODO: once home & login .handlebars are made, 1. check if user is logged in (if so, res.render home w/ appropriate data) else, res.render login w/ appropriate data
router.get("/", (req, res) => {
    User.findByPk(1, {
        include: [Achievement],
    }).then((userData) => {
        const hbsInfo = userData.toJSON();
        console.log(hbsInfo.Achievements[0].text);
        res.render("login", {
            userAchievements: hbsInfo.Achievements[0],
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err })
    });
});

router.get("/signup", (req, res) => {
    User.findByPk(1, {
        include: [Achievement],
    }).then((userData) => {
        const hbsInfo = userData.toJSON();
        console.log(hbsInfo.Achievements[0].text);
        res.render("signup", {
            userAchievements: hbsInfo.Achievements[0],
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err })
    })
});

router.get("/home", (req, res) => {
    if (!req.session.userId) {
        res.render("login")
    }
    User.findByPk(req.session.userId, {
        include: [{ model: Character }, { model: Achievement }],
    }).then((userData) => {
        const hbsInfo = userData.toJSON();
        if (hbsInfo.Achievements[0]) {
            const userAchievements = hbsInfo.Achievements[0]
        } else {
            userAchievements = {text:"Play more to unlock achievements!"}
        }
        res.render("home", {
            userStats: hbsInfo.Characters[0],
            userAchievements: userAchievements,
        });
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err })
    })
});

// TODO: add event listener that calls .../game url
router.get("/game", (req, res) => {
    res.render("game");
})

module.exports = router;
