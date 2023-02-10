const express = require('express');
const router = express.Router();
const {Chirp,User} = require('../models');

// TODO: once home & login .handlebars are made, 1. check if user is logged in (if so, res.render home w/ appropriate data) else, res.render login w/ appropriate data
router.get("/",(req,res)=>{
        res.render("login")
})

router.get("/signup",(req,res)=>{
        res.render("signup")
})

router.get("/home",(req,res)=>{
        res.render("home")
})

// TODO: add event listener that calls .../game url
router.get("/game", (req,res) => {
        res.render("game")
})

module.exports = router;