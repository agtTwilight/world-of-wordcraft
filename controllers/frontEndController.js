const express = require("express");
const router = express.Router();
const { User, Character, Achievement } = require("../models");

router.get("/login", (req,res) => {
    req.session.destroy();
    res.render("login")
})

router.get("/signup", (req, res) => {
    // TODO add this back in once we are ready to implement the achievement system
    // User.findByPk(1, {
    //     include: [Achievement],
    // }).then((userData) => {
    //     const hbsInfo = userData.toJSON();
    //     console.log(hbsInfo.Achievements[0].text);
    //     res.render("signup", {
    //         userAchievements: hbsInfo.Achievements[0],
    //     });
    // }).catch(err => {
    //     console.log(err);
    //     res.status(500).json({ msg: "an error occured", err })
    // })
    res.render("signup")
});

router.get("/", (req, res) => {
    if (!req.session.userId) {
        return res.render("login")
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
router.get("/game",  (req, res) => {
     res.render("game");
})

module.exports = router;
