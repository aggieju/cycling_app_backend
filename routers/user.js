const express = require("express");

const { Router } = express;

const router = new Router();

//Import required models
const User = require("../models").user;
const Users_story = require("../models").users_story;


// http :4000/users
router.get("/users", async (request, response, next) => {
    const users = await User.findAll({
        raw: true,
        include: { model: Users_story, attributes: ["title"] },
    });
    response.send(users);
});

module.exports = router;