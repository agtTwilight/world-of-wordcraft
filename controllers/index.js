// boiler plate taken from Joe's chirp example
const express = require('express');
const router = express.Router();

// TODO: add routes for each model. Note that the content in `require` is the filename for the models controller. We may want to remove 'api' from some routes... up to us!
const userRoutes = require('./userController');
router.use("/api/users",userRoutes);

const achivementRoutes = require('./achievementController');
router.use("/api/achievements",achivementRoutes);

const commentRoutes = require('./commentController');
router.use("/api/comments",commentRoutes);

// const groupRoutes = require('./groupController');
// router.use("/api/groups",groupRoutes);

const frontEndRoutes = require('./frontEndController');
router.use("/",frontEndRoutes);

//Gameside Routes
const enemyRoutes = require('./enemyController');
router.use("/api/enemies",enemyRoutes);

const characterRoutes = require('./characterController');
router.use("/api/characters",characterRoutes);

const itemRoutes = require('./itemController');
router.use("/api/items",itemRoutes);

const spellRoutes = require('./spellController');
router.use("/api/spells",spellRoutes);

const storyRoutes = require('./storyController');
router.use("/api/stories",storyRoutes);

const forgeRoutes = require('./forgeController');
router.use("/api/forge",forgeRoutes);

module.exports = router;