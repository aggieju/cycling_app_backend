const express = require("express");

const { Router } = express;

const router = new Router();

//Import required models
const User = require("../models").user;
const Users_story = require("../models").users_story;
const Country_budget = require("../models").country_budget;
const Camping = require("../models").camping;


// http :4000/users
router.get("/users", async (request, response, next) => {
    const users = await Users_story.findAll({
        raw: true,
        include: { model: User, attributes: ["name"] },
    });
    response.send(users);
});

// http :4000/budgets
router.get("/budgets", async (request, response, next) => {
    const budgets = await Country_budget.findAll({
        raw: true,
        include: { model: User, attributes: ["name"] },
    });
    response.send(budgets);
});

// http :4000/users_campings
router.get("/users_campings", async (request, response, next) => {
    const users = await User.findAll({
        raw: true,
        include: { model: Camping, attributes: ["name"] },
    });
    response.send(users);
});

module.exports = router;