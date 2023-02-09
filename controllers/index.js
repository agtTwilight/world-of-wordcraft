// boiler plate taken from Joe's chirp example
const express = require('express');
const router = express.Router();

// TODO: add routes for each model. Note that the content in `require` is the filename for the models controller. We may want to remove 'api' from some routes... up to us!
const userRoutes = require('./userController');
router.use("/api/users",userRoutes);

const achivementRoutes = require('./achievementController');
router.use("/api/achivements",achivementRoutes);

const commentRoutes = require('./commentController');
router.use("/api/comments",commentRoutes);

// const groupRoutes = require('./groupController');
// router.use("/api/groups",groupRoutes);

// TODO: The frontEndRoutes below is what Joe used for handlebars. When we are ready to implement that code we can uncomment this section!
// const frontEndRoutes = require('./frontEndController');
// router.use("/",frontEndRoutes);

module.exports = router;